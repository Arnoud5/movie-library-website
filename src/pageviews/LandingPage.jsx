import React from "react";
import HeroLP from "../component/heroLP/LPhero";
import TrendingMovie from "../component/trenMovieLP/trendMovieLP";
import TrendingTV from "../component/trenTVLP/trendTVLP";


function LandingPage() {
    return (
        <>
            <HeroLP />
            <TrendingMovie />
            <TrendingTV />
        </>

    );
}

export default LandingPage;