import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/header';
import Button from './components/button/button';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/productList/productList';
import Form from './components/form/form';
window.Telegram.WebApp



function App() {
  const { onToggleButton, tg } = useTelegram()

  useEffect(() =>{
    tg.ready()
  }, [])

  
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
