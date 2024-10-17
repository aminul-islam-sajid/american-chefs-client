import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://amarecan-chefs-sarver-aminul-islam-sajid.vercel.app/chefsDetail')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
     
    <div className='p-8'>
      <h2 className='text-5xl font-extrabold p-8 text-center'>Chefs Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {chefs.map(chef => (
          <div
            key={chef.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={chef.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef.name}</h2>
              <p>{chef.experience}</p>
              <p className="font-bold">{chef.recipes}</p>
              <div className="card-actions justify-end">
                <p className="text-cyan-600 text-2xl font-bold">
                  like {chef.likes}
                </p>
                <button className="btn btn-primary"><Link to={`/recipe/${chef.id}`}>View Recipes</Link> </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
