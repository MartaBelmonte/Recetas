import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeForm = ({ onRecipeAdded }) => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
    const previews = selectedFiles.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  };

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !instructions.trim() || ingredients.length === 0 || images.length === 0) {
      setError('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('instructions', instructions);
    formData.append('ingredients', ingredients.join(','));

    images.forEach((image, index) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('http://localhost:5001/api/recipes', formData);
      const createdRecipe = response.data;
      onRecipeAdded(createdRecipe);

      setTitle('');
      setIngredients([]);
      setInstructions('');
      setImages([]);
      setImagePreviews([]);
      setError('');
    } catch (error) {
      console.error('Error al crear receta:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Hubo un error al intentar crear la receta.');
      } else {
        setError('Hubo un error al intentar crear la receta. Por favor, inténtelo de nuevo.');
      }
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center display-5 text-secondary mb-4">Añadir tu receta</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body bg-light">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Título del plato:</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ingredients" className="form-label">Ingredientes:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="ingredients"
                      className="form-control"
                      value={ingredient}
                      onChange={handleIngredientChange}
                      placeholder="Añade un ingrediente"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleAddIngredient}
                    >
                      Añadir
                    </button>
                  </div>
                  <ul className="list-group mt-2">
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {ingredient}
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveIngredient(index)}>Eliminar</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <label htmlFor="instructions" className="form-label">Instrucciones:</label>
                  <textarea
                    id="instructions"
                    className="form-control"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="images" className="form-label">Añadir imágenes:</label>
                  <input
                    type="file"
                    id="images"
                    className="form-control"
                    multiple
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  <div className="mt-2 d-flex flex-wrap">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="mb-2 me-2 position-relative">
                        <img src={preview} alt={`Item ${index + 1}`} className="img-thumbnail" style={{ width: '100px', height: 'auto' }} />
                        <button type="button" className="btn btn-outline-danger btn-sm position-absolute top-0 end-0" onClick={() => handleRemoveImage(index)}>Eliminar</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Agregar receta</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
