import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDescription = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>

        <Route path="/movies/:movieId" element={<MovieDescription/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  );
};
