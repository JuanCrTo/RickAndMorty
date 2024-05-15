import axios from 'axios';
import React from "react";


export const rmApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})