import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Compra from "./components/Compra";
import Livro from "./components/Livro";
import Venda from "./components/Venda"
import ListaLivros from "./components/ListaLivros";
import ListaCompras from "./components/ListaCompras";
import ListaVendas from "./components/ListaVendas";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListaLivros />} />
      <Route path="compras" element={<ListaCompras />} />
      <Route path="vendas" element={<ListaVendas />} />
      <Route path="/novacompra" element={<Compra />} />
      <Route path="/novavenda" element={<Venda />} />
      <Route path="/novolivro" element={<Livro />} />
      <Route path='/novacompra/:idDoLivroParam' element={<Compra />} />
      <Route path='/novavenda/:idDoLivroParam' element={<Venda />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);