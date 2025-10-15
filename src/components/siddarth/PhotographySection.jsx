import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { X, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const { data: photos, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: () => base44.entities.Photo.list('-created_date'),
    initialData: [],
  });

  return (
    <section id="photography" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Photography
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Capturing the world through my lens
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(8).fill(0).map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-xl" />
            ))}
          </div>
        ) : photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer group relative aspect-square overflow-hidden rounded-xl"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.image_url}
                  alt={photo.title || 'Photo'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {photo.location && (
                    <div className="flex items-center gap-2 text-white text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{photo.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Photos coming soon</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image_url}
                alt={selectedPhoto.title || 'Photo'}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              {(selectedPhoto.title || selectedPhoto.location) && (
                <div className="mt-6 text-center">
                  {selectedPhoto.title && (
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedPhoto.title}
                    </h3>
                  )}
                  {selectedPhoto.location && (
                    <p className="flex items-center justify-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {selectedPhoto.location}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}