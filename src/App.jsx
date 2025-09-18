import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiUpwork, SiFreelancer } from "react-icons/si";

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-slate-200/90 hover:text-white transition-colors text-sm"
    >
      {label}
    </a>
  );
}

function PrimaryButton({ href = "#", children }) {
  return (
    <a
      href={href}
      className="px-5 py-2 rounded-full bg-sky-500/90 hover:bg-sky-500 text-white font-medium shadow/20 shadow-sky-500/40"
    >
      {children}
    </a>
  );
}

function OutlineButton({ href = "#", children }) {
  return (
    <a
      href={href}
      className="px-5 py-2 rounded-full border border-slate-500/40 text-slate-100 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow ? (
        <p className="text-sky-400 font-semibold tracking-wide uppercase text-xs mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-slate-300 text-sm md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = useMemo(
    () => [
      {
        title: "Brand Logo Designs",
        desc: "Unique, timeless logos that capture your brand identity and leave a lasting impression.",
        images: [
          "/Logo%20final.png",
          "/displayPics.png",
          "/SkyvarDesigns2.png",
        ],
      },
      {
        title: "Social Media Flyer Designs",
        desc: "Engaging, scroll‑stopping flyers tailored for social media to connect instantly.",
        images: ["/Calmoasis%201.jpg", "/Coffee.jpg"],
      },
      {
        title: "Brand Publicity Designs",
        desc: "Creative designs crafted to boost visibility and communicate your message with impact.",
        images: ["/Back%202.jpg", "/Back1.jpg"],
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <a href="#home" className="inline-flex items-center">
              <img
                src="/SkyvarDesigns2.png"
                alt="Skyvar Design"
                className="h-30 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
              />
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#about" label="About" />
              <NavLink href="#services" label="Service" />
              <NavLink href="#reviews" label="Reviews" />
              <NavLink href="#contact" label="Contact" />
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } py-4 border-t border-white/5`}
          >
            <nav className="flex flex-col gap-4">
              <NavLink href="#about" label="About" />
              <NavLink href="#services" label="Service" />
              <NavLink href="#reviews" label="Reviews" />
              <NavLink href="#contact" label="Contact" />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Back1.jpg)" }}
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 pt-14 md:pt-20 pb-16 md:pb-20">
            <div className="md:flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                SKYVAR
                <br />
                DESIGNS
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-3">
                Bring Your Imagination To Reality
              </p>
            </div>
            <div className="md:flex-1 flex justify-center">
              <div className="relative w-full">
                <img
                  src="/ProfilePic1.jpg"
                  alt="Brand Owner"
                  className="relative rounded-[28px] w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover ring-2 ring-white/20"
                />
              </div>
            </div>
            <div className="md:flex-1 text-white text-center md:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                Brand Owner
              </p>
              <p className="text-xl sm:text-2xl md:text-4xl font-extrabold mt-2 bg-gradient-to-tr from-white to-sky-200 bg-clip-text text-transparent">
                Oreoluwa David
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-slate-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Unleash your brand’s potential today
          </h3>
          <div className="mt-5 flex items-center justify-center gap-3">
            <PrimaryButton href="#services">Services</PrimaryButton>
            <OutlineButton href="#contact">Contact</OutlineButton>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url(/Back%202.jpg)" }}
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-6 md:p-10 rounded-3xl">
              <h3 className="text-white text-2xl font-extrabold mb-4">
                Get to know the brand SKYVAR
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                At SKYVAR Designs, we harness the power of innovative design to
                elevate your brand’s presence in the digital landscape. Our
                dedicated team of creative professionals works closely with you
                to transform your ideas into stunning visuals that resonate.
                From branding strategies to eye‑catching graphic designs, we
                focus on delivering exceptional quality and impactful solutions
                that truly reflect your vision.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mt-4">
                Whether you’re looking to establish a strong brand identity,
                enhance your online visibility, or create captivating marketing
                materials, we are here to help turn your aspirations into
                reality. Experience the art of effective communication through
                design with SKYVAR Designs.
              </p>
            </div>
            <div className="flex justify-center h-full md:justify-end">
              <img
                src="/MYPIC.jpg"
                alt="About visual"
                className="w-[360px] h-[400px] md:w-[500px] md:h-full rounded-2xl object-cover ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-850/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <SectionHeading title="What we can do for you" />
          <div className="mt-10 space-y-10 px-4 sm:px-0">
            {services.map((s) => (
              <section key={s.title} className="">
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-800/60 ring-1 ring-white/10">
                  <h3 className="font-bold text-white text-lg sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
                  {s.images.map((src, i) => (
                    <figure
                      key={src + i}
                      className="relative overflow-hidden md:h-[312px] md:w-[330px] h-[208px] w-[220px] rounded-xl ring-1 ring-white/10 bg-slate-800/40"
                    >
                      <img
                        src={src}
                        alt={`${s.title} ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/Back%202.jpg)" }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <div className="text-sky-300 text-6xl leading-none select-none mb-4">
                  ““
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight">
                  Hear from our
                  <br /> satisfied clients
                </h3>
                <p className="text-slate-200/80 text-sm md:text-base mt-6 max-w-md">
                  We prioritize our clients' feedback and strive for their
                  utmost satisfaction. Take a moment to read what they have to
                  say!
                </p>
              </div>
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-slate-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white">
            Stay connected with us
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Join our community and be the first to know about new design updates
            and exclusive promotions.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
            <SocialIcon
              label="WhatsApp"
              href="https://wa.me/message/25C6CSVKIBCAJ1"
              icon={FaWhatsapp}
            />
            <SocialIcon label="X (Twitter)" href="#" icon={FaXTwitter} />
            <SocialIcon label="Instagram" href="#" icon={FaInstagram} />
            <SocialIcon
              label="Email"
              href="mailto:adeyemioroluwa37@gmail.com"
              icon={MdEmail}
            />
            <SocialIcon
              label="LinkedIn"
              href="https://www.linkedin.com/in/oreoluwa-david-840044236/"
              icon={FaLinkedin}
            />
            <SocialIcon
              label="Phone"
              href="tel:+2348051254293"
              icon={FaPhone}
            />
            <SocialIcon
              label="Upwork"
              href="https://www.upwork.com/freelancers/~01e0cabc9f1f887914/"
              icon={SiUpwork}
            />
            <SocialIcon
              label="Freelancer"
              href="https://www.freelancer.com/u/SKYVAR"
              icon={SiFreelancer}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* <section
        id="contact"
        className="relative bg-cover bg-bottom"
        style={{ backgroundImage: "url(/Back%202.jpg)" }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <SectionHeading title="Contact" />
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-800/60 ring-1 ring-white/10">
              <p className="text-slate-400 text-sm">Call</p>
              <p className="text-white text-base sm:text-lg font-semibold mt-2">
                +234-805-1254-293
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-800/60 ring-1 ring-white/10">
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white text-base sm:text-lg font-semibold mt-2 break-all">
                adeyemioroluwa37@gmail.com
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-800/60 ring-1 ring-white/10 sm:col-span-2 md:col-span-1">
              <p className="text-slate-400 text-sm">Working hours</p>
              <p className="text-white text-base sm:text-lg font-semibold mt-2">
                Mon–Fri, 9 am – 6 pm
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 text-center">
          <nav className="flex items-center justify-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#reviews" className="hover:text-white">
              Benefits
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <p className="text-slate-400 text-sm mt-4">©Skyvar Design</p>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ href, label, icon: Icon }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="size-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
    >
      <Icon className="size-5" aria-hidden />
    </a>
  );
}

