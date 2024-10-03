import React, { useState } from 'react';
import './App.css';

function App() {
  // État pour stocker la liste des aliments
  const [aliments, setAliments] = useState([]);
  
  // États pour le formulaire
  const [nomAliment, setNomAliment] = useState('');
  const [caloriesAliment, setCaloriesAliment] = useState('');

  // Fonction pour ajouter un aliment
  const ajouterAliment = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    if (nomAliment && caloriesAliment) {
      const nouvelAliment = {
        id: Date.now(),
        nom: nomAliment,
        calories: parseInt(caloriesAliment)
      };
      
      setAliments([...aliments, nouvelAliment]);
      setNomAliment('');
      setCaloriesAliment('');
    }
  };

  return (
    <div className="App">
      <h1>Mon Suivi Nutritionnel</h1>
      
      <form onSubmit={ajouterAliment}>
        <div>
          <label>
            Nom de l'aliment:
            <input
              type="text"
              value={nomAliment}
              onChange={(e) => setNomAliment(e.target.value)}
              placeholder="Ex: Pomme"
            />
          </label>
        </div>
        
        <div>
          <label>
            Calories:
            <input
              type="number"
              value={caloriesAliment}
              onChange={(e) => setCaloriesAliment(e.target.value)}
              placeholder="Ex: 95"
            />
          </label>
        </div>
        
        <button type="submit">Ajouter l'aliment</button>
      </form>

      <h2>Aliments ajoutés:</h2>
      <ul>
        {aliments.map(aliment => (
          <li key={aliment.id}>
            {aliment.nom} - {aliment.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;