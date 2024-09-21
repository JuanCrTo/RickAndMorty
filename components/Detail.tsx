import React from "react";
import Image from "next/image";
import { ICharacter } from "@/interfaces/Character.interface";
import styles from "@/styles/detail.module.scss";

interface DetailProps {
  character: ICharacter;
}

const Detail: React.FC<DetailProps> = ({ character }) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailImage}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.characterDetail}>
        <h1>{character.name}</h1>
        <div className={styles.detailText}>
          <p><span>Species:</span> {character.species}</p>
          <p><span>Status:</span> {character.status}</p>
          <p><span>Gender:</span> {character.gender}</p>
          <p><span>Origin:</span> {character.origin.name}</p>
          <p><span>Current location:</span> {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
