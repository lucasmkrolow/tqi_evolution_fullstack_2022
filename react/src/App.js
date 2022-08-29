import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCompras from './components/ListaCompras';
import ListaLivros from './components/ListaLivros';
import ListaVendas from './components/ListaVendas';
import Venda from './components/Venda';
import Compra from './components/Compra';
import Livro from './components/Livro';


function App() {
return (
<div className="App">
<Router>
<Routes>
<Route path='/' element={<ListaLivros />} />
<Route path='/compras' element={<ListaCompras />} />
<Route path='/vendas' element={<ListaVendas />} />
<Route path='/novolivro' element={<Livro />} />
<Route path='/novacompra' element={<Compra />} />
<Route path='/novavenda' element={<Venda />} />
<Route path='/novacompra/:idDoLivroParam' element={<Compra />} />
<Route path='/novavenda/:idDoLivroParam' element={<Venda />} />
</Routes>
</Router>
</div>

);
}

export default App;