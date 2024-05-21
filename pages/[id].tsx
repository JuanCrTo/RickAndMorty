import React from "react";
import Link from "next/link";
import BotonMain from "@/components/buttons/BotonMain";
import Detail from "@/components/Detail";
import { rmApi } from "./api/api";
// import "../styles/CharacterList.scss"

export const getStaticProps = async ({ params }: any) => {
  const { id } = params;
  const response = await rmApi.get(`/character/${id}`);
  const character = response.data;

  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await rmApi.get('/character');
  const characters = response.data.results;
  const paths = characters.map((character: any) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};


export default function CharacterDetails({ character }: any) {

  return (
    <div>
      <Link href={`/`}>
        <BotonMain />
      </Link>
      <div className="character-details-container">
        <div className="character-detail">
          <Detail character={character} />
        </div>
      </div>
    </div>
  );
}