import React, {useState, useEffect} from "react";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Basket from "./pages/basket/Basket";
import AppContext from "./contex";
import Contacts from "./pages/contacts/Contacts";
import Delivery from "./pages/delivery/Delivery";
import AdminMain from "./Admin/AdminMain.jsx/AdminMain";
import Login from "./Admin/Login/Login";
import Pizza from "./Admin/Products/Pizza"

const App = () => {
    const [card, setCard] = useState([])
    const addToBasket = (item) => {
        setCard([...card, item])
    }

    const deleteFromBasket = (id) => {
        setCard(prev => prev.filter(item => item.id !== id))
    }

    return (
        <AppContext.Provider value={{
            deleteFromBasket,
            addToBasket,
            card,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/delivery" element={<Delivery/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/admin/main" element={<AdminMain/>}/>
                    <Route path="/admin/login" element={<Login/>}/>
                    <Route path="/admin/pizza" element={<Pizza/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;
