import React, { useState, useEffect } from 'react';
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

const EMAIL = 'contact@onedropdummy.com';
const PHONE = '+1 - 954478758754';
const ADDRESS = '123 Innovation Drive, Tech City, TC 12345';

const car_images = [
  '/carousel_images/img1.jpg',
  '/carousel_images/img2.jpg',
  '/carousel_images/img3.jpg',
  '/carousel_images/img4.jpg',
  '/carousel_images/img5.jpg',
  '/carousel_images/img6.jpg',
];

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

  const logoParts = [
    { text: 'O', color: '#2170b8' },
    { text: 'NE', color: '#19934c' },
    { text: 'DROP', color: '#0a2e5d' }
  ];

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
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappNumber = PHONE.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
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
      <nav className={`navigation ${scrollY > 50 ? 'scrolled' : 'transparent'}`}>
        <div className="nav-container">
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo-short.png" alt="OneDrop Short Logo" className="nav-logo-short" style={{ width: '2rem', height: '2rem', borderRadius: '9999px', background: 'none', marginRight: '0.25rem' }} />
            <span style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#0a2e5d', letterSpacing: 0 }}>
              <span style={{ whiteSpace: 'nowrap', display: 'inline', fontWeight: 'bold' }}>
                {logoParts.map((part, idx) => (
                  <b key={idx} style={{ fontWeight: 'bold', color: part.color, fontSize: '1.25rem', display: 'inline', letterSpacing: 0 }}>{part.text}</b>
                ))}
              </span>
              <span style={{ width: '0.5ch', display: 'inline-block' }}></span>
              <span style={{ fontWeight: 'bold', color: '#0a2e5d', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.02em', display: 'inline', verticalAlign: 'baseline' }}>WATERTECH</span>
            </span>
          </div>
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile-btn"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
            arrows={false}
            className="hero-slider"
          >
            {car_images.map((src, num) => (
              <div key={num} className="hero-carousel-slide">
                <img 
                  src={src} 
                  alt={`Slide ${num+1}`} 
                  className="hero-carousel-image" 
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hero-main-content">
          <div className="hero-left-content" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div className="hero-bounce" style={{ margin: 0 }}>
              <div className="hero-logo" style={{
                background: 'rgba(255,255,255,0.55)',
                boxShadow: '0 8px 40px 0 rgba(37,99,235,0.10), 0 0 40px 10px rgba(255,255,255,0.25)',
                width: 'min(80vw, 540px)',
                height: 'min(60vh, 540px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
                borderRadius: '2rem',
                padding: '2.5rem',
                transition: 'background 0.3s',
              }}>
                <img src="/images/logo-transparent.png" alt="OneDrop WaterTech Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0', background: 'none', display: 'block' }} />
              </div>
            </div>
          </div>
          <div className="hero-right-content desktop-contact-form">
            <div className="contact-form-card" style={{ minHeight: 'auto', height: '490px', maxHeight: '510px', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
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
                  <div className="testimonial-author">
                    <div className="testimonial-author-image">
                      <img src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="testimonial-quote">
                    <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
                    </svg>
                    <p>{testimonial.quote}</p>
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
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: <a href={`mailto:${EMAIL}`} style={{ color: '#2170b8', textDecoration: 'underline' }}>{EMAIL}</a> },
                { icon: <Phone className="w-6 h-6" />, label: "Phone", value: PHONE },
                { icon: <MapPin className="w-6 h-6" />, label: "Address", value: ADDRESS }
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
              <img src="/images/logo-short.png" alt="OneDrop Logo Icon" className="footer-logo-circle" style={{ width: '2rem', height: '2rem', borderRadius: '9999px', background: 'none', marginRight: '0.5rem' }} />
              <span style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#0a2e5d', letterSpacing: 0 }}>
                <span style={{ whiteSpace: 'nowrap', display: 'inline', fontWeight: 'bold' }}>
                  {logoParts.map((part, idx) => (
                    <b key={idx} style={{ fontWeight: 'bold', color: part.color, fontSize: '1.25rem', display: 'inline', letterSpacing: 0 }}>{part.text}</b>
                  ))}
                </span>
                <span style={{ width: '0.5ch', display: 'inline-block' }}></span>
                <span style={{ fontWeight: 'bold', color: '#0a2e5d', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.02em', display: 'inline', verticalAlign: 'baseline' }}>WATERTECH</span>
              </span>
            </div>
            <p className="footer-desc">
              Making every drop count for a sustainable future
            </p>
            <div className="footer-divider">
              <p className="footer-copyright">
                © 2025 <span style={{ color: '#2170b8', fontWeight: 'bold' }}>O</span><span style={{ color: '#19934c', fontWeight: 'bold' }}>NE</span><span style={{ color: '#0a2e5d', fontWeight: 'bold' }}>DROP</span> <span style={{ color: '#0a2e5d', fontWeight: 'bold', letterSpacing: '0.1em' }}>WATERTECH</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneDrop;