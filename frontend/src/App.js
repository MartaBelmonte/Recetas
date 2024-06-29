import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import './App.css';
import RecipeList from './components/RecipeList';
import Header from './components/HeaderRecipe';
import LandingPage from './components/LandingPage';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inicio" element={<LandingPage />} />
          <Route path="/crear" element={<RecipeForm />} />
          <Route path="/recetas" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
