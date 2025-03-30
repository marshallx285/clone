import { Link } from "react-router-dom";
import PreviewComponent from "../../components/PreviewCom/PreviewComponent";


const Hero = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-white md:py-20 lg:py-24">
      <div className="container grid grid-cols-1 gap-10 px-4 mx-auto lg:grid-cols-2 sm:px-6">
        {/* Left side content */}
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider text-black bg-gray-100 rounded-full">
              New Components v2.0
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            Beautiful UI components, crafted with care
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            A professionally designed, fully responsive UI component library for React applications. Build beautiful interfaces without starting from scratch.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
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
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              View on GitHub
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
              >
                <path
                  d="M15 3L21 3.00002M21 3.00002L21 9M21 3.00002L13 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - PreviewCodeToggle */}
        <PreviewComponent title="Live Preview" code={`<YourComponent />`} language="jsx">
          {/* Insert your actual preview component here */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Your Component Preview</h3>
            <p className="text-sm text-gray-600">This is where your component will be rendered.</p>
          </div>
        </PreviewComponent>
      </div>
    </section>
  );
};

export default Hero;