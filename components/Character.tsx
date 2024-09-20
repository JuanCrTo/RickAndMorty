import React from "react";
import Image from "next/image";
import { ICharacter } from "@/interfaces/Character.interface";
// import styles from "@/styles/character.module.scss";

interface CharacterProps {
  character: Pick<ICharacter, "name" | "species" | "image">; // Usa Pick para seleccionar solo las propiedades necesarias
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        // className={styles.image}
      />
    </div>
  );
};

export default Character;
