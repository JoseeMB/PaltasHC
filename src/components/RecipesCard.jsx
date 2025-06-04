import React from 'react';
import './RecipesCard.css';

const RecipesCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-left">
        <img src={icon} alt="Receta" />
      </div>
      <div className="card-right">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <div className="rating" style={{ '--rating': 80 }}></div>
        <a href="#" className="link">Ver Receta</a>
      </div>
    </div>
  );
};

export default RecipesCard;

