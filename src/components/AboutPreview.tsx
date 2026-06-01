import { ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              About Gratem Ventures
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a multi-disciplinary business enterprise committed to delivering excellence. Our foundations are built on integrity, quality service, and fostering long-term partnerships.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Unmatched Reliability</h4>
                  <p className="text-gray-600">We keep our promises. Timely deliveries and consistent quality are our hallmarks.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Precision & Quality</h4>
                  <p className="text-gray-600">Whether it's printing layouts or commodity sourcing, we pay attention to the details.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Driven by Growth</h4>
                  <p className="text-gray-600">Our goal is to help your business scale efficiently through our comprehensive trade networks.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" 
              alt="Team at work" 
              className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2670&auto=format&fit=crop" 
              alt="Trading port" 
              className="rounded-2xl w-full h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
