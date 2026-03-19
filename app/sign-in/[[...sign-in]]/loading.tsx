export default function SignInLoading() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl w-full items-center">
        {/* Left Side - Logo and Steps Skeleton */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {/* Logo Skeleton */}
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gray-200 rounded-3xl animate-pulse" />

          {/* Steps Skeleton */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-3 animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form Skeleton */}
        <div className="md:col-span-7 flex justify-center">
          <div className="w-full max-w-md space-y-6">
            {/* Form Title Skeleton */}
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />

            {/* Input Fields Skeleton */}
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="h-4 w-20 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-10 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}

            {/* Button Skeleton */}
            <div className="h-10 bg-gray-200 rounded animate-pulse" />

            {/* Link Skeleton */}
            <div className="h-4 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

