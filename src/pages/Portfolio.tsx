import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioImages } from '../data/images';

const ImageSkeleton = () => (
  <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
);

const ImageModal = ({ 
  image, 
  onClose, 
  onNext, 
  onPrevious 
}: { 
  image: any; 
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full">
          <img
            src={image.url}
            alt={image.title}
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);
  
  const categories = [
    'All',
    ...Object.keys(portfolioImages)
  ];

  const allImages = selectedCategory === 'All'
    ? Object.values(portfolioImages).flat()
    : portfolioImages[selectedCategory] || [];

  const handleImageLoad = (imageId: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const currentImageIndex = selectedImage ? allImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handleNext = () => {
    if (currentImageIndex < allImages.length - 1) {
      setSelectedImage(allImages[currentImageIndex + 1]);
    } else {
      setSelectedImage(allImages[0]); // Loop back to first image
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(allImages[currentImageIndex - 1]);
    } else {
      setSelectedImage(allImages[allImages.length - 1]); // Loop to last image
    }
  };

  return (
    <div className="w-full bg-primary-lighter">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Explore our craftsmanship and attention to detail
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary-muted hover:bg-primary-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {allImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {!imagesLoaded[image.id] && <ImageSkeleton />}
                <img
                  src={image.url}
                  alt={image.title}
                  loading={index > 5 ? "lazy" : "eager"}
                  onLoad={() => handleImageLoad(image.id)}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;