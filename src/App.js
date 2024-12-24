import React from "react";

const App = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Andriy M</h1>
        <p className="text-xl">Web Developer & Designer</p>
      </header>

      {/* About Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-700">
          I'm a web developer specializing in building and designing
          interactive websites and applications.
        </p>
      </section>

      {/* Experience Section */}
      <section className="p-6">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p className="text-gray-700">Company Name (2022-Present)</p>
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">UI/UX Designer</h3>
            <p className="text-gray-700">Company Name (2020-2022)</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>Contact: email@example.com</p>
        <p>LinkedIn | GitHub | Twitter</p>
      </footer>
    </div>
  );
};

export default App;
