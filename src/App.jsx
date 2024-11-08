import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);


  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0);


  function handleAddFighter(fighter) {
    if (money >= fighter.price) {
      const updatedTeam = [...team, fighter];
      setTeam(updatedTeam);
      setMoney(money - fighter.price);
z    } else {
      console.log("Not enough money");
    }
  }

  function handleRemoveFighter(fighterToRemove) {
    const updatedTeam = team.filter(fighter => fighter.name !== fighterToRemove.name);
    setTeam(updatedTeam);
    setMoney(money + fighterToRemove.price);
  }

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team</h3>
      {team.length === 0 ? (
        <h5>Pick some team members!</h5>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.name}>
              <img src={fighter.img} alt={fighter.name} />
              <h4>{fighter.name}</h4>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.name}>
            <img src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
