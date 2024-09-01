// components/ServicesSection/index.tsx
import React from 'react';

const services = [
  {
    id: 1,
    icon: '📋',
    title: 'Complaint Registration',
    description: 'Easily register your complaints through our user-friendly platform. Our system ensures that your issue is logged and acknowledged promptly, starting the resolution process as soon as possible.',
  },
  {
    id: 2,
    icon: '🔍',
    title: 'Issue Tracking',
    description: 'Track the status of your complaint in real-time. Stay informed with regular updates and notifications about the progress of your case, ensuring transparency and accountability throughout the resolution process.',
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Resolution Support',
    description: 'Receive dedicated support from our experienced team. We work diligently to address your concerns, offering personalized solutions and assistance to resolve your issue effectively and efficiently.',
  },
  {
    id: 4,
    icon: '📞',
    title: 'Customer Assistance',
    description: 'Access our customer assistance services for any queries or follow-ups. Our team is available to provide guidance, answer questions, and ensure that your experience with our complaint registration cell is smooth and satisfactory.',
  },
];

const ServicesSection: React.FC = () => {


    const structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Complaint Registration",
            "provider": {
              "@type": "Organization",
              "name": "Your Organization Name",
              "url": "https://www.yourwebsite.com"
            }
          };
  return (
    <section id="services" className="bg-white py-16 w-full">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-indigo-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 text-center text-indigo-600">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// Add structured data in JSON-LD format to help search engines understand your services.