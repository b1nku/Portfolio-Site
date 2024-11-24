import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Post from "./Post";
import Grotto from "./Grotto";
import Swamp from "./Swamp";
import Wishlist from "./Wishlist";
import Weather from "./Weather";

const socket = io('http://localhost:5000');

function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blog-post" element={<Post  />} />
                <Route path="/grotto" element={<Grotto />} />
                <Route path="/swamp" element={<Swamp />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
            <Footer />
        </Router>
    );
    const [data, setData] = useState([]);

    useEffect(() => {
        // Sample event listener for real-time updates
        socket.on('updateData', (newData) => {
            setData(prevData => [...prevData, newData]);
        });

        return () => {
            socket.disconnect();
        };
        
    }, []);
}

export default App;
