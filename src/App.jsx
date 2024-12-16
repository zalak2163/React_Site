import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS for styling
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    // Fetch Projects and Skills as before...
    fetch("https://http5222-node-js-assignment1.onrender.com/admin/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoadingProjects(false);
      });

    fetch("https://http5222-node-js-assignment1.onrender.com/admin/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
        setLoadingSkills(false);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setLoadingSkills(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message. I will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects, skills, and get in touch with me!</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-photo-container">
              <img src="src/images/img.jpg" alt="Your Name" className="about-photo" />
            </div>
            <div className="text">
              <h3>About Me</h3>
              <p>"Hello, My Name is Zalak Patel. I am currently studying web development at Humber College, gaining practical skills in front-end and back-end technologies. Passionate about creating responsive and user-friendly websites, I am eager to contribute to innovative projects and further my expertise in the field."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          {loadingProjects ? (
            <p>Loading projects...</p>
          ) : projects.length > 0 ? (
            <div className="card-container">
              {projects.map((project, index) => (
                <div key={index} className="card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p><strong>Category:</strong> {project.category}</p>
                  <p><strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              ))}
            </div>
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          {loadingSkills ? (
            <p>Loading skills...</p>
          ) : skills.length > 0 ? (
            <div className="card-container">
              {skills.map((skill, index) => (
                <div key={index} className="card">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No skills found.</p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
  <div className="container">
    <p>Contact me at: <a href="mailto:znptael2003@gmail.com">znptael2003@gmail.com</a></p>
    <div className="social-links">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} /> {/* LinkedIn icon */}
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} /> {/* GitHub icon */}
      </a>
    </div>
  </div>
</footer>

          
    </div>
  );
}

export default App;
