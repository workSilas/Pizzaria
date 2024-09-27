import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Consulta from "./pages/Consulta";
import Pedido from "./pages/Pedido";
import Deletar from "./pages/Deletar"; 
import Alterar from "./pages/Alterar";

export default function Rotas() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Consulta" element={<Consulta />} />
            <Route path="/Pedido" element={<Pedido />} />
            <Route path="/Deletar" element={<Deletar />} />
            <Route path="/Alterar" element={<Alterar />} />
        </Routes>
    </BrowserRouter>
    )
}