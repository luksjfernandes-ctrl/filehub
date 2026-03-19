"use client";

import Link from "next/link";
import Image from "next/image";
import { Upload, Share2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 max-w-7xl w-full items-center">
        {/* Left Side - Slogan and Steps (40%) */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-10">
          {/* Slogan */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              File Sharing Made Simple
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Upload and share your files with public links that work everywhere.
            </p>
          </div>

          {/* Steps - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-4 justify-between">
            {/* Step 1 - Sign Up */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
              <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                <UserPlus className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Sign Up</h3>
            </div>

            {/* Step 2 - Upload */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
              <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Upload</h3>
            </div>

            {/* Step 3 - Share */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
              <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                <Share2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Share</h3>
            </div>
          </div>
        </div>

        {/* Right Side - Logo and Buttons (60%) */}
        <div className="md:col-span-3 flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="w-56 h-56 md:w-80 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg">
            <Image
              src="/assets/logo.svg"
              alt="FileHub Logo"
              width={300}
              height={300}
              className="w-5/6 h-5/6"
              priority
            />
          </div>

          {/* Buttons - Full Width */}
          <div className="w-full max-w-lg flex flex-col gap-4">
            {/* Sign In Button - Pure Blue */}
            <Button 
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base"
              asChild
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>

            {/* Sign Up Button - Pure White */}
            <Button 
              size="lg"
              className="w-full bg-white hover:bg-gray-50 text-blue-600 font-semibold border-2 border-blue-600 py-6 text-base"
              asChild
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
