import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: heroRef, inView: heroVisible } = useInView({ triggerOnce: true });
  const { ref: philosophyRef, inView: philosophyVisible } = useInView({ triggerOnce: true });
  const { ref: lookbookRef, inView: lookbookVisible } = useInView({ triggerOnce: true });
  const { ref: shopRef, inView: shopVisible } = useInView({ triggerOnce: true });
  const { ref: emailRef, inView: emailVisible } = useInView({ triggerOnce: true });

  return (
    <div className="bg-black text-white scroll-smooth font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-gold flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-3xl font-bold tracking-widest uppercase" style={{ color: '#d4af37', fontFamily: 'serif' }}>Zakhmir</h1>
        <nav className="space-x-6 text-sm">
          <a href="#philosophy">Philosophy</a>
          <a href="#shop">Shop</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`h-screen flex flex-col justify-center items-center text-center px-6 transition-opacity duration-1000 ease-in ${heroVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '0 0 4px white, 0 0 8px white' }}>Minimalism meets strength. Tailored for the soul.</h2>
        <p className="text-lg text-gray-400"><span style={{ color: '#d4af37' }}>Designed in silence. Built with purpose.</span></p>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        ref={philosophyRef}
        className={`px-6 py-20 max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in ${philosophyVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="text-2xl mb-4" style={{ color: '#d4af37', fontFamily: 'serif', fontWeight: 'bold' }}>Philosophy</h3>
        <p className="text-lg text-gray-300 italic">
          <span style={{ color: 'white' }}>Zakhmir is who I am — forged in hardship, shaped by silence, sharpened through discipline. Every stitch and piece carries my weight, my will, and the quiet fire that refuses to die.</span>
        </p>
      </section>

      {/* Email Capture */}
      <section
        ref={emailRef}
        className={`px-6 py-20 text-center transition-opacity duration-1000 ease-in ${emailVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="text-2xl mb-4" style={{ color: '#d4af37', fontFamily: 'serif', fontWeight: 'bold' }}>Stay Informed</h3>
        <p className="text-gray-300 mb-6"><span style={{ color: 'white' }}>Be the first to hear about Zakhmir drops and exclusive updates.</span></p>
        <form action="https://formspree.io/f/yourFormID" method="POST" className="flex flex-col md:flex-row justify-center gap-4">
          <input type="email" name="email" placeholder="Your email" required className="px-4 py-2 rounded w-full md:w-80 text-black" />
          <button type="submit" className="bg-gold text-black px-6 py-2 rounded hover:opacity-80">Subscribe</button>
        </form>
      </section>

      {/* Shop Section */}
      <section
        id="shop"
        ref={shopRef}
        className={`px-6 py-20 transition-opacity duration-1000 ease-in ${shopVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="text-2xl mb-6 text-center" style={{ color: '#d4af37', fontFamily: 'serif', fontWeight: 'bold' }}>Pre-Order</h3>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          <span style={{ color: 'white' }}>These pieces do not yet exist — but they will. I’m building Zakhmir from the ground up. Every pre-order funds the first production. Reserve yours now and become a part of the story.</span>
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            name: "Black Wool Compression Top",
            price: "$130",
            image: "/Zakhmir%20black%20wool%20compression.png"
          }, {
            name: "Black Suede Jacket",
            price: "$290",
            image: "/Black%20Suede%20jacket.png"
          }, {
            name: "Silver Zakhmir Necklace",
            price: "$85",
            image: "/Silver%20Zakhmir%20necklack%20.png"
          }].map((item, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg text-center">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h4 className="text-lg mb-1 text-white">{item.name}</h4>
              <p className="mb-2 text-gold">{item.price}</p>
              <form action="https://formspree.io/f/yourFormID" method="POST" className="flex flex-col items-center gap-2 mt-4 bg-gold p-4 rounded-lg">
                <input type="text" name="name" placeholder="Your name" required className="px-4 py-2 rounded text-black w-full" />
                <input type="email" name="email" placeholder="Email address" required className="px-4 py-2 rounded text-black w-full" />
                <button type="submit" className="px-6 py-2 rounded-full hover:opacity-80 text-white" style={{ backgroundColor: '#d4af37' }}>Pre-Order</button>
              </form>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10 italic">
          Your support brings these pieces to life. You’ll receive updates as each item moves into production.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Zakhmir. All rights reserved.
      </footer>
    </div>
  );
}

const gold = {
  color: "#d4af37"
};
