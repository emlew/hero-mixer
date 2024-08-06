// import { useMemo, useState } from "react";
// import { Hero } from "../api";
// import { useHeroesData } from "../data";
// import { useActivePlayer, useClaimedHeroes } from "../hooks";
// import { Card, CardContent, CardHeader, Box, Button } from "@mui/material";
// import { HeroSelector } from "./HeroSelector";

// const HeroCard: React.FC<{ player: number }> = ({ player }) => {
//   const query = useHeroesData();
//   const heroes: Hero[] = useMemo(() => {
//     return query.data ?? [];
//   }, [query]);
//   const [selectedHero, setSelectedHero] = useState<Hero>();
//   const { claimHero } = useClaimedHeroes();
//   const { switchTurns } = useActivePlayer();

//   const handleSelectHero = (hero?: Hero) => {
//     if (!hero) return;
//     claimHero(hero, player);
//     setSelectedHero(() => {
//       return heroes.find((h) => h.id == hero.id);
//     });
//     switchTurns();
//   };

//   return (
//     <Card variant="outlined" sx={{ border: 0, width: "10vw" }}>
//       {!selectedHero && (
//         <CardContent>
//           <HeroSelector onSelectHero={handleSelectHero} player={player} />
//         </CardContent>
//       )}
//       {selectedHero && (
//         <>
//           <CardHeader
//             title={selectedHero.name}
//             sx={{ wordBreak: "break-word" }}
//           />
//           <CardContent>
//             <img
//               src={selectedHero.images.sm}
//               alt={"Photo of " + selectedHero.name}
//               style={{ maxWidth: "10vw" }}
//             />
//           </CardContent>
//         </>
//       )}
//     </Card>
//   );
// };

// export const HeroForm = () => {
//   const { claimedHeroes } = useClaimedHeroes();
//   return (
//     <>
//       <Box sx={{ display: "flex", flexDirection: "row", gap: "0" }}>
//         {[1, 2, 3].map((hero) => (
//           <HeroCard key={hero} player={1} />
//         ))}
//       </Box>
//       <Button>{claimedHeroes[0].length}</Button>
//       <Box sx={{ display: "flex", flexDirection: "row", gap: "0" }}>
//         {[1, 2, 3].map((hero) => (
//           <HeroCard key={hero} player={1} />
//         ))}
//       </Box>
//     </>
//   );
// };

// import { Box, InputLabel, MenuItem, Select } from "@mui/material";
// import { Form, Formik } from "formik";
// import { useMemo } from "react";
// import { Hero } from "../api";
// import { useHeroesData } from "../data";
// import { useClaimedHeroes } from "../hooks";

// type HeroFormOptions = "" | number;

// export const HeroForm = () => {
//   const query = useHeroesData();
//   const heroes: Hero[] = useMemo(() => {
//     return query.data ?? [];
//   }, [query]);
//   const { claimedHeroes } = useClaimedHeroes();
//   const availableHeroes = heroes.filter(
//     (hero) =>
//       !(claimedHeroes[0].includes(hero) || claimedHeroes[1].includes(hero))
//   );

//   const handleSubmit = (values: HeroFormOptions[][]) => {
//     console.log(values);
//   };

//   return (
//     <Formik
//       initialValues={[
//         ["", "", ""],
//         ["", "", ""],
//       ]}
//       onSubmit={(values: HeroFormOptions[][]) => {
//         handleSubmit(values);
//       }}
//     >
//       {({ values, isSubmitting, handleChange }) => (
//         <Form>
//           {values[0].map((_value, i) => (
//             <Box key={i}>
//               <InputLabel>{values[0][i]}</InputLabel>
//               <Select label="Hero" defaultValue={values[0][i]}>
//                 {availableHeroes.map((hero) => (
//                   <MenuItem key={hero.id} value={hero.id}>
//                     {hero.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Box>
//           ))}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//           {values[1].map((_value, i) => (
//             <Box key={i}>
//               <InputLabel>Choose a hero...</InputLabel>
//               <Select label="Hero" value={values[1][i]}>
//                 {availableHeroes.map((hero) => (
//                   <MenuItem key={hero.id} value={hero.id}>
//                     {hero.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Box>
//           ))}
//         </Form>
//       )}
//     </Formik>
//   );
// };
