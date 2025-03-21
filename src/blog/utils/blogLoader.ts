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
    
    posts.push({
      title,
      slug,
      excerpt: description,
      content: articleContent,
      date,
      imageUrl: `https://images.unsplash.com/photo-${Date.now()}` // You can customize this
    });
  }
  
  // Sort posts by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}