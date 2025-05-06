
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold mb-6">About Blogify</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A modern blog platform dedicated to sharing knowledge, ideas, and insights about technology, design, and web development.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-merriweather font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Blogify, we believe in the power of knowledge sharing. Our mission is to create a platform where experts and enthusiasts can share their insights, experiences, and expertise with a global audience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We focus on quality over quantity, ensuring that every article published on our platform provides value to our readers. Whether you're a seasoned professional or just starting your journey in tech, design, or development, we aim to provide content that is accessible, informative, and inspiring.
            </p>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-merriweather font-bold mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="https://i.pravatar.cc/150?img=1" 
                  alt="Alex Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                <p className="text-primary mb-3">Founder & Editor-in-Chief</p>
                <p className="text-gray-600 mb-4">
                  Tech enthusiast with a passion for emerging technologies and their impact on society.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="https://i.pravatar.cc/150?img=5" 
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
                <p className="text-primary mb-3">Lead Developer</p>
                <p className="text-gray-600 mb-4">
                  Frontend specialist with expertise in React and modern JavaScript frameworks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img 
                  src="https://i.pravatar.cc/150?img=8" 
                  alt="Michael Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-primary mb-3">Design Lead</p>
                <p className="text-gray-600 mb-4">
                  UX/UI designer with a focus on creating beautiful, functional, and accessible interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-merriweather font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions, suggestions, or want to contribute to our blog? We'd love to hear from you!
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
