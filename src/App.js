import React from "react";

// Reusable Button Component
const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 transform hover:scale-105 ${className}`}
  >
    {label}
  </button>
);

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar Section */}
      <nav className="bg-green-600 text-white p-6 shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">JobFinder</h1>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-green-200">Home</a></li>
            <li><a href="#services" className="hover:text-green-200">Services</a></li>
            <li><a href="#job-listings" className="hover:text-green-200">Job Listings</a></li>
            <li><a href="#testimonials" className="hover:text-green-200">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-green-600 text-white text-center py-40">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Your Dream Job Awaits</h2>
          <p className="text-xl mb-8">Connecting Talented Individuals with Leading Companies</p>
          <Button label="Browse Job Listings" onClick={() => window.scrollTo(0, document.getElementById("job-listings").offsetTop)} className="bg-yellow-500 hover:bg-yellow-400" />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Job Search Assistance</h3>
              <p className="text-gray-700">We help candidates find the perfect job by matching skills with opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Resume Building</h3>
              <p className="text-gray-700">Our experts will guide you in crafting a resume that stands out to employers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Interview Coaching</h3>
              <p className="text-gray-700">Prepare for your interviews with mock sessions and personalized feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="job-listings" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Featured Job Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">Frontend Developer</h3>
              <p className="text-gray-700">Company: Tech Innovators</p>
              <p className="text-gray-700">Location: Remote</p>
              <Button label="Apply Now" onClick={() => alert('Application Submitted!')} className="bg-green-600 hover:bg-green-500 mt-4" />
            </div>
            {/* Job 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">UI/UX Designer</h3>
              <p className="text-gray-700">Company: Creative Studios</p>
              <p className="text-gray-700">Location: New York, NY</p>
              <Button label="Apply Now" onClick={() => alert('Application Submitted!')} className="bg-green-600 hover:bg-green-500 mt-4" />
            </div>
            {/* Job 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600">Data Analyst</h3>
              <p className="text-gray-700">Company: DataWorks</p>
              <p className="text-gray-700">Location: Chicago, IL</p>
              <Button label="Apply Now" onClick={() => alert('Application Submitted!')} className="bg-green-600 hover:bg-green-500 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
          <div className="flex justify-center space-x-12">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg italic text-gray-700">"JobFinder helped me land my dream job in just a few weeks. Highly recommend!"</p>
              <p className="mt-4 font-semibold">John Doe</p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg italic text-gray-700">"Their resume building service made a huge difference in my job search!"</p>
              <p className="mt-4 font-semibold">Jane Smith</p>
              <p className="text-gray-600">UX Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg italic text-gray-700">"The interview coaching was spot on. I felt fully prepared for every interview!"</p>
              <p className="mt-4 font-semibold">Mark Johnson</p>
              <p className="text-gray-600">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Contact Us</h2>
          <p className="text-lg mb-8">Have any questions? Reach out to us today and start your journey towards your dream job!</p>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 rounded-lg text-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 rounded-lg text-gray-700"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 rounded-lg text-gray-700"
            />
            <Button label="Send Message" onClick={(e) => e.preventDefault()} className="bg-yellow-500 hover:bg-yellow-400 w-full mt-4" />
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} JobFinder Recruitment Agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
