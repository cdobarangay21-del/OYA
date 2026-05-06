import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, ShoppingBag, Truck, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const categories = [
    { name: 'Canned Goods', icon: '🥫', color: 'bg-red-100 text-red-700' },
    { name: 'Snacks & Drinks', icon: '🥨', color: 'bg-amber-100 text-amber-700' },
    { name: 'Personal Care', icon: '🧴', color: 'bg-blue-100 text-blue-700' },
    { name: 'Rice & Grains', icon: '🌾', color: 'bg-green-100 text-green-700' },
    { name: 'Household', icon: '🧺', color: 'bg-purple-100 text-purple-700' },
    { name: 'Bundles', icon: '📦', color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 border-none mb-6 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs">
                CDO Neighborhood Favorite
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                Your Digital <br />
                <span className="text-brand-primary">Sari-Sari Suki</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Fresh essentials, local favorites, and daily bundles delivered right to your home in Cagayan de Oro. Fast, easy, and always friendly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl h-14 px-8 text-lg font-bold shadow-xl shadow-brand-primary/20">
                  <Link to="/shop" className="gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Start Ordering
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 rounded-2xl h-14 px-8 text-lg font-bold">
                  <a href="#categories">Explore Aisles</a>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 mt-12 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Same-Day Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Always Fresh Stock</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                  alt="Sari-Sari Store"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-gray-900">Today's Special</h3>
                    <Badge className="bg-brand-accent text-white">40% OFF</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">"Breakfast Essentials Bundle" - Coffee, Sugar, and freshly baked bread.</p>
                  <Button asChild size="sm" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold">
                    <Link to="/shop?category=Bundles">Add to Cart</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-500">Find exactly what you need quickly</p>
            </div>
            <Button variant="ghost" className="text-brand-primary font-bold hidden md:flex hover:bg-brand-primary/5 hover:text-brand-primary">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link to={`/shop?category=${cat.name}`}>
                  <div className={`aspect-square ${cat.color} rounded-3xl flex flex-col items-center justify-center p-6 transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-current/10`}>
                    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <span className="font-display font-bold text-sm text-center">{cat.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Suki Choices</h2>
              <p className="text-gray-500">Top selling items in your neighborhood</p>
            </div>
            <Button asChild variant="outline" className="text-brand-primary font-bold border-brand-primary hover:bg-brand-primary hover:text-white">
                <Link to="/shop">See All Items</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-brand-primary/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="text-center md:text-left">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-lg mb-6 mx-auto md:mx-0">
                 <ShieldCheck className="w-8 h-8" />
               </div>
               <h3 className="font-display font-bold text-xl mb-4">Fast Order for Pickup</h3>
               <p className="text-gray-600 leading-relaxed">Skip the line! Order online and pick up at the store in minutes.</p>
             </div>
             <div className="text-center md:text-left">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-lg mb-6 mx-auto md:mx-0">
                 <Truck className="w-8 h-8" />
               </div>
               <h3 className="font-display font-bold text-xl mb-4">CDO Wide Delivery</h3>
               <p className="text-gray-600 leading-relaxed">Getting essentials shouldn't be hard. We deliver straight to your door.</p>
             </div>
             <div className="text-center md:text-left">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-lg mb-6 mx-auto md:mx-0">
                 <CheckCircle className="w-8 h-8" />
               </div>
               <h3 className="font-display font-bold text-xl mb-4">Guaranteed Suki Service</h3>
               <p className="text-gray-600 leading-relaxed">We value our community. Expect only the best service from us.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);
