import  { useState } from 'react';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books & Stationery' },
  { id: 3, name: 'Gifts & Toys' },
  { id: 4, name: 'Home & Kitchen' },
  { id: 5, name: 'Fitness & Sports' },
];

const productsData = {
 
  1: [
    { id: 1, name: 'Amazon Alexa', price: '₹2999', image: '/assets/electronic1.jpg' },
    { id: 2, name: 'Headphone', price: '₹7999', image: '/assets/electronic2.jpg' },
    { id: 3, name: 'Smartphone', price: '₹14999', image: '/assets/electronic3.jpg' },
  ],
  2: [
    { id: 1, name: 'Notebook', price: '₹99', image: '/assets/book1.jpg' },
    { id: 2, name: 'Pen Set', price: '₹99', image: '/assets/stat2.jpg' },
    { id: 3, name: 'Sketch Book', price: '₹99', image: '/assets/notebook3.jpeg' },
    
  ],
  3: [
    { id: 1, name: 'Gift Box', price: '₹1999', image: '/assets/gift1.jpg' },
    { id: 2, name: 'Penguin', price: '₹999', image: '/assets/gift2.jpeg' },
    { id: 3, name: 'Remote Car', price: '₹2499', image: '/assets/gift3.jpg' },
  ],
  4: [
    { id: 1, name: 'Utensils Stand', price: '₹3999', image: '/assets/kitchen1.jpg' },
    { id: 2, name: 'Cooking Induction', price: '₹5999', image: '/assets/kitchen2.jpg' },
    { id: 3, name: 'Cooking Pan Set', price: '₹2999', image: '/assets/kitchen3.jpg' },
    
  ],
  5: [
    { id: 1, name: 'Cicket', price: '₹2499', image: '/assets/sports1.jpg' },
    { id: 2, name: 'Football', price: '₹499', image: '/assets/sports2.jpg' },
    { id: 3, name: 'Badminton', price: '₹1599', image: '/assets/sports3.jpeg' },
    
  ],
};

const CategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <>
  
        <h2 className="md:text-3xl font-bold text-center text-black mb-10 bg-white p-4">CATEGORIES</h2>
    <div className="flex">
      <div className="w-1/4 bg-[#2866cb] p-4 h-[calc(90vh-4rem)] overflow-y-auto">
        <ul>
          {categories.map(category => (
            <li
              key={category.id}
              className={`p-4 cursor-pointer ${selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="w-3/4 p-4 h-[calc(90vh-4rem)] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsData[selectedCategory].map(product => (
            <div key={product.id} className="bg-[#2866cb] p-4 shadow-md rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-fill mb-2" />
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="text-white">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoriesSection;
