
    import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Calendar, Clock, Users, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

    const Booking = () => {

      return (
        <div className="bg-neutral-900 text-white py-20">
          <Helmet>
            <title>Book Your Ride | MLDLUXURY</title>
            <meta name="description" content="Secure your luxury transportation in NYC with our simple and fast booking form. Reserve your vehicle today." />
          </Helmet>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Reserve Your Vehicle</h1>
              <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                Complete the form below to request your booking. We'll confirm availability shortly.
              </p>
            </motion.div>
            
            <Card className="max-w-4xl mx-auto bg-black border-neutral-800">
              <CardHeader>
                <CardTitle className="text-amber-400 text-2xl">Booking Details</CardTitle>
              </CardHeader>
              <CardContent>
               <form action="https://formsubmit.co/bookings@mldluxury.com" method="POST" className="space-y-8">
                 <input type="hidden" name="_subject" value="New Booking Request - MLDLUXURY" />
                 <input type="hidden" name="_captcha" value="false" />
                 <input type="hidden" name="_next" value="https://mldluxury.com/#/booking?success=true" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Trip Details */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center"><Calendar className="mr-2 h-4 w-4 text-amber-400" />Pickup Date</Label>
                       <Input id="date" name="pickup_date" type="date" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="flex items-center"><Clock className="mr-2 h-4 w-4 text-amber-400" />Pickup Time</Label>
                       <Input id="time" name="pickup_time" type="time" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passengers" className="flex items-center"><Users className="mr-2 h-4 w-4 text-amber-400" />Number of Passengers</Label>
                       <Input id="passengers" name="passengers" type="number" min="1" placeholder="e.g., 2" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickup" className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-amber-400" />Pickup Location</Label>
                       <Input id="pickup" name="pickup_location" placeholder="e.g., 123 Main St, New York, NY" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoff" className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-amber-400" />Drop-off Location</Label>
                       <Input id="dropoff" name="dropoff_location" placeholder="e.g., JFK Airport" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                    </div>
                    {/* Personal Details */}
                    <div className="space-y-6">
                       <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center"><Users className="mr-2 h-4 w-4 text-amber-400" />Full Name</Label>
                       <Input id="name" name="name" placeholder="John Doe" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center"><Mail className="mr-2 h-4 w-4 text-amber-400" />Email Address</Label>
                       <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center"><Phone className="mr-2 h-4 w-4 text-amber-400" />Phone Number</Label>
                       <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="flex items-center"><MessageCircle className="mr-2 h-4 w-4 text-amber-400" />Special Requests</Label>
                       <Textarea id="notes" name="special_requests" placeholder="e.g., Child seat needed, specific route preference." className="bg-neutral-800 border-neutral-700 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold text-lg">
                     Submit Booking Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    };

    export default Booking;
  