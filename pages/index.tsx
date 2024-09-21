import React from "react";
import { useState, useEffect } from "react";
import { rmApi } from "./api/api";
import Link from "next/link";
import { Divider } from "antd";
import SearchFilter from "@/components/SearchFilter";
import Character from "@/components/Character";
import BotonControl from "@/components/buttons/BotonControl";
import styles from "@/styles/characterList.module.scss"; // Importar el nuevo archivo de estilos

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page: page.toString(),
        name: searchTerm,
        species: filterSpecies,
        status: filterStatus,
        gender: filterGender,
      };

      const queryParams = new URLSearchParams(params).toString();

      const response = await rmApi.get(`/character?${queryParams}`);
      const sortedResults = response.data.results.sort((a: any, b: any) => {
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else if (sortOrder === "desc") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      setCharacters(sortedResults);
    };

    fetchData();
  }, [page, searchTerm, filterSpecies, filterStatus, filterGender, sortOrder]);

  return (
    <div className={styles.fondo}>
      <div className={styles.titulo}><h1 className={styles.h1}>Rick and Morty</h1></div>
      
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterSpecies={filterSpecies}
        setFilterSpecies={setFilterSpecies}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterGender={filterGender}
        setFilterGender={setFilterGender}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <BotonControl page={page} setPage={setPage} maxPage={42} />

      <div className={styles.container}>
        {characters.map((character: any) => {
          return (
            <div className={styles.characterCard} key={character.id}>
              <Link href={`/${character.id}`} className={styles.linkButton}>
                <Character character={character} />
              </Link>
            </div>
          );
        })}
      </div>

      <BotonControl page={page} setPage={setPage} maxPage={42} />
    </div>
  );
}

export default CharacterList;
