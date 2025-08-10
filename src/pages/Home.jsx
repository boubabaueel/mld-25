import React from 'react';
    import { motion } from 'framer-motion';
    import { Helmet } from 'react-helmet';
    import { Link } from 'react-router-dom';
    import { Button } from '../components/ui/button';
    import { ArrowRight, Car, Clock, ShieldCheck } from 'lucide-react';

    const FeatureCard = ({ icon, title, description }) => (
      <motion.div
        className="bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center mb-4 text-amber-400">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </motion.div>
    );

    const FleetHighlightCard = ({ name, children }) => (
      <motion.div 
        className="relative overflow-hidden rounded-lg group"
        whileHover="hover"
      >
        {children}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
          <motion.h3 
            className="text-2xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            variants={{ hover: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
        </div>
      </motion.div>
    );


    const Home = () => {
      return (
        <div className="bg-transparent text-white">
          <Helmet>
            <title>MLDLUXURY - Premier Luxury Transportation in NYC</title>
            <meta name="description" content="MLDLUXURY offers unmatched luxury car and chauffeur services in New York City. Book your premium ride today for an experience of a lifetime." />
          </Helmet>

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center px-4">
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
            <img  alt="New York City skyline at dusk with illuminated skyscrapers" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1504701954957-f58a602749f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                Experience Unrivaled Luxury <br /> on the Streets of New York
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-neutral-200">
                Your journey to sophistication begins here. Professional chauffeurs, immaculate fleet.
              </p>
              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-amber-400 text-black hover:bg-amber-500 rounded-full px-10 py-7 text-xl font-bold transition-all duration-300 shadow-lg shadow-amber-400/20">
                  <Link to="/booking">
                    Book Your Ride <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose <span className="text-amber-400">MLDLUXURY</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Car size={48} />}
                  title="Pristine Fleet"
                  description="Our vehicles are meticulously maintained and detailed for your comfort and safety."
                />
                <FeatureCard
                  icon={<ShieldCheck size={48} />}
                  title="Professional Chauffeurs"
                  description="Courteous, discreet, and highly-trained drivers dedicated to your service."
                />
                <FeatureCard
                  icon={<Clock size={48} />}
                  title="Punctuality Guaranteed"
                  description="We value your time. Expect prompt and reliable service, every time."
                />
              </div>
            </div>
          </section>

          {/* Fleet Highlights */}
          <section className="py-20 bg-transparent">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Premier Fleet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <FleetHighlightCard name="Mercedes-Benz S 580">
                    <img  alt="Sleek black Mercedes-Benz S 580" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/76e426fadfc2e97c7de32a36a49a2352.jpg" />
                  </FleetHighlightCard>
                  <FleetHighlightCard name="Cadillac Escalade">
                    <img  alt="Black Cadillac Escalade" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/829eb6474d2ae45af8f9b84d81cac549.png" />
                  </FleetHighlightCard>
                  <FleetHighlightCard name="Mercedes-Benz Sprinter">
                    <img  alt="A spacious and luxurious Mercedes-Benz Sprinter Van" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/d11f20e8280f1013887baf3ddb8c6c69.png" />
                  </FleetHighlightCard>
                  <FleetHighlightCard name="Rolls Royce Cullinan">
                     <img  alt="Luxurious Rolls Royce Cullinan SUV" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/5663ea4a54185aacf1e9f96e1b67db9b.jpg" />
                  </FleetHighlightCard>
                </div>
                <div className="text-center mt-12">
                   <Button asChild variant="outline" size="lg" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors rounded-full px-8 py-4 text-lg">
                      <Link to="/fleet">View All Vehicles</Link>
                   </Button>
                </div>
             </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-amber-500 to-amber-400 text-black py-20">
             <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready for the Ultimate Travel Experience?</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                   Don't settle for anything less than the best. Reserve your luxury vehicle today and elevate your New York City journey.
                </p>
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   <Button asChild size="lg" className="bg-black text-white hover:bg-neutral-800 rounded-full px-10 py-7 text-xl font-bold transition-all duration-300">
                      <Link to="/contact">Contact Us Now</Link>
                   </Button>
                </motion.div>
             </div>
          </section>

        </div>
      );
    };

    export default Home;