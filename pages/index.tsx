import React from "react";
import { useState, useEffect } from "react";
import { rmApi } from "./api/api";
import Link from "next/link";
import { Divider } from "antd";
import SearchFilter from "@/components/SearchFilter";
import BotonAtras from "@/components/buttons/BotonAtras";
import BotonAdelante from "@/components/buttons/BotonAdelante";
import Character from "@/components/Character";
import BotonCharts from "@/components/buttons/BotonCharts";

// import "../styles/CharacterList.scss"


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  useEffect(() => {
    fetchData();
  }, [page, searchTerm, filterSpecies, filterStatus, filterGender, sortOrder]);

  return (
    <div>
      <h1 className="h1">Rick and Morty</h1>
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>
      <Link href={`/charts`}>
        <BotonCharts />
      </Link>
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
      <BotonAdelante page={page} setPage={setPage} maxPage={42} />
      <p></p>
      <BotonAtras page={page} setPage={setPage} />
      <div className="container">
        {characters.map((character: any) => {
          return (
            <div className="character-card" key={character.id}>
              <Link href={`/${character.id}`}>
                <Character character={character} />
              </Link>
            </div>
          );
        })}
      </div>
      <BotonAtras page={page} setPage={setPage} />
      <BotonAdelante page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
