import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Hero } from "./api";

const client = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api",
});

const fetchAll: () => Promise<Hero[] | undefined> = async () => {
  const config: AxiosRequestConfig = {};
  try {
    const allResponse: AxiosResponse = await client.get(`/all.json`, config);
    const foundHeroes: Hero[] = allResponse.data;
    return foundHeroes;
  } catch (err) {
    throw new Error("Failed to fetch heroes");
  }
};

export default fetchAll;
