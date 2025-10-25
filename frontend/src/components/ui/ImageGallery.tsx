"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { getImagePath } from "@/utils/imagePaths";

interface ImageGalleryProps {
  images: string[];
  alt?: string;
  className?: string;
}

const ImageGallery = ({
  images,
  alt = "Screenshot",
  className = "",
}: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Обработка клавиш для навигации
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeFullscreen();
  };

  if (!images || images.length === 0) {
    return (
      <div
        className={`aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <div className="text-4xl text-primary mb-2">📷</div>
          <p className="text-muted">Скриншоты проекта</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Основная галерея */}
      <div className={`relative ${className}`} onKeyDown={handleKeyDown} tabIndex={0}>
        {/* Главное изображение */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-black/20" />

          {/* Изображение или плейсхолдер */}
          {images[currentIndex] ? (
            <img
              src={getImagePath(images[currentIndex])}
              alt={`${alt} ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Если изображение не загрузилось, показываем плейсхолдер
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
          ) : null}

          {/* Плейсхолдер для изображения */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ display: images[currentIndex] ? "none" : "flex" }}
          >
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">📷</div>
              <p className="text-muted">Скриншот {currentIndex + 1}</p>
            </div>
          </div>

          {/* Кнопка полноэкранного режима */}
          <button
            onClick={openFullscreen}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            title="Открыть в полноэкранном режиме"
          >
            <Maximize2 size={20} />
          </button>

          {/* Навигационные кнопки */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Предыдущее изображение"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Следующее изображение"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Счетчик изображений */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Миниатюры */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "border-primary"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                {images[index] ? (
                  <img
                    src={getImagePath(images[index])}
                    alt={`${alt} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Если изображение не загрузилось, показываем плейсхолдер
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = "flex";
                    }}
                  />
                ) : null}

                <div
                  className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                  style={{ display: images[index] ? "none" : "flex" }}
                >
                  <span className="text-xs text-muted">{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Полноэкранный режим */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Кнопка закрытия */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg z-10"
                title="Закрыть"
              >
                <X size={24} />
              </button>

              {/* Изображение */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                  {images[currentIndex] ? (
                    <img
                      src={getImagePath(images[currentIndex])}
                      alt={`${alt} ${currentIndex + 1}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Если изображение не загрузилось, показываем плейсхолдер
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Плейсхолдер для полноэкранного режима */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ display: images[currentIndex] ? "none" : "flex" }}
                  >
                    <div className="text-center">
                      <div className="text-6xl text-primary mb-4">📷</div>
                      <p className="text-white text-xl">Скриншот {currentIndex + 1}</p>
                    </div>
                  </div>
                </div>

                {/* Навигационные кнопки */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
                      title="Предыдущее изображение"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
                      title="Следующее изображение"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </>
                )}

                {/* Счетчик */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white text-lg rounded-full">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Миниатюры в полноэкранном режиме */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-6 justify-center overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(index);
                      }}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentIndex
                          ? "border-primary"
                          : "border-transparent hover:border-primary/50"
                      }`}
                    >
                      {images[index] ? (
                        <img
                          src={getImagePath(images[index])}
                          alt={`${alt} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Если изображение не загрузилось, показываем плейсхолдер
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const placeholder = target.nextElementSibling as HTMLElement;
                            if (placeholder) placeholder.style.display = "flex";
                          }}
                        />
                      ) : null}

                      <div
                        className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                        style={{ display: images[index] ? "none" : "flex" }}
                      >
                        <span className="text-sm text-white">{index + 1}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
