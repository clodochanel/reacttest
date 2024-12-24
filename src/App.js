import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar Section */}
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hicham Youssef</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#experience" className="hover:text-yellow-400">Experience</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-gray-800 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">Hicham Youssef El Housny</h1>
        <p className="text-2xl mt-4">Web Developer & Designer</p>
      </header>

      {/* About Section */}
      <section id="about" className="p-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm a web developer specializing in building and designing interactive websites and applications.
          </p>
          <p className="text-lg text-gray-700">
            And I LOVE TACOS! 🌮
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Experience</h2>
          <ul className="space-y-6">
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <p className="text-xl text-gray-600">Company Name (2022-Present)</p>
              <p className="mt-2 text-gray-700">Responsible for building interactive UI components using React and ensuring a seamless user experience.</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold">UI/UX Designer</h3>
              <p className="text-xl text-gray-600">Company Name (2020-2022)</p>
              <p className="mt-2 text-gray-700">Worked on designing intuitive and user-friendly interfaces and improving the overall user experience.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Contact</h2>
          <p className="text-xl mb-4">Feel free to reach out to me via email or connect on social media.</p>
          <p className="text-lg mb-6">Email: <a href="mailto:email@example.com" className="text-yellow-400 hover:underline">email@example.com</a></p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Hicham Youssef. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
