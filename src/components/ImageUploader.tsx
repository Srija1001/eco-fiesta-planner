
import React, { useState } from 'react';
import { Camera, Upload, X, Trash2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        onImageUpload(file);
      };
      reader.onerror = () => {
        toast({
          title: "Error reading file",
          description: "There was a problem processing your image",
          variant: "destructive"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        onImageUpload(file);
      };
      reader.onerror = () => {
        toast({
          title: "Error reading file",
          description: "There was a problem processing your image",
          variant: "destructive"
        });
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full">
      {!image ? (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragging 
              ? 'border-eco-leaf bg-eco-leaf/10' 
              : 'border-green-200 dark:border-green-800 hover:border-eco-leaf dark:hover:border-eco-leaf'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-eco-leaf/10 rounded-full p-4">
              <Camera size={36} className="text-eco-leaf" />
            </div>
            <div>
              <p className="text-lg font-medium text-eco-forest dark:text-white">
                Upload Venue Image
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Drag and drop or click to upload
              </p>
            </div>
            <label className="cursor-pointer btn-eco-primary inline-flex items-center mt-2">
              <Upload size={16} className="mr-2" />
              Browse Files
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden border border-green-200 dark:border-green-800">
          <img
            src={image}
            alt="Venue"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={removeImage}
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
