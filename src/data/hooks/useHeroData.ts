import { Api, Configuration } from "../../api";
import Hero from "../../api/Hero";
import { QUERY_KEY } from "../consts/querykeys";
import { createCacheKey, makeRequest } from "../utils";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
type ApiResponse = Hero[];

const getCacheKey = () => createCacheKey(QUERY_KEY.heroes);

const useFetch = () => {
  const api = new Api(
    new Configuration({
      basePath: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api",
    })
  );
  return () => makeRequest(api.heroesGet(), { 404: () => [] });
};

export const useHeroesData = (
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch();
  return useSuspenseQuery<ApiResponse, Error>({
    queryKey: getCacheKey(),
    queryFn: fetchData,
    ...options,
  });
};
