import React from "react";
import './components/App/index.scss';
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Favorite } from "./components/Favorite";
import GetMarvel from "./API/GetMarvel";
import { PageFeed } from "./components/PageFeed";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comics" element={<PageFeed fetchData={GetMarvel.getComics} title="Comics" />} />
        <Route path="/events" element={<PageFeed fetchData={GetMarvel.getEvents} title="Events" />} />
        <Route path="/characters" element={<PageFeed fetchData={GetMarvel.getCharacters} title="Characters" />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div >
  );
}

export default App;
