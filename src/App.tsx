import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {MainPage} from "./components/mainpage/MainPage";

function App() {
    return (
        <div className="App">
            <div className={"container"}>
                <Header/>
                <MainPage />
                <Footer/>
            </div>
        </div>
    );
}

export default App;
