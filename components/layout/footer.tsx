import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4" aria-label="Company Information">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline" aria-label="About Us">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:underline" aria-label="Careers">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline" aria-label="Blog">Blog</a>
              </li>
              <li>
                <a href="/press" className="hover:underline" aria-label="Press">Press</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4" aria-label="Support Information">Support</h2>
            <ul>
              <li className="mb-2">
                <a href="/help-center" className="hover:underline" aria-label="Help Center">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline" aria-label="Contact Us">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="hover:underline" aria-label="FAQs">FAQs</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline" aria-label="Privacy Policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4" aria-label="Our Services">Services</h2>
            <ul>
              <li className="mb-2">
                <a href="/web-design" className="hover:underline" aria-label="Web Design">Web Design</a>
              </li>
              <li className="mb-2">
                <a href="/seo" className="hover:underline" aria-label="SEO">SEO</a>
              </li>
              <li className="mb-2">
                <a href="/marketing" className="hover:underline" aria-label="Marketing">Marketing</a>
              </li>
              <li>
                <a href="/consulting" className="hover:underline" aria-label="Consulting">Consulting</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4" aria-label="Legal Information">Legal</h2>
            <ul>
              <li className="mb-2">
                <a href="/terms-of-service" className="hover:underline" aria-label="Terms of Service">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:underline" aria-label="Privacy Policy">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/cookie-policy" className="hover:underline" aria-label="Cookie Policy">Cookie Policy</a>
              </li>
              <li>
                <a href="/license" className="hover:underline" aria-label="License">License</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm" aria-label="Copyright Information">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// Descriptive Anchor Tags: Updated the href attributes and aria-label attributes for better clarity and SEO.
// Semantic HTML: Ensured that all headings and lists are used appropriately for better readability and SEO.
// Accessibility Attributes: Added aria-label attributes to headings and links to make the footer more accessible to screen readers.
// These changes help improve the footer’s SEO by ensuring it is well-structured and accessible, making it easier for search engines and users to navigate your site.