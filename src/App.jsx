import { useState } from "react";

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ajibola O. Ojo",
      rating: 5,
      review:
        "The professionalism and creativity in their designs exceeded my expectations. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Jamin David",
      rating: 5,
      review:
        "SKYVAR transformed our brand identity with stunning designs that perfectly capture our vision.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "James",
      rating: 5,
      review:
        "Outstanding service and attention to detail. Our social media presence has never been stronger.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            SKYVAR
            <div className="text-sm text-blue-300 font-normal">
              Bring Your Imagination To Reality
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              SKYVAR DESIGNS
            </h1>
            <p className="text-xl lg:text-2xl text-blue-300 mb-8">
              Bring Your Imagination To Reality
            </p>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Oreoluwa David"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
              <p className="text-sm font-semibold">Brand Owner</p>
              <p className="text-lg font-bold">Oreoluwa David</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-4">
            Unleash your brand's potential today
          </h2>
          <p className="text-white/80 mb-8">Your Text</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get to know the brand SKYVAR
            </h2>
            <p className="text-lg leading-relaxed">
              At SKYVAR Designs, we are passionate about elevating brands
              through innovative design solutions. Our team of creative
              professionals is dedicated to delivering exceptional quality and
              impactful designs that make a lasting impression. We specialize in
              establishing strong brand identities, enhancing online visibility,
              and creating captivating marketing materials that drive results.
            </p>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="SKYVAR Team Member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white text-center font-bold mb-16">
            Our Design Services include
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Logo Designs */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-lg">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-green-800 text-white p-4 rounded flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-2">☕</div>
                      <div className="text-sm font-semibold">
                        The Coffee House
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-4 rounded flex items-center justify-center">
                    <div className="text-center text-gray-800">
                      <div className="text-2xl mb-2">☕</div>
                      <div className="text-sm font-semibold">
                        The Coffee House
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl text-white font-bold mb-3">
                Brand Logo Designs
              </h3>
              <p className="text-white/80">
                Unique, timeless logos that perfectly represent your brand
                identity and values.
              </p>
            </div>

            {/* Social Media Flyer Designs */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-blue-600 rounded-lg p-6 mb-6 shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">☀️</div>
                  <div className="font-bold text-lg mb-1">
                    Calmoasis Solar Services
                  </div>
                  <div className="text-sm">Professional Solar Solutions</div>
                  <div className="mt-2 text-xs">
                    Contact us for a free quote
                  </div>
                </div>
              </div>
              <h3 className="text-xl text-white font-bold mb-3">
                Social Media Flyer Designs
              </h3>
              <p className="text-white/80">
                Engaging, scroll-stopping flyers that capture attention and
                drive engagement.
              </p>
            </div>

            {/* Brand Publicity Designs */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 mb-6 shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-bold text-lg mb-1">Need A Design?</div>
                  <div className="text-sm">SKYVAR Designs</div>
                  <div className="mt-2 text-xs">Scan QR for more info</div>
                </div>
              </div>
              <h3 className="text-xl text-white font-bold mb-3">
                Brand Publicity Designs
              </h3>
              <p className="text-white/80">
                Creative designs that boost visibility and create lasting impact
                for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Hear from our satisfied clients
            </h2>
            <p className="text-lg leading-relaxed">
              We prioritize client feedback and satisfaction. Our success is
              measured by the success of our clients' brands.
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`min-w-full transition-transform duration-500 ${
                    index === currentTestimonial
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial
                        ? "bg-blue-600"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-white text-center mt-4">
              Slide {currentTestimonial + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white font-bold mb-4">
            Stay connected with us
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community to receive the latest design updates, creative
            tips, and exclusive promotions.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-4xl hover:text-green-400 transition-colors"
            >
              📱
            </a>
            <a
              href="#"
              className="text-4xl hover:text-blue-400 transition-colors"
            >
              🐦
            </a>
            <a
              href="#"
              className="text-4xl hover:text-pink-400 transition-colors"
            >
              📷
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-12">Contact</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-white font-bold mb-2">Call</h3>
              <p className="text-white/80">+234-805-1254-293</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-white/80">adeyemioreoluwa37@gmail.com</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-3xl mb-4">🕒</div>
              <h3 className="text-white font-bold mb-2">Working hours</h3>
              <p className="text-white/80">Mon-Fri, 9 am - 6 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">@Skyvar Design</div>
          <nav className="flex space-x-6">
            <a
              href="#about"
              className="text-white/60 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/60 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Benifits
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
