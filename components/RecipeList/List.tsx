import React from 'react';
import RecipeCard from '../RecipeCard/Card';

interface List {
  title: string;
  description: string;
}

interface RecipeListProps {
  recipes: List[];
}

const List: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} title={recipe.title} description={recipe.description} />
      ))}
    </div>
  );
};

export default List;
