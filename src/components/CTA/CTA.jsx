import React from 'react'

function CTA() {
  return (
    <section className="py-16 text-white bg-black md:py-20 lg:py-24">
      <div className="container px-4 mx-auto text-center sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Get started with ChocoUI today and transform your React applications with beautiful, accessible components.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-100"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-gray-300 bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800 hover:text-white"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA