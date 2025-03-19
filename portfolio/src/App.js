import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css';

// 3D Model Component
function Model() {
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/robot-arm/model.gltf');
  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
}

// Hero Section Component
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Aryan Kesar</h1>
        <h2>Full Stack Developer</h2>
        <p>Creating innovative web solutions</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-3d">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </section>
  );
}

// About Section Component
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a passionate Full Stack Developer with expertise in building modern web applications. My journey in technology is driven by a constant desire to learn and create innovative solutions.</p>
            <p>With a strong foundation in both front-end and back-end development, I specialize in creating responsive, user-friendly applications that solve real-world problems.</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span className="detail-value">2+ Years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Projects</span>
                <span className="detail-value">20+ Completed</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">India</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/400" alt="Aryan Kesar" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">AK</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Hero />
      <About />
      {/* Add other sections here */}
    </div>
  );
}

export default App; 