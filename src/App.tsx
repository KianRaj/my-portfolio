import React from "react";
const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans relative">
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/0f96505131e5474ee161b5d4014a6b4e/51cb7a330a796bebc3133fc3d1c4a019.png')`,
          opacity: 1,
        }}
      ></div>
      <div className="fixed inset-0 bg-black/30 z-0"></div>
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 text-white cursor-pointer hover:scale-105 transition-transform duration-300 relative"
            style={{
              textShadow:
                "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
              background: "linear-gradient(135deg, #fff 0%, #e0e7ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
            onClick={() => {
              const popup = document.createElement("div");
              popup.className =
                "fixed inset-0 flex items-center justify-center z-50 bg-black/80";
              popup.innerHTML = `
<div class="bg-gray-900/90 p-12 rounded-xl border border-purple-500/30 shadow-2xl transform scale-100 transition-transform duration-300">
<h2 class="text-9xl font-bold bg-gradient-to-r from-white via-purple-300 to-blue-200 bg-clip-text text-transparent mb-8" style="text-shadow: 0 0 20px rgba(168, 85, 247, 0.5)">Aman Kumar</h2>
<button class="absolute top-4 right-4 text-white/70 hover:text-white text-xl">
<i class="fas fa-times"></i>
</button>
</div>
`;
              document.body.appendChild(popup);
              const button = popup.querySelector("button");
              if (button) {
                button.onclick = () => popup.remove();
              }
            }}
          >
            Aman Kumar
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 mb-6 animate-pulse"></div>
          <h2 className="text-xl md:text-2xl font-light tracking-wider mb-8">
            M.Tech Student • AI Researcher • GenAI Enthusiast
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="!rounded-button whitespace-nowrap px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium cursor-pointer hover:opacity-90 transition-all">
              View Projects
            </button>
            <button className="!rounded-button whitespace-nowrap px-6 py-3 bg-transparent border border-white/30 text-white font-medium cursor-pointer hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/70 text-2xl"></i>
        </div>
      </div>
      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="mb-8">
                <img
                  src="https://static.readdy.ai/image/0f96505131e5474ee161b5d4014a6b4e/b52cc6626c5f9af75b35c0ec372ed130.jfif"
                  alt="Aman Kumar"
                  className="w-48 h-48 rounded-full border-4 border-purple-500/30 shadow-xl shadow-purple-500/20 mx-auto md:mx-0"
                />
              </div>
              <h2 className="text-3xl font-bold mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  About Me
                </span>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mt-2"></div>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm currently pursuing my M.Tech in Computer Science at IIIT
                Delhi, specializing in Computer Science and Engineering. My
                research focuses on advanced AI applications, particularly in
                the field of Generative AI and intelligent systems.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a Research Assistant at MIDAS Lab, I'm working on Real-time
                Accident Detection and Prediction using Depth Estimation as my
                thesis work. I also serve as a Teaching Assistant for DSA and
                Introduction to Programming in Python courses.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  Technical skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Generative AI",
                    "n8n",
                    "ML",
                    "DL",
                    "Large language Model",
                    "OOPS",
                    "OpenCv",
                    "LangChain",
                    "Agentic RAG",
                    "CrewAI",
                    "Langfuse Evaluation",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="!rounded-button whitespace-nowrap px-4 py-2 bg-gray-800/80 border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-gray-700/80 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    Current Focus
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <i className="fas fa-chevron-right text-purple-500 mt-1 mr-2"></i>
                      <span>Real-time Accident Detection using AI</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-chevron-right text-purple-500 mt-1 mr-2"></i>
                      <span>Multi-agent Systems for Recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-chevron-right text-purple-500 mt-1 mr-2"></i>
                      <span>LLM-based Test Generation & Evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education & Research */}
      <section id="education" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Education & Research
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mt-2 mx-auto"></div>
          </h2>
          <div className="space-y-12">
            {/* Education */}
            <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-purple-900/10 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <i className="fas fa-graduation-cap text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Education
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    M.Tech in Computer Science and Engineering
                  </h4>
                  <h5 className="text-lg text-gray-300 mb-4">IIIT Delhi</h5>
                  <p className="text-gray-400 mb-4">
                    Specializing in Computer Science and Engineering with a
                    focus on AI and intelligent systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                      Computer Science
                    </span>
                    <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                      Artificial Intelligence
                    </span>
                    <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                      Machine Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Research Position 1 */}
            <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-purple-900/10 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <i className="fas fa-microscope text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Research</h3>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    Research Assistant
                  </h4>
                  <h5 className="text-lg text-gray-300 mb-4">
                    MIDAS Lab - IIIT Delhi
                  </h5>
                  <p className="text-gray-400 mb-4">
                    Working on Real-time Accident Detection and Prediction using
                    Depth Estimation as a thesis work.
                  </p>
                  <p className="text-gray-400 mb-4">
                    The research focuses on developing AI models that can detect
                    and predict accidents in real-time using advanced depth
                    estimation techniques.
                  </p>
                </div>
              </div>
            </div>
            {/* Research Position 2 */}
            <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-purple-900/10 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <i className="fas fa-chalkboard-teacher text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Teaching</h3>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    Teaching Assistant
                  </h4>
                  <h5 className="text-lg text-gray-300 mb-4">IIIT Delhi</h5>
                  <p className="text-gray-400 mb-4">
                    Serving as a Teaching Assistant for Data Structures and
                    Algorithms (DSA) and Introduction to Programming in Python
                    courses during the first and second semesters.
                  </p>
                  <p className="text-gray-400 mb-4">
                    Responsibilities include conducting lab sessions, grading
                    assignments, and providing one-on-one assistance to
                    students.
                  </p>
                </div>
              </div>
            </div>
            {/* Research Position 3 */}
            <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-purple-900/10 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <i className="fas fa-flask text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Internship
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    Research Intern
                  </h4>
                  <h5 className="text-lg text-gray-300 mb-4">
                    UIUC+ Summer Research Program
                  </h5>
                  <p className="text-gray-400 mb-4">
                    Labelling mutant equivalent mutant on UIUC Plus project
                    repository and generating tests using LLMs to evaluate their
                    efficiency.
                  </p>
                  <p className="text-gray-400 mb-4">
                    The research aims to assess the effectiveness of
                    LLM-generated tests in identifying software mutants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Projects
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mt-2 mx-auto"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-purple-900/10 transition-all group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Beautiful%20abstract%20visualization%20of%20image%20to%20text%20generation%20using%20CGAN%2C%20showing%20flower%20images%20being%20transformed%20into%20text%20descriptions%2C%20dark%20theme%20with%20purple%20and%20blue%20accents%2C%20digital%20art%20style%2C%20futuristic%20AI%20concept%20visualization&width=600&height=400&seq=2&orientation=landscape"
                  alt="Image to Text Generation"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Image to Text Generation
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a system for generating textual descriptions from
                  flower images using Conditional Generative Adversarial
                  Networks (CGAN).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    CGAN
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Deep Learning
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Computer Vision
                  </span>
                </div>
                <button className="!rounded-button whitespace-nowrap mt-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/10 transition-all">
                  View Details
                </button>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-purple-900/10 transition-all group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20video%20compression%20using%20unsupervised%20learning%20and%20k-means%20clustering%2C%20showing%20data%20compression%20patterns%2C%20dark%20theme%20with%20blue%20and%20purple%20accents%2C%20digital%20art%20style%2C%20futuristic%20AI%20concept%20visualization%20with%20binary%20data%20elements&width=600&height=400&seq=3&orientation=landscape"
                  alt="Video Compression"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Video Compression
                </h3>
                <p className="text-gray-400 mb-4">
                  Implemented an unsupervised learning approach using K-means
                  clustering for efficient video compression.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    K-means
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Unsupervised Learning
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Compression
                  </span>
                </div>
                <button className="!rounded-button whitespace-nowrap mt-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/10 transition-all">
                  View Details
                </button>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-purple-900/10 transition-all group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20sound%20generation%20from%20ECG%20dataset%2C%20showing%20waveform%20patterns%20transforming%20into%20audio%20waves%2C%20dark%20theme%20with%20blue%20and%20purple%20accents%2C%20digital%20art%20style%2C%20futuristic%20medical%20AI%20concept%20visualization%20with%20heart%20rhythm%20elements&width=600&height=400&seq=4&orientation=landscape"
                  alt="Sound Generation from ECG"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Sound Generation from ECG
                </h3>
                <p className="text-gray-400 mb-4">
                  Created a system that generates sound patterns from ECG
                  datasets, enabling auditory analysis of heart rhythms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Signal Processing
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Audio Synthesis
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Healthcare
                  </span>
                </div>
                <button className="!rounded-button whitespace-nowrap mt-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/10 transition-all">
                  View Details
                </button>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-purple-900/10 transition-all group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20customer%20outreach%20campaign%20using%20LLM%2C%20showing%20personalized%20messaging%20and%20customer%20engagement%20patterns%2C%20dark%20theme%20with%20blue%20and%20purple%20accents%2C%20digital%20art%20style%2C%20futuristic%20marketing%20AI%20concept%20visualization%20with%20network%20connections&width=600&height=400&seq=5&orientation=landscape"
                  alt="Customer Outreach Campaign"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Customer Outreach Campaign
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed an LLM-powered system for personalized customer
                  outreach, improving engagement and conversion rates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    LLM
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    NLP
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Marketing
                  </span>
                </div>
                <button className="!rounded-button whitespace-nowrap mt-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/10 transition-all">
                  View Details
                </button>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-purple-900/10 transition-all group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Abstract%20visualization%20of%20multi-agent%20book%20recommendation%20system%20with%20langfuse%20evaluation%2C%20showing%20AI%20agents%20collaborating%20to%20provide%20personalized%20book%20suggestions%2C%20dark%20theme%20with%20blue%20and%20purple%20accents%2C%20digital%20art%20style%2C%20futuristic%20recommendation%20AI%20concept%20visualization%20with%20book%20elements&width=600&height=400&seq=6&orientation=landscape"
                  alt="Multi-agent Book Recommendation"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Multi-agent Book Recommendation
                </h3>
                <p className="text-gray-400 mb-4">
                  Created a multi-agent system for personalized book
                  recommendations with Langfuse evaluation metrics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Multi-agent
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Langfuse
                  </span>
                  <span className="!rounded-button whitespace-nowrap px-3 py-1 bg-gray-800 text-xs text-gray-300">
                    Recommendation
                  </span>
                </div>
                <button className="!rounded-button whitespace-nowrap mt-2 px-4 py-2 bg-transparent border border-purple-500 text-purple-400 text-sm cursor-pointer hover:bg-purple-500/10 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Get In Touch
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mt-2 mx-auto"></div>
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-900/80 rounded-xl p-8 border border-gray-800 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-purple-400 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-purple-400"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">aman24012@iiitd.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-purple-400"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">IIIT Delhi, India</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-6">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/aman-kumar-950768227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-all cursor-pointer"
                  >
                    <i className="fab fa-linkedin-in text-purple-400"></i>
                  </a>
                  <a
                    href="https://github.com/KianRaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-all cursor-pointer"
                  >
                    <i className="fab fa-github text-purple-400"></i>
                  </a>
                  <a
                    href="mailto:aman24012@iiitd.ac.in"
                    className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40 transition-all cursor-pointer"
                  >
                    <i className="fas fa-envelope text-purple-400"></i>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-purple-400 mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="!rounded-button whitespace-nowrap w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium cursor-pointer hover:opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Aman Kumar
              </h2>
              <p className="text-gray-400 mt-1">AI Researcher & Developer</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#education"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Aman Kumar. All rights reserved.
            </p>
            <p className="mt-1">Last updated: July 3, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
