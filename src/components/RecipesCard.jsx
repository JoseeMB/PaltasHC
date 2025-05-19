import React from 'react';
import './RecipesCard.css';
const RecipesCard = ({icon, title, description}) => {
  return (
    <div class="card">
  <div class="icon">
    <img src={icon} alt="" />
  </div>
  <div class="title">{title}</div>
  <p class="description">{description}</p>
  <div class="rating"></div>
  <a href="#" class="link">Ver Receta</a>
</div>
  );
}

export default RecipesCard;
