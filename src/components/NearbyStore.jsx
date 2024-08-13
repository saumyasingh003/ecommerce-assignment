import React from 'react';

const stores = [
  { name: 'Chai Point', location: 'Bangalore, Karnataka', distance: '5 miles' },
  { name: 'FabIndia', location: 'New Delhi, Delhi', distance: '7 miles' },
  { name: 'Café Coffee Day', location: 'Mumbai, Maharashtra', distance: '3 miles' },
  { name: 'Big Bazaar', location: 'Chennai, Tamil Nadu', distance: '10 miles' },
  { name: 'Lifestyle', location: 'Hyderabad, Telangana', distance: '2 miles' },
  { name: 'Shoppers Stop', location: 'Pune, Maharashtra', distance: '8 miles' },
  { name: 'H&M', location: 'Kolkata, West Bengal', distance: '6 miles' },
  { name: 'Pantaloons', location: 'Ahmedabad, Gujarat', distance: '4 miles' },
  { name: 'Starbucks', location: 'Noida, Uttar Pradesh', distance: '7 miles' },
];

const NearbyStores = () => {
  return (
    <section className="my-8 bg-[#2866cb] py-6 px-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white font-sans text-center">NEARBY STORES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {stores.map((store) => (
          <div key={store.name} className="border border-gray-300 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">{store.name}</h3>
            <p className="text-gray-700">{store.location}</p>
            <p className="text-gray-600">{store.distance}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyStores;
