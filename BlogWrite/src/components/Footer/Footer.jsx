import React from 'react'
import { Link } from 'react-router-dom'
const Logo = ({ width = "100px" }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-orange-200" // Styled with a color from the retro palette
    >
      <rect x="5" y="5" width="40" height="40" rx="8" ry="8" />
      <path d="M15 15h20v20h-20z" />
    </svg>
  );
};

function Footer() {
  return (
    // The main section now has a deep blue background with a teal border
    <section className="relative overflow-hidden py-10 bg-blue-950 border border-t-2 border-t-teal-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                {/* The copyright text is a lighter teal for contrast */}
                <p className="text-sm text-teal-400">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              {/* Headings are now a warm orange */}
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-orange-400">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    // Link text is a vibrant orange, with a yellow hover effect for a retro feel
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-orange-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-orange-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-orange-200 hover:text-yellow-400"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
