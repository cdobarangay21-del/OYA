import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Wallet, Truck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'GCash'
  });

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Your basket is empty</h2>
        <p className="text-gray-500 mb-8">Add some essentials before checking out!</p>
        <Button asChild className="bg-brand-primary h-12 px-8 rounded-xl font-bold">
          <Link to="/shop">Go to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleCompleteOrder = () => {
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] shadow-xl p-12 text-center"
        >
          <div className="w-24 h-24 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-brand-secondary" />
          </div>
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Order Received, Suki!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Thank you for ordering at Ayo Sari-Sari. We have received your order and will contact you at <span className="font-bold text-gray-900">{formData.phone}</span> shortly for confirmation.
          </p>
          <div className="bg-brand-background rounded-3xl p-6 mb-8 text-left">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-primary" />
              Next Steps
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-[10px] flex items-center justify-center flex-shrink-0">1</span>
                Owner will verify stock and message you on WhatsApp/SMS.
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-[10px] flex items-center justify-center flex-shrink-0">2</span>
                Order will be prepared for delivery or pickup.
              </li>
              <li className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-[10px] flex items-center justify-center flex-shrink-0">3</span>
                Pay via {formData.payment} upon confirmation.
              </li>
            </ul>
          </div>
          <Button asChild className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg">
            <Link to="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold mb-4">Checkout</h1>
        <div className="flex items-center gap-2 text-sm">
           <span className={`font-bold ${step >= 1 ? 'text-brand-primary' : 'text-gray-400'}`}>Contact</span>
           <Separator className="w-8" />
           <span className={`font-bold ${step >= 2 ? 'text-brand-primary' : 'text-gray-400'}`}>Payment</span>
           <Separator className="w-8" />
           <span className={`font-bold ${step >= 3 ? 'text-brand-primary' : 'text-gray-400'}`}>Confirm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="border-0 shadow-xl shadow-gray-100 rounded-[32px] overflow-hidden">
                  <CardHeader className="bg-brand-primary/5 p-8">
                    <CardTitle className="font-display text-2xl">Who are we delivering to?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <Input 
                        placeholder="e.g. Juan De La Cruz" 
                        className="h-12 rounded-xl"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Contact Number</label>
                      <Input 
                        placeholder="e.g. 0917 123 1234" 
                        className="h-12 rounded-xl"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Delivery Address in CDO</label>
                      <Input 
                        placeholder="Brgy, Street, Landmark" 
                        className="h-12 rounded-xl"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-8 pt-0">
                    <Button 
                      className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg"
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.phone || !formData.address}
                    >
                      Next: Choose Payment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="border-0 shadow-xl shadow-gray-100 rounded-[32px] overflow-hidden">
                  <CardHeader className="bg-brand-primary/5 p-8">
                    <CardTitle className="font-display text-2xl">Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-4">
                    {[
                      { id: 'GCash', icon: Smartphone, color: 'text-blue-600', description: 'Quick mobile payment' },
                      { id: 'Maya', icon: Wallet, color: 'text-teal-600', description: 'Easy checkout' },
                      { id: 'COD', icon: Truck, color: 'text-gray-600', description: 'Pay when delivered' }
                    ].map((method) => (
                      <div 
                        key={method.id}
                        onClick={() => setFormData({...formData, payment: method.id})}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          formData.payment === method.id 
                            ? 'border-brand-primary bg-brand-primary/5' 
                            : 'border-gray-100 hover:border-gray-200 bg-white'
                        }`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-white shadow-sm ${method.color}`}>
                               <method.icon className="w-6 h-6" />
                            </div>
                            <div>
                               <h4 className="font-bold text-gray-900">{method.id}</h4>
                               <p className="text-xs text-gray-500">{method.description}</p>
                            </div>
                         </div>
                         <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                           formData.payment === method.id ? 'border-brand-primary bg-brand-primary' : 'border-gray-200'
                         }`}>
                           {formData.payment === method.id && <div className="w-2 h-2 bg-white rounded-full" />}
                         </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="p-8 pt-0 flex flex-col gap-4">
                    <Button 
                      className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl font-bold text-lg"
                      onClick={() => setStep(3)}
                    >
                      Next: Review Order
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="text-gray-400"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back to Contact Info
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="border-0 shadow-xl shadow-gray-100 rounded-[32px] overflow-hidden">
                  <CardHeader className="bg-brand-secondary/5 p-8">
                    <CardTitle className="font-display text-2xl">Confirm Final Order</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Delivery To</h4>
                          <p className="font-medium text-gray-900">{formData.name}</p>
                          <p className="text-sm text-gray-600 truncate">{formData.address}</p>
                          <p className="text-sm text-gray-600">{formData.phone}</p>
                       </div>
                       <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Payment Via</h4>
                          <div className="flex items-center gap-2">
                             <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/10 border-none font-bold">
                               {formData.payment}
                             </Badge>
                          </div>
                       </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                       <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Order Summary</h4>
                       {cart.map(item => (
                         <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.quantity}x {item.name}</span>
                            <span className="font-bold">₱{(item.price * item.quantity).toFixed(2)}</span>
                         </div>
                       ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-8 pt-0 flex flex-col gap-4">
                    <Button 
                      className="w-full h-14 bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-2xl font-bold text-lg"
                      onClick={handleCompleteOrder}
                    >
                      Place Order - ₱{totalPrice.toFixed(2)}
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="text-gray-400"
                      onClick={() => setStep(2)}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back to Payment
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 border-0 shadow-xl shadow-gray-100 rounded-[32px] overflow-hidden bg-white">
            <CardHeader className="p-6">
               <CardTitle className="font-display font-bold text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
               <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                          <p className="text-[10px] text-gray-500">₱{item.price.toFixed(2)} x {item.quantity}</p>
                       </div>
                       <p className="text-xs font-bold text-gray-900">₱{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
               </div>
               
               <Separator className="my-6" />
               
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Subtotal</span>
                     <span className="font-bold">₱{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Delivery Fee</span>
                     <span className="text-brand-secondary font-bold">FREE (CDO)</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center text-lg">
                     <span className="font-display font-bold text-gray-900">Total</span>
                     <span className="font-display font-extrabold text-2xl text-brand-primary">₱{totalPrice.toFixed(2)}</span>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
