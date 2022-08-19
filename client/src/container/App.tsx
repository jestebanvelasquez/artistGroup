import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Artists from "../components/Artistas/allArtists";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Categories from "../components/Categories";
import Contract from "../components/Contract";
import Login from "../components/Login";
import Register from "../components/Register/";
import Pagos from "../components/pruebaPago/Pagos";
import FormShow from '../components/Register/FormShow';
import AdminPanel from "../components/AdminPanel";
// import Contract from "../components/Contract";

export default function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artists/detail/:id' element={<ArtistDetail />} />
        <Route path='/categories' element={<Categories />} />
        {/* <Route path='/contract' element={<Contract />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/createartist' element={<FormShow />} />
        <Route path='/AdminPanel' element={<AdminPanel />} />
        <Route path='/contract' element={<Pagos />} />

      </Routes>
    </>
  )
}
