

import Head from 'next/head';

const AboutSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Organization Name",
    "description": "At CRC, we understand that managing and addressing customer complaints is crucial to maintaining trust and ensuring high-quality service. Our Complaint Registration Cell is dedicated to providing an efficient and empathetic solution to any issues or concerns you may encounter.",
    "url": "https://www.yourwebsite.com",
    "logo": "https://www.yourwebsite.com/logo.png"
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <section id="about" className="w-full py-16">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-indigo-600">About Us</h1>
          </header>
          <div className="flex flex-col md:flex-row">
            <figure className="md:w-1/2">
              <img
                src="https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png"
                alt="About Us Image"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <figcaption className="sr-only">Image illustrating our story</figcaption>
            </figure>
            <article className="md:w-1/2 bg-gray-100 p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                At CRC, we understand that managing and addressing customer complaints is crucial to maintaining trust and ensuring high-quality service. Our Complaint Registration Cell is dedicated to providing an efficient and empathetic solution to any issues or concerns you may encounter.
                {/* Additional content */}
              </p>
              <p className="text-gray-600">
                We value your feedback and are continuously working to enhance our processes and services. Your satisfaction is our priority, and we are dedicated to ensuring that your experience with us is positive and fulfilling. Thank you for giving us the opportunity to serve you better.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;



// Use Semantic HTML: Use <article> and <figure> for better content structure.
// Add Structured Data: Include JSON-LD structured data to help search engines understand your content.
// Ensure Accessibility: Use descriptive alt text and proper headings.
// Optimize Performance: Ensure images are optimized and perform well.
// Implementing these practices will enhance the SEO of your AboutSection and improve user experience.