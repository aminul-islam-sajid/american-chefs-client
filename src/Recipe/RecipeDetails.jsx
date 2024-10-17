import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

const RecipeDetails = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch('https://amarecan-chefs-sarver-aminul-islam-sajid.vercel.app/chefsDetail')
      .then(res => res.json())
      .then(data => {
        const foundRecipe = data.find(recipe => recipe.id == id);
        setSelectedRecipe(foundRecipe);
      })
      .catch(error => console.log(error));
  }, [id]);


  return (
    <div>
      <Navbar></Navbar>


      {selectedRecipe ? (
        <div>
          <h2 className='text-center text-4xl font-bold py-8'> Chef Details</h2>
          <div className='px-48 my-14 '>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure><img src={selectedRecipe.picture} alt="Movie" /></figure>
              <div className="card-body">
                <h2 className="card-title">Name: {selectedRecipe.name}</h2>
                <p className='font-semibold'>{selectedRecipe.experience} </p>
                <p>Total: {selectedRecipe.recipes} </p>
                <p><span className='font-bold'>Likes: </span>{selectedRecipe.likes} </p>
                
                <div className="card-actions justify-end">
                 
                </div>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 ms-6'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={selectedRecipe.recipeImg} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{selectedRecipe.recipe_1}</h2>
                <p><span className='font-extrabold'>Detail</span> {selectedRecipe.recipeDetail}</p>
                <p><span className='font-extrabold'>Ingredients</span> {selectedRecipe.recipeIngredients}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to favorite</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={selectedRecipe.recipeImg_2} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{selectedRecipe.recipe_2}</h2>
                <p><span className='font-extrabold'>Detail</span> {selectedRecipe.recipeDetail_2}</p>
                <p><span className='font-extrabold'>Ingredients</span> {selectedRecipe.recipeIngredients_2}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to favorite</button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={selectedRecipe.recipeImg_3} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{selectedRecipe.recipe_3}</h2>
                <p><span className='font-extrabold'>Detail</span> {selectedRecipe.recipeDetail_3}</p>
                <p><span className='font-extrabold'>Ingredients</span> {selectedRecipe.recipeIngredients_3}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to favorite</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={selectedRecipe.recipeImg_4} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{selectedRecipe.recipe_4}</h2>
                <p><span className='font-extrabold'>Detail</span> {selectedRecipe.recipeDetail_4}</p>
                <p><span className='font-extrabold'>Ingredients</span> {selectedRecipe.recipeIngredients_4}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to favorite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RecipeDetails;
