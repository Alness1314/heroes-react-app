import { Navigate, Route, Routes } from "react-router";
import {
  HeroPage,
  NintendoPage,
  PlayStationPage,
  SearchPage,
  XboxPage,
} from "../../heroes";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Routes>
          <Route path="nintendo" element={<NintendoPage />} />
          <Route path="playstation" element={<PlayStationPage />} />
          <Route path="xbox" element={<XboxPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/nintendo" />} />
        </Routes>
      </div>
    </>
  );
};
