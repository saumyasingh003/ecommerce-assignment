import React from 'react';
import Header from './components/Header';
import Promotions from './components/Promotions';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import NearbyStores from './components/NearbyStore';

const App = () => {
  return (
    <div className="bg-yellow-400 ">
      <Header />
      <main className="container mx-auto p-4 md:p-8 overflow-hidden">
        <Promotions />
        <Categories />
        <FeaturedProducts />
        <NearbyStores />
      </main>
    </div>
  );
};

export default App;
