import React, { useState, useEffect } from 'react';
import './index.css';
import './css/Navigation.css';
import './css/Hero.css';
import './css/About.css';
import './css/Services.css';
import './css/Technology.css';
import './css/Contact.css';
import './css/Footer.css';
import { ChevronDown, Droplets, Shield, Zap, Users, CheckCircle, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const OneDrop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className={`navigation ${scrollY > 50 ? 'scrolled' : 'transparent'}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="nav-logo-circle">
              <Droplets className="w-5 h-5" style={{ color: '#fff' }} />
            </div>
            <span className="nav-title">OneDrop</span>
            <span className="nav-subtitle">WATERTECH</span>
          </div>
          {/* Desktop Menu */}
          <div className="nav-menu">
            {['Home', 'About', 'Services', 'Technology', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-menu-btn"
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile-btn"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-menu-list">
              {['Home', 'About', 'Services', 'Technology', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-mobile-menu-btn"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-absolute"></div>
        <div className="hero-content">
          <div className="hero-bounce">
            <div className="hero-logo">
              <Droplets className="w-12 h-12" style={{ color: '#fff' }} />
            </div>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-gradient">OneDrop</span>
            <br />
            <span style={{ fontSize: '2rem', color: '#64748b' }}>WaterTech</span>
          </h1>
          <p className="hero-subtitle">
            Revolutionizing water technology with innovative solutions for a sustainable future. Every drop matters, every solution counts.
          </p>
          <div className="hero-btn-row">
            <button
              onClick={() => scrollToSection('services')}
              className="hero-btn-primary"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hero-btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-chevron">
          <ChevronDown className="w-8 h-8" style={{ color: '#94a3b8' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">
              About <span className="about-title-highlight">OneDrop</span>
            </h2>
            <p className="about-desc">
              Leading the future of water technology with cutting-edge solutions that make every drop count
            </p>
          </div>
          <div className="about-grid">
            <div>
              <h3 className="about-mission-title">Our Mission</h3>
              <p className="about-mission-desc">
                At OneDrop WaterTech, we believe that access to clean, safe water is a fundamental right. Our innovative technologies and sustainable solutions are designed to address the world's most pressing water challenges.
              </p>
              <p className="about-mission-desc">
                From advanced filtration systems to smart water management platforms, we're committed to creating a world where every drop of water is valued, protected, and efficiently utilized.
              </p>
            </div>
            <div className="about-stats-grid">
              <div className="about-card">
                <div className="about-card-icon" style={{ background: '#3b82f6' }}>
                  <Users className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h4 className="about-card-title">10M+</h4>
                <p className="about-card-desc">Lives Impacted</p>
              </div>
              <div className="about-card" style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #b2f5ea 100%)' }}>
                <div className="about-card-icon" style={{ background: '#14b8a6' }}>
                  <Droplets className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h4 className="about-card-title">50B+</h4>
                <p className="about-card-desc">Gallons Purified</p>
              </div>
              <div className="about-card" style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #bbf7d0 100%)' }}>
                <div className="about-card-icon" style={{ background: '#22c55e' }}>
                  <Shield className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h4 className="about-card-title">99.9%</h4>
                <p className="about-card-desc">Purification Rate</p>
              </div>
              <div className="about-card" style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #f0fdfa 100%)' }}>
                <div className="about-card-icon" style={{ background: '#a21caf' }}>
                  <Zap className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h4 className="about-card-title">15+</h4>
                <p className="about-card-desc">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              Our <span className="services-title-highlight">Services</span>
            </h2>
            <p className="services-desc">
              Comprehensive water technology solutions for residential, commercial, and industrial applications
            </p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Water Purification",
                description: "Advanced filtration systems that remove contaminants while preserving essential minerals",
                features: ["Multi-stage filtration", "Real-time monitoring", "Smart maintenance alerts"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Testing",
                description: "Comprehensive water quality analysis using state-of-the-art testing equipment",
                features: ["Laboratory analysis", "On-site testing", "Compliance reporting"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Management",
                description: "IoT-enabled water management systems for optimal efficiency and conservation",
                features: ["Usage analytics", "Leak detection", "Automated controls"]
              }
            ].map((service, index) => (
              <div key={index} className="services-card">
                <div className="services-card-icon">{service.icon}</div>
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-desc">{service.description}</p>
                <ul className="services-card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="services-card-feature">
                      <CheckCircle className="services-card-feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="technology-section">
        <div className="technology-container">
          <div className="technology-header">
            <h2 className="technology-title">
              Cutting-Edge <span className="technology-title-highlight">Technology</span>
            </h2>
            <p className="technology-desc">
              Innovation at the core of everything we do, powered by the latest advancements in water technology
            </p>
          </div>
          <div className="technology-grid">
            <div>
              <h3 className="about-mission-title">Revolutionary Water Solutions</h3>
              <div className="technology-list">
                {[
                  "Advanced membrane technology for superior filtration",
                  "AI-powered water quality prediction and optimization",
                  "Blockchain-based water resource tracking",
                  "Sustainable energy integration for eco-friendly operations"
                ].map((item, index) => (
                  <div key={index} className="technology-list-item">
                    <div className="technology-list-icon">
                      <CheckCircle className="w-4 h-4" style={{ color: '#fff' }} />
                    </div>
                    <p className="technology-list-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="technology-card">
              <div className="technology-card-logo">
                <Droplets className="w-16 h-16" style={{ color: '#fff' }} />
              </div>
              <h4 className="technology-card-title">Smart Water Ecosystem</h4>
              <p className="technology-card-desc">
                Our integrated platform combines hardware, software, and analytics to create intelligent water management solutions that adapt to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              Get In <span className="contact-title-highlight">Touch</span>
            </h2>
            <p className="contact-desc">
              Ready to transform your water systems? Let's discuss how OneDrop can help you achieve your goals
            </p>
          </div>
          <div className="contact-grid">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-info-list">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: "Email", value: "info@onedropwatertech.com" },
                  { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Address", value: "123 Innovation Drive, Tech City, TC 12345" }
                ].map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <p className="contact-info-label">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send us a Message</h3>
              <div className="contact-form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="contact-input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="contact-input"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="contact-input"
              />
              <input
                type="text"
                placeholder="Subject"
                className="contact-input"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="contact-textarea"
              ></textarea>
              <button
                onClick={() => alert('Thank you for your message! We\'ll get back to you soon.')}
                className="contact-btn"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-center">
            <div className="footer-logo-row">
              <div className="footer-logo-circle">
                <Droplets className="w-5 h-5" style={{ color: '#fff' }} />
              </div>
              <span className="footer-title">OneDrop</span>
              <span className="footer-subtitle">WATERTECH</span>
            </div>
            <p className="footer-desc">
              Making every drop count for a sustainable future
            </p>
            <div className="footer-divider">
              <p className="footer-copyright">
                © 2025 OneDrop WaterTech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneDrop;