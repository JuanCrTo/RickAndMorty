// import "../styles/Character.scss"
import React from "react";
import Image from "next/image";
import { ICharacter } from "@/interfaces/Character.interface";

interface DetailProps {
  character: ICharacter; // Usa la interfaz existente directamente
}

const Detail: React.FC<DetailProps> = ({ character }) => {
  return (
    <div className="detail-container">
      <div className="detail-image">
        <Image
          src={character.image}
          alt={character.name}
          width={300} // Ajusta según el tamaño de la imagen
          height={300}
        />
      </div>
      <div className="character-detail">
        <h1>{character.name}</h1>
        <div className="detail-text">
          <p>Specie: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Genero: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Current location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
