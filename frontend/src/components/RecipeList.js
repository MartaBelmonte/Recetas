import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/recipes')
      .then(response => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener recetas:', error.message);
        setError(error.message);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div className="container text-center my-5">
        <p>Cargando recetas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center my-5">
        <p>Error al obtener recetas: {error}</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
  <h2 className="text-center display-5 text-secondary mt-5 mb-5">Lista de Recetas</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map(recipe => (
          <div key={recipe._id} className="col mb-4">
            <div className="created-card h-100 shadow-sm border-0">
              <div className="card-body-created">
                <div className="card-front">
                  <h5 className="card-title text-center text-uppercase">{recipe.title}</h5>
                  {recipe.imageUrl && (
                    <img 
                      src={`http://localhost:5001${recipe.imageUrl}`} 
                      className="card-img-top img-fluid rounded-top" 
                      alt={recipe.title} 
                      style={{ height: '200px', width:'350px', objectFit: 'cover' }} 
                    />
                  )}
                </div>
                <div className="card-back">
                  <h5 className="card-title text-center ">Ingredientes</h5>
                  <ul className="list-group mt-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="list-group-item">{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
