import { BlogPost } from '../../types';

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  // Import all HTML files from the posts directory
  const postFiles = import.meta.glob('../posts/*.html', { as: 'raw' });
  
  for (const [path, loadPost] of Object.entries(postFiles)) {
    const content = await loadPost();
    
    // Create a temporary DOM element to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Extract metadata and content
    const title = doc.querySelector('title')?.textContent || '';
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const date = doc.querySelector('meta[name="date"]')?.getAttribute('content') || '';
    const articleContent = doc.querySelector('article')?.innerHTML || '';
    
    // Generate slug from the filename
    const slug = path.split('/').pop()?.replace('.html', '') || '';
    
    // Determine image URL based on content
    let imageUrl = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'; // default
    
    if (slug.includes('trim') || slug.includes('carpenter') || slug.includes('questions-ask')) {
      imageUrl = 'https://images.unsplash.com/photo-1600566752547-c06598f4a0d5';
    } else if (slug.includes('basement')) {
      imageUrl = 'https://utahhomeremodel.net/wp-content/uploads/2024/02/Utah-basement-remodel-with-bar-2-1080x675.jpg';
    } else if (slug.includes('flooring') || slug.includes('diy')) {
      imageUrl = 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d';
    }
    
    posts.push({
      title,
      slug,
      excerpt: description,
      content: articleContent,
      date,
      imageUrl
    });
  }
  
  // Sort posts by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}