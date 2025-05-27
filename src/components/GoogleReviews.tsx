import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Fallback reviews in case API is not available
const fallbackReviews = [
  {
    author_name: "Jeff Talbot",
    rating: 5,
    text: "We are so happy with the work that Leo and his team did on our house! We wanted to update our living room with a new fireplace, new mantel, new floating shelves, new paint/finish over the old dark wood cabinets. Leo took great care to understand exactly what we wanted and was quick to schedule out his team of drywallers, carpenter, and painters. The team did phenomenal work (the before and after photos speak for themselves!), but just as importantly they did it on schedule and kept in close communication throughout. Leo did a great job making sure we were happy with the progress and would adjust things based on our feedback. I really appreciated how much he was really invested in the project and making sure it was done exactly how we wanted. The team even jumped into action and fixed a couple of other unrelated house projects at the last minute when we asked! We feel so fortunate to have found LM Finishing and Construction and look forward to hiring them for future projects. Thanks, Leo!",
    relative_time_description: "10 months ago",
    reviewer_type: "Local Guide",
    review_count: "10 reviews",
    photo_count: "6 photos"
  },
  {
    author_name: "Suzette Verdine",
    rating: 5,
    text: "Leo was professional, responsive, on time and his work was of high quality. Great communication from start to finish. He installed a residential remodel stair railing. He listened to what I wanted, I got exactly what I wanted. I highly recommend this company.",
    relative_time_description: "a year ago",
    reviewer_type: "",
    review_count: "6 reviews",
    photo_count: "3 photos"
  },
  {
    author_name: "Denise Stark",
    rating: 5,
    text: "I hired LM Finishing to install laminate flooring and also to do closet shelving in our unfinished basement. Leo was also helpful in fixing poor quality finish work we had done by another contractor. Leo was very responsive with his communication. He was willing to listen to my wants and helpful with suggestions. Leo and his team are professional and respectful. Not the cheapest guy in town but does quality professional work. Would hire again.",
    relative_time_description: "a year ago",
    reviewer_type: "Local Guide",
    review_count: "45 reviews",
    photo_count: "140 photos"
  }
];

const MAX_CHARS = 300;

const ReviewText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > MAX_CHARS;
  
  const displayText = isExpanded ? text : text.slice(0, MAX_CHARS);
  
  return (
    <p className="text-gray-600 italic">
      {shouldTruncate && !isExpanded ? `${displayText}...` : displayText}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 text-primary-600 hover:text-primary-700 font-medium focus:outline-none"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </p>
  );
};

const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
          <a 
            href="https://www.google.com/search?q=lm+finishing+and+construction&sca_esv=6032389a2ad49ca8&sxsrf=AHTn8zr_eBlgUY3nkTLgB1yqcPsJYWuAug%3A1741304674270&ei=YjPKZ_OfELm90PEPnOLw0Qo&ved=0ahUKEwjz2Li00faLAxW5HjQIHRwxPKoQ4dUDCBA&uact=5&oq=lm+finishing+and+construction&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWxtIGZpbmlzaGluZyBhbmQgY29uc3RydWN0aW9uMgYQABgWGB4yAhAmMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIkStQAFjWKXAEeACQAQCYAaUBoAGyG6oBBTEzLjIwuAEDyAEA-AEBmAIloALyHMICBBAjGCfCAgoQIxiABBgnGIoFwgILEAAYgAQYkQIYigXCAhEQLhiABBixAxjRAxiDARjHAcICDhAuGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMY0QMYxwHCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIOEAAYgAQYkQIYsQMYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIQEAAYgAQYsQMYQxiDARiKBcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICChAAGIAEGBQYhwLCAgUQABiABMICCxAuGIAEGNEDGMcBwgIKEAAYgAQYsQMYCsICCxAuGIAEGMcBGK8BwgIHEC4YgAQYCsICChAuGIAEGLEDGArCAgcQABiABBgKwgIFEAAY7wXCAgUQIRigAcICBRAhGJ8FwgIGEAAYDRgemAMAkgcEOS4yOKAHy4cC&sclient=gws-wiz-serp#lrd=0x874d7be36d45ddbb:0x7f9f0630f408973b,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#4A90E2] hover:underline"
          >
            View all reviews on Google
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fallbackReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                  {(review.reviewer_type || review.review_count || review.photo_count) && (
                    <p className="text-sm text-gray-500">
                      {review.reviewer_type && <span>{review.reviewer_type} · </span>}
                      {review.review_count && <span>{review.review_count} · </span>}
                      {review.photo_count && <span>{review.photo_count}</span>}
                    </p>
                  )}
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      {review.relative_time_description}
                    </span>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-gray-400 opacity-50" />
              </div>
              <ReviewText text={review.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;