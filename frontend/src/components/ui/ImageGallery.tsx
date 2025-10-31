"use client";

import { useState, useRef } from "react";
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

  // Refs для обработки touch-событий
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  // Минимальное расстояние для срабатывания свайпа (в пикселях)
  const minSwipeDistance = 50;

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

  // Обработчики для touch-событий (swipe)
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchEndY.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    // Получаем финальную позицию из changedTouches (работает даже при быстрых свайпах)
    if (e.changedTouches && e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
      touchEndY.current = e.changedTouches[0].clientY;
    }

    if (touchStartX.current === null || touchEndX.current === null) return;
    if (touchStartY.current === null || touchEndY.current === null) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Игнорируем вертикальные свайпы (для скролла страницы)
    if (isVerticalSwipe) {
      touchStartX.current = null;
      touchStartY.current = null;
      touchEndX.current = null;
      touchEndY.current = null;
      return;
    }

    // Обрабатываем горизонтальные свайпы
    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }

    // Сбрасываем значения
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
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
        <div
          className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden group"
          style={{ touchAction: "pan-y pinch-zoom" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-200 z-10"
            title="Открыть в полноэкранном режиме"
          >
            <Maximize2 size={20} />
          </button>

          {/* Навигационные кнопки */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-lg opacity-100 md:opacity-70 md:hover:opacity-100 transition-opacity duration-200 z-10"
                title="Предыдущее изображение"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-lg opacity-100 md:opacity-70 md:hover:opacity-100 transition-opacity duration-200 z-10"
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
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 overflow-hidden"
            onClick={closeFullscreen}
          >
            <div className="relative w-full h-full max-w-7xl max-h-full flex flex-col items-center justify-center overflow-hidden">
              {/* Кнопка закрытия */}
              <button
                onClick={closeFullscreen}
                className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-black/50 text-white rounded-lg z-10"
                title="Закрыть"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Изображение */}
              <div className="relative w-full flex-1 flex items-center justify-center min-h-0 px-2 md:px-0 mb-16 md:mb-0">
                <div
                  className="w-full max-w-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{
                    touchAction: "pan-y pinch-zoom",
                    aspectRatio: "16/9",
                    maxHeight: "calc(100vh - 14rem)",
                    maxWidth: "calc(100vw - 1rem)",
                    height: "auto",
                  }}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  {images[currentIndex] ? (
                    <img
                      src={getImagePath(images[currentIndex])}
                      alt={`${alt} ${currentIndex + 1}`}
                      className="w-full max-w-full max-h-full object-contain"
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto",
                      }}
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
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
                      title="Предыдущее изображение"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
                      title="Следующее изображение"
                    >
                      <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                    </button>
                  </>
                )}

                {/* Счетчик */}
                {images.length > 1 && (
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 md:py-2 bg-black/50 text-white text-sm md:text-lg rounded-full">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Миниатюры в полноэкранном режиме */}
              {images.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 flex gap-2 md:gap-3 justify-center overflow-x-auto pb-2 w-full max-w-full px-2 md:relative md:mt-3 md:pb-0">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(index);
                      }}
                      className={`flex-shrink-0 w-16 h-10 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
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
