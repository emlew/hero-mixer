import { Hero } from "@/api";
import { useHeroesData } from "@/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMemo } from "react";
import { StyledTableContainer, StyledTableTitle } from "./Heroes.styles";

export const Heroes: React.FC = () => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);

  const columns: string[] = [
    "Name",
    "Intelligence",
    "Strength",
    "Speed",
    "Durability",
    "Power",
    "Combat",
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
      <StyledTableTitle variant="h3">All Heroes</StyledTableTitle>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.intelligence}</TableCell>
                <TableCell>{row.strength}</TableCell>
                <TableCell>{row.speed}</TableCell>
                <TableCell>{row.durability}</TableCell>
                <TableCell>{row.power}</TableCell>
                <TableCell>{row.combat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};
