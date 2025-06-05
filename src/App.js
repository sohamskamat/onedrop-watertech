import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './css/Navigation.css';
import './css/Hero.css';
import './css/About.css';
import './css/Services.css';
import './css/Technology.css';
import './css/Testimonials.css';
import './css/Contact.css';
import './css/Footer.css';
import { ChevronDown, Droplets, Shield, Zap, Users, CheckCircle, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from '@emailjs/browser';

const OneDrop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Get WhatsApp number from environment variable
    const whatsappNumber = process.env.REACT_APP_PHONE;
    
    if (!whatsappNumber) {
      console.error('WhatsApp number not configured');
      return;
    }
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
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
            {['Home', 'About', 'Products', 'Technology', 'Testimonials', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Products', 'Technology', 'Testimonials', 'Contact'].map((item) => (
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
        <div className="hero-carousel">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="hero-carousel-slide">
                <img src={`/images/img${num}.jpg`} alt={`Slide ${num}`} className="hero-carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hero-main-content">
          <div className="hero-left-content">
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
            </div>
          </div>
          <div className="hero-right-content">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="contact-input"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="contact-input"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="contact-input"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="contact-input"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="contact-textarea"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="contact-btn"
                >
                  Send Message
                </button>
              </form>
            </div>
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

      {/* Products Section */}
      <section id="products" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              Our <span className="services-title-highlight">Products</span>
            </h2>
            <p className="services-desc">
              Discover our comprehensive range of water technology products designed for optimal performance and sustainability
            </p>
          </div>
          <div className="services-grid">
            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img7.jpg" alt="Product 1" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 1</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img8.jpg" alt="Product 2" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 2</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img9.jpg" alt="Product 3" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 3</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img10.jpg" alt="Product 4" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 4</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img11.jpg" alt="Product 5" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 5</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img12.jpg" alt="Product 6" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 6</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img13.jpg" alt="Product 7" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 7</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img14.jpg" alt="Product 8" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 8</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>

            <div className="services-card">
              <div className="services-card-image">
                <img src="/images/img15.jpg" alt="Product 9" className="product-image" />
              </div>
              <h3 className="services-card-title">Product 9</h3>
              <p className="services-card-desc">
                Advanced water technology solution designed for optimal performance and sustainability
              </p>
            </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              <span className="testimonials-title-highlight">Testimonials</span>
            </h2>
            <p className="testimonials-desc">
              Discover how OneDrop WaterTech has transformed water management for our valued clients
            </p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                quote: "OneDrop's water technology solutions have revolutionized our water management system. Their innovative approach has helped us reduce water waste by 40%.",
                author: "Sarah Johnson",
                position: "Operations Director, EcoTech Industries",
                image: "/images/img16.jpg"
              },
              {
                quote: "The smart water monitoring system from OneDrop has been a game-changer for our facility. Real-time data and automated controls have significantly improved our efficiency.",
                author: "Michael Chen",
                position: "Facility Manager, Green Solutions Ltd",
                image: "/images/img17.jpg"
              },
              {
                quote: "Working with OneDrop has been an exceptional experience. Their team's expertise and commitment to sustainability have made a real difference in our water conservation efforts.",
                author: "Emily Rodriguez",
                position: "Sustainability Officer, Urban Development Corp",
                image: "/images/img18.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
                    </svg>
                    <p>{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-author-image">
                      <img src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="testimonial-author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="contact-info-section">
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