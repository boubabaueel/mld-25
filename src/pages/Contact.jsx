import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  return (
    <div className="bg-black text-white py-20">
      <Helmet>
        <title>Contact Us | MLDLUXURY</title>
        <meta name="description" content="Get in touch with MLDLUXURY for inquiries, bookings, or special requests. Contact us via phone, email, or our contact form." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Get In Touch</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
            We're here to assist you 24/7. Whether you have a question or want to make a booking, don't hesitate to reach out.
          </p>
        </motion.div>
        
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mb-12 p-6 bg-green-900/20 border border-green-500/30 rounded-lg text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
            <p className="text-neutral-300">
              Thank you for contacting MLDLUXURY. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Send Us a Message</h2>
            <form action="https://formsubmit.co/contact@mldluxury.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Form Submission - MLDLUXURY" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}#/contact?success=true`} />
              <input type="hidden" name="_template" value="table" />
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required className="mt-2 bg-neutral-800 border-neutral-700 text-white"/>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-2 bg-neutral-800 border-neutral-700 text-white"/>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required className="mt-2 bg-neutral-800 border-neutral-700 text-white"/>
              </div>
               <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="e.g., Booking Inquiry" required className="mt-2 bg-neutral-800 border-neutral-700 text-white"/>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Your message here..." required className="mt-2 bg-neutral-800 border-neutral-700 text-white"/>
              </div>
              <Button type="submit" size="lg" className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-3xl font-bold mb-6 text-amber-400">Contact Information</h2>
             <div className="space-y-6 text-lg">
                <div className="flex items-start">
                    <MapPin className="w-8 h-8 text-amber-400 mr-4 mt-1"/>
                    <div>
                        <p className="font-semibold">Our Office</p>
                        <p className="text-neutral-400">123 Luxury Lane, Suite 100<br/>New York, NY 10001</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <Mail className="w-8 h-8 text-amber-400 mr-4 mt-1"/>
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <a href="mailto:contact@mldluxury.com" className="text-neutral-400 hover:text-amber-300 transition">contact@mldluxury.com</a>
                    </div>
                </div>
                 <div className="flex items-start">
                    <Phone className="w-8 h-8 text-amber-400 mr-4 mt-1"/>
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <a href="tel:+11234567890" className="text-neutral-400 hover:text-amber-300 transition">(123) 456-7890</a>
                    </div>
                </div>
             </div>
             <div className="mt-10">
               <iframe 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.00833129882814%2C40.71087593255648%2C-73.98394584655763%2C40.72517881992167&amp;layer=mapnik" 
                  style={{border: 0, borderRadius: '8px'}} 
                  className="w-full h-80"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MLDLUXURY Office Location"
                ></iframe>
             </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;