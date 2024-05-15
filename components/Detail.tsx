// import "../styles/Character.scss"
import React from "react";


function Detail({ character }: any) {
  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-detail">
        <h1>{character.name}</h1>
        <div className="detail-text">
          {/* <p>Specie: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Genero: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Current location: {character.location.name}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Detail;