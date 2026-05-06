import React from 'react';
import { Product } from '../data/products';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from './CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart, updateQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-2xl">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-brand-accent hover:bg-brand-accent text-white border-0 font-bold uppercase text-[10px] tracking-widest px-2 py-1">
              Top Suki Choice
            </Badge>
          )}
          {product.stock < 10 && (
            <Badge className="absolute top-3 right-3 bg-amber-100 text-amber-700 border-amber-200 font-bold text-[10px] tracking-tight px-2 py-1">
              Low Stock: {product.stock} left
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-[10px] uppercase tracking-wider text-brand-secondary font-bold mb-1">{product.category}</p>
          <h3 className="font-display font-semibold text-gray-900 group-hover:text-brand-primary transition-colors text-base line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2 h-8 leading-relaxed">
            {product.description}
          </p>
          <p className="text-lg font-bold text-gray-900 mt-2 font-display">
            ₱{product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {cartItem ? (
            <div className="flex items-center justify-between w-full bg-brand-background rounded-xl p-1 border border-brand-primary/10">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-white"
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              >
                <Minus className="w-4 h-4 text-brand-primary" />
              </Button>
              <span className="font-bold text-brand-primary">{cartItem.quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-white"
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              >
                <Plus className="w-4 h-4 text-brand-primary" />
              </Button>
            </div>
          ) : (
            <Button 
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl h-10 gap-2"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Basket
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
