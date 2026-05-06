import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, Category } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES: (Category | 'All')[] = ['All', 'Canned Goods', 'Snacks & Drinks', 'Household', 'Personal Care', 'Rice & Grains', 'Bundles'];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">The Digital Aisle</h1>
        <p className="text-gray-500 max-w-lg">Find your daily essentials. Stock levels updated in real-time for your convenience.</p>
      </div>

      <div className="flex flex-col gap-8 mb-12">
        {/* Search and Filters Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Search products (e.g. Rice, Soap, Canned...)" 
              className="pl-12 h-14 bg-white border-brand-primary/10 rounded-2xl shadow-sm focus:ring-brand-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery('')}
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
          <Button variant="outline" className="h-14 px-6 rounded-2xl border-brand-primary/10 bg-white gap-2 text-gray-600 font-medium w-full md:w-auto">
            <Filter className="w-5 h-5" />
            Filters
          </Button>
        </div>

        {/* Category Horizontal Scroll */}
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(cat)}
                className={`h-11 px-6 rounded-xl font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                    : 'bg-white border-brand-primary/10 text-gray-600 hover:bg-brand-primary/5 hover:text-brand-primary'
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-[40px] border border-dashed border-gray-200"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900">No items found</h3>
            <p className="text-gray-500 mt-2">Try searching with a different term or category.</p>
            <Button 
                variant="link" 
                className="text-brand-primary font-bold mt-4"
                onClick={() => {
                   setSearchQuery('');
                   handleCategoryChange('All');
                }}
            >
                Clear all filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
