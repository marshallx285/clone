import React from 'react'

function Feature() {
  return (
    <section className="py-16 bg-white md:py-20 lg:py-24">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Features that set us apart
          </h2>
          <p className="text-lg text-gray-600">
            Our UI library is built with the developer experience in mind, making it easy to create beautiful interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8H8.01M12 8H12.01M16 8H16.01M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">Modular Components</h3>
            <p className="text-gray-600">
              Mix and match components to create unique interfaces that fit your brand.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12L11 16L17 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">Customizable</h3>
            <p className="text-gray-600">
              Easily customize colors, spacing, and more to match your design system.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14H11V21L20 10H13Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">Performance First</h3>
            <p className="text-gray-600">
              Optimized for speed and efficiency, ensuring your app stays fast.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H16M8 3V5H16V3M8 3H16M19 9H5M10 13H14"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">Developer Friendly</h3>
            <p className="text-gray-600">
              Well-documented API with TypeScript support for a smooth development experience.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9L14 14.5L11.5 12M7 14.5H3M7 8.5H3M21 14.5H16.5M21 8.5H12M7 21C5.34315 21 4 19.6569 4 18C4 16.3431 5.34315 15 7 15C8.65685 15 10 16.3431 10 18C10 19.6569 8.65685 21 7 21ZM7 9C5.34315 9 4 7.65685 4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6C10 7.65685 8.65685 9 7 9Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-black">Accessible by Default</h3>
            <p className="text-gray-600">
              Built with accessibility in mind, ensuring your app works for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature