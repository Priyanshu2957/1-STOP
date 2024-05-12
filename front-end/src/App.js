import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import womenmen_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>} />
        <Route path='/womens' element={<ShopCategory banner={womenmen_banner} category='women'/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>} />
        <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />}/>
        </Route> 
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
