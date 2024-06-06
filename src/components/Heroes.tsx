import Hero from "../models/hero";
import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Heroes: React.FC<{ heroes: Hero[]; isLoading: boolean }> = (props) => {
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
  }[] = props.heroes.map((hero) => {
    return { id: hero.id, name: hero.name, ...hero.powerstats };
  });

  return (
    <>
      <section>
        <Typography variant="h2">Heroes</Typography>
        {props.isLoading && (
          <Typography variant="subtitle1">Fetching heroes...</Typography>
        )}
        {!props.isLoading && props.heroes.length === 0 && (
          <Typography variant="subtitle1">No heroes to display</Typography>
        )}
        {!props.isLoading && props.heroes.length > 0 && (
          <DataGrid rows={rows} columns={columns} />
        )}
      </section>
    </>
  );
};

export default Heroes;
