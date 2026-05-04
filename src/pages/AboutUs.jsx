import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            The Art Behind <br className="hidden sm:block" />
            <span className="text-gray-400">Every Stroke</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            I'm a pencil artist who believes that every sketch tells a story. 
            My journey began with a simple pencil and endless imagination.
          </p>
        </div>
      </section>

      {/* Artist Story Section - Responsive layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/500/600?random=20" 
              alt="Artist working"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">From Pencil to Masterpiece</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                For over 10 years, I've dedicated myself to the art of pencil sketching. 
                What started as a childhood hobby evolved into a passion for capturing 
                emotions, textures, and stories through graphite and charcoal.
              </p>
              <p>
                Each sketch takes between 20-50 hours to complete, with meticulous 
                attention to every shadow, highlight, and detail.
              </p>
              <p>
                Whether it's a beloved pet, a family portrait, or a custom fantasy 
                illustration, I pour my heart into every commission.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <Link to="/shop">
                <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition text-sm sm:text-base">
                  View Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Responsive grid */}
      <section className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">
            My Creative Process
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✏️</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">01. Consultation</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                We discuss your vision, reference photos, and artistic preferences
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">02. Creation</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                I sketch, refine, and bring your artwork to life with precision
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📦</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">03. Delivery</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Your masterpiece is carefully packaged and shipped worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;