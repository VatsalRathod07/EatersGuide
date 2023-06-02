import React from "react";
import { BsFillStarFill } from 'react-icons/bs'
const Jobs = [
  {
    "name": "Delicious Bites",
    "cuisine": "Italian",
    "location": "123 Main Street, City",
    "rating": 4.5,
    "price_range": "$$",
    "website": "https://www.deliciousbites.com",
    "image": "https://cdn.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
  },
  {
    "name": "Spice Paradise",
    "cuisine": "Indian",
    "location": "456 Elm Street, City",
    "rating": 4.2,
    "price_range": "$$",
    "website": "https://www.spiceparadise.com",
    "image": "https://www.thespruceeats.com/thmb/htgE7CCYS5FaW99oF183gVl7e_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg",
  },
  {
    "name": "Sushi Heaven",
    "cuisine": "Japanese",
    "location": "789 Oak Street, City",
    "rating": 4.8,
    "price_range": "$$$",
    "website": "https://www.sushiheaven.com",
    "image": "https://static.toiimg.com/thumb/81983223.cms?width=1200&height=900",
  },
  {
    "name": "La Pizzeria",
    "cuisine": "Italian",
    "location": "321 Maple Street, City",
    "rating": 4.6,
    "price_range": "$$",
    "website": "https://www.lapizzeria.com",
    "image": "https://media.cnn.com/api/v1/images/stellar/prod/210211140233-03-classic-italian-dishes.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280",
  },
  {
    "name": "Mama Mia's Tacos",
    "cuisine": "Mexican",
    "location": "987 Pine Street, City",
    "rating": 4.4,
    "price_range": "$",
    "website": "https://www.mamamiastacos.com",
    "image": "https://gothammag.com/get/files/image/galleries/mexican-food-jarett-lopez-unsplash.jpg",
  },
  {
    "name": "Thai Delight",
    "cuisine": "Thai",
    "location": "654 Cedar Street, City",
    "rating": 4.7,
    "price_range": "$$",
    "website": "https://www.thaidelight.com",
    "image": "https://www.thespruceeats.com/thmb/2WyZy-wxe4aZUoa9tswHW-gihY4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thai-red-curry-with-chicken-recipe-3217262-hero-01-1099358354ca43b89d2c7cc3409a079b.jpg",
  },
  {
    "name": "Steakhouse Grill",
    "cuisine": "Steakhouse",
    "location": "246 Walnut Street, City",
    "rating": 4.9,
    "price_range": "$$$",
    "website": "https://www.steakhousegrill.com",
    "image": "https://casualfoodist.com/wp-content/uploads/2021/07/Grilled-Skirt-Steak-with-Avocado-Lime-Crema-8.jpg",
  },
  {
    "name": "VegeDelight",
    "cuisine": "Vegetarian",
    "location": "135 Cherry Street, City",
    "rating": 4.3,
    "price_range": "$$",
    "website": "https://www.vegedelight.com",
    "image": "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/veg-food.jpg",
  },
]

const Job = () => {
  return (
    <div className="jobContainer flex flex-wrap justify-center items-center py-10">
    {Jobs.map((job, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5">
        <div className="bg-white rounded-md border-LightGray border-2">
          <img src={job.image} alt="" className="rounded-t-[4px]  w-full h-40 object-cover" />
          <div className="p-4">
            <h1 className="text-lg font-semibold">{job.name}</h1>
            <p className="font-medium">Cuisine: {job.cuisine}</p>
            <div className="flex items-center gap-1 font-medium">
              {job.rating} <BsFillStarFill size={14} className="text-yellow-400" />
            </div>
            <p className="text-gray-500">{job.location}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Job;