import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import AllArtists from "../components/Artistas/allArtists";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Categories from "../components/Categories";
import Pagos from "../pruebaPago/Pagos";
import Login from "../components/Login";
import Register from "../components/Register/";

import Dashboard from "../components/Dashboard";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes"
import PermissionDenied from "../components/PermissionDenied"
import FormPago from "../pruebaPago/FormPago";

const MainRoutes = () => (
    <Routes>

        {/** Public Routes */}
        <Route path="/" element={<PublicRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/artists' element={<AllArtists />} />
            <Route path='/artists/detail/:id' element={<ArtistDetail />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/contract' element={<Pagos />} />
            <Route path='/contract/artist/:id' element={<FormPago />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Route>

        {/** Protected Routes */}
        <Route path="/" element={<ProtectedRoutes roleRequired={["ADMINISTRADOR", "ARTISTA", "USUARIO"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/** Permission denied route */}
        <Route path="/denied" element={<PermissionDenied />} />
    </Routes>
)

export default MainRoutes