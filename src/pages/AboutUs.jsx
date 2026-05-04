import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Art Behind <span className="text-gray-400">Every Stroke</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            I'm a pencil artist who believes that every sketch tells a story. 
            My journey began with a simple pencil and endless imagination.
          </p>
        </div>
      </section>

      {/* Artist Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/500/600?random=20" 
              alt="Artist working"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">From Pencil to Masterpiece</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                For over 10 years, I've dedicated myself to the art of pencil sketching. 
                What started as a childhood hobby evolved into a passion for capturing 
                emotions, textures, and stories through graphite and charcoal.
              </p>
              <p>
                Each sketch takes between 20-50 hours to complete, with meticulous 
                attention to every shadow, highlight, and detail. I use only premium 
                materials - archival paper and professional-grade pencils to ensure 
                your artwork lasts for generations.
              </p>
              <p>
                Whether it's a beloved pet, a family portrait, or a custom fantasy 
                illustration, I pour my heart into every commission. Art shouldn't 
                just be seen - it should be felt.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/shop">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  View Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">My Creative Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-2">01. Consultation</h3>
              <p className="text-gray-400 text-sm">
                We discuss your vision, reference photos, and artistic preferences
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">02. Creation</h3>
              <p className="text-gray-400 text-sm">
                I sketch, refine, and bring your artwork to life with precision
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">03. Delivery</h3>
              <p className="text-gray-400 text-sm">
                Your masterpiece is carefully packaged and shipped worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Optional but nice */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">What Collectors Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300 italic mb-4">
              "The portrait of my dog is absolutely stunning. Every detail captured perfectly. 
              It's now the centerpiece of my living room."
            </p>
            <p className="text-gray-400 text-sm">— Sarah M.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300 italic mb-4">
              "Incredible attention to detail and communication throughout the process. 
              The final piece exceeded my expectations."
            </p>
            <p className="text-gray-400 text-sm">— James K.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;