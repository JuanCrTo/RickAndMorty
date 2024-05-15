// import "../styles/Character.scss";
import React from "react";


function Character({ character }: any) {
    return (
      <div>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <img src={character.image} alt={character.name} />
      </div>
    );
  }
  
  export default Character;
  