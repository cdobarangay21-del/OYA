import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Search, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from './CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { totalItems, cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20">
            A
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
            Ayo <span className="text-brand-primary">Sari-Sari</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium hover:text-brand-primary transition-colors ${location.pathname === '/' ? 'text-brand-primary' : 'text-gray-600'}`}>Home</Link>
          <Link to="/shop" className={`text-sm font-medium hover:text-brand-primary transition-colors ${location.pathname === '/shop' ? 'text-brand-primary' : 'text-gray-600'}`}>Shop All</Link>
          <Link to="/checkout" className={`text-sm font-medium hover:text-brand-primary transition-colors ${location.pathname === '/checkout' ? 'text-brand-primary' : 'text-gray-600'}`}>Checkout</Link>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-brand-accent hover:bg-brand-accent text-white border-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
              <SheetHeader>
                <SheetTitle className="font-display">Your Basket</SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="font-display font-medium text-lg">Your basket is empty</h3>
                  <p className="text-gray-500 text-sm mt-2">Add some essentials to get started!</p>
                  <Button asChild className="mt-6 bg-brand-primary hover:bg-brand-primary/90">
                    <Link to="/shop">Browse Shop</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <ScrollArea className="flex-1 -mx-6 px-6">
                    <div className="space-y-4 py-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{item.name}</h4>
                            <p className="text-brand-primary font-bold text-sm">₱{item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="pt-6 mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 font-medium">Subtotal</span>
                      <span className="text-xl font-bold font-display">₱{totalPrice.toFixed(2)}</span>
                    </div>
                    <Button asChild className="w-full py-6 bg-brand-primary hover:bg-brand-primary/90 text-lg rounded-xl">
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-primary/10 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">A</div>
              <span className="font-display font-bold text-xl tracking-tight">Ayo <span className="text-brand-primary">Sari-Sari</span></span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-sm mb-6">
              Your neighborhood suki store from CDO, now online. Fresh essentials, snacks, and personal care delivered right to your doorstep.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full bg-brand-background">
                <MessageCircle className="w-5 h-5 text-brand-primary" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full bg-brand-background">
                <Phone className="w-5 h-5 text-brand-primary" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Store Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-brand-primary" />
                Brgy. 21, Cagayan de Oro City
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-brand-primary" />
                Open Mon-Sun: 6AM - 10PM
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-brand-primary" />
                +63 912 345 6789
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Payment Options</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-brand-background text-blue-600 border-blue-200">GCash</Badge>
              <Badge variant="outline" className="bg-brand-background text-teal-600 border-teal-200">Maya</Badge>
              <Badge variant="outline" className="bg-brand-background text-gray-600">Cash on Delivery</Badge>
            </div>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <p className="text-center text-sm text-gray-400">
          © 2026 Ayo Sari-Sari Store. Built for Cagayan de Oro community.
        </p>
      </div>
    </footer>
  );
};

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-secondary rounded-full flex items-center justify-center text-white shadow-xl shadow-brand-secondary/20"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};
