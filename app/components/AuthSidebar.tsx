"use client";

import Image from "next/image";
import { Upload, Share2, UserPlus } from "lucide-react";

export default function AuthSidebar() {
  return (
    <div className="md:col-span-5 flex flex-col items-center justify-center gap-12">
      {/* Logo */}
      <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
        <Image
          src="/assets/logo.svg"
          alt="FileHub Logo"
          width={160}
          height={160}
          className="w-full h-full p-6"
          priority
        />
      </div>

      {/* Slogan */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          File Sharing Made Simple
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Upload and share your files with public links that work everywhere.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Step 1 - Sign Up */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 p-3 bg-blue-100 rounded-lg">
            <UserPlus className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">
            Sign Up
          </h3>
        </div>

        {/* Step 2 - Upload */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 p-3 bg-blue-100 rounded-lg">
            <Upload className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">
            Upload
          </h3>
        </div>

        {/* Step 3 - Share */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 p-3 bg-blue-100 rounded-lg">
            <Share2 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">
            Share
          </h3>
        </div>
      </div>
    </div>
  );
}
