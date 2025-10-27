"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

export default function GallerySection() {
  const [images, setImages] = useState([
    "/img1.png",
    "/img2.png",
    "/img3.png",
  ]);
  const [startIndex, setStartIndex] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - 3) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
      <div className="panel p-6 rounded-xl2 max-w-full mt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-8 h-8 icon-btn text-gray-300">?</div>
          <div className="px-6 py-2 tab-pill text-sm font-medium text-gray-300 shadow-neuInset">
            Gallery
          </div>
          <div className="flex items-center gap-3">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAddImage}
              />
              <div className="bg-[#353B44] hover:bg-[#3F454E] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-[inset_2px_2px_4px_#1f2328,inset_-2px_-2px_4px_#3b414a] transition">
                <Plus size={16} /> ADD IMAGE
              </div>
            </label>
            <button
              onClick={handlePrev}
              className="w-8 h-8 icon-btn text-gray-300 flex items-center justify-center hover:scale-110 transition shadow-[4px_4px_8px_#1f2328,-4px_-4px_8px_#3b414a]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 icon-btn text-gray-300 flex items-center justify-center hover:scale-110 transition shadow-[4px_4px_8px_#1f2328,-4px_-4px_8px_#3b414a]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex gap-6 overflow-hidden">
          {images.slice(startIndex, startIndex + 3).map((img, index) => (
            <div
              key={index}
              className="w-[230px] h-[230px] rounded-3xl overflow-hidden shadow-[6px_6px_12px_#1f2328,-6px_-6px_12px_#353b44] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#4e94ff]"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
  );
}
