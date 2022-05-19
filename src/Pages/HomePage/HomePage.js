import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {

    return (
        <>
            <Header/>
            <main>
                <Hero/>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;