import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useHeroesData } from "../data";
import { Hero } from "../api";

export const Heroes: React.FC = () => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name" },
    { field: "intelligence", headerName: "Intelligence" },
    { field: "strength", headerName: "Strength" },
    { field: "speed", headerName: "Speed" },
    { field: "durability", headerName: "Durability" },
    { field: "power", headerName: "Power" },
    { field: "combat", headerName: "Combat" },
  ];

  const rows: {
    id: number;
    name: string;
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  }[] = heroes.map((hero) => {
    return { id: hero.id, name: hero.name, ...hero.powerstats };
  });

  return (
    <>
      <section>
        <Typography variant="h3">All Heroes</Typography>
        {heroes.length === 0 && (
          <Typography variant="subtitle1">No heroes to display</Typography>
        )}
        {heroes.length > 0 && <DataGrid rows={rows} columns={columns} />}
      </section>
    </>
  );
};
