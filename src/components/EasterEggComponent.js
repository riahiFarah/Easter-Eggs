import React from 'react';
import { useSelector } from 'react-redux';

const EasterEggComponent = () => {
  const { easterEggActive } = useSelector(state => state);

  // Rendu conditionnel du composant en fonction de l'état de l'Easter egg
  return (
    <div>
      {easterEggActive && (
        <div>
          <h1>Congratulations! You found the Easter egg!</h1>
          <img src="/ici.gif" alt="gif terre" />
        </div>
      )}
    </div>
  );
};

export default EasterEggComponent;