function Carousel() {
  const slides = [
    {
      name: "Ajibola O. Ojo",
      avatar:
        "https://images.unsplash.com/photo-1678282956162-f4d7e699f135?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "I love how professional and creative the designs are. My brand looks more polished and engaging, definitely coming back for more projects.",
    },
    {
      name: "Benjamin David",
      avatar:
        "https://images.unsplash.com/photo-1546458904-143d1674858d?q=80&w=531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Working with SKYVAR was seamless. The attention to detail elevated our brand visuals beyond expectations.",
    },
    {
      name: "James",
      avatar: "/drReview.jpeg",
      text: "SKYVAR Designs transformed our ideas into something truly imaginative. The communication was smooth and delivery on time.",
    },
    {
      name: "Ajiboye S. Adebayo",
      avatar: "/displayPics.png",
      text: "The brand package was spot‑on and delivered quickly. Highly recommend.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative p-6 md:p-10">
      <div className="relative h-[320px] md:h-[360px] flex items-center justify-center">
        {slides.map((s, i) => {
          const isActive = i === index;
          const isPrev = i === (index + slides.length - 1) % slides.length;
          const isNext = i === (index + 1) % slides.length;
          return (
            <div
              key={s.name + i}
              className={
                "absolute transition-all duration-500 ease-out will-change-transform" +
                (isActive
                  ? " opacity-100 translate-x-0 scale-100 z-20"
                  : isPrev
                  ? " opacity-50 -translate-x-32 scale-95 z-10 blur-[1px]"
                  : isNext
                  ? " opacity-50 translate-x-32 scale-95 z-10 blur-[1px]"
                  : " opacity-0 pointer-events-none")
              }
            >
              <div className="w-[320px] [@media(max-width:420px)]:w-[280px] md:w-[420px] min-h-[200px] max-md:min-h-[250px] bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={s.avatar}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <p className="font-semibold text-slate-900">{s.name}</p>
                </div>
                <div className="mt-3 text-amber-400">★★★★★</div>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "size-2.5 rounded-full transition " +
              (i === index ? "bg-slate-100" : "bg-slate-300/50")
            }
          />
        ))}
      </div>
      <p className="text-center text-slate-200/80 text-sm mt-2">
        Slide {index + 1} of {slides.length}
      </p>
    </div>
  );
}
