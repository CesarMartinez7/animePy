import { lazy } from "react";


const Search = lazy(() => import("../Components/Grid"))
const Anime = lazy(() => import("../Pages/Anime"))
const ViewAnime = lazy(() => import("../Pages/ViewAnime"))
const Home = lazy(() => import("../Pages/Home"))
const CharactersDetails = lazy(() => import("../Pages/CharactersDetails"))


const allLazy =  {
    CharactersDetails,
    Search,
    Anime,
    ViewAnime,
    Home
}


export default allLazy