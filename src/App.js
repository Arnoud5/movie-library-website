import Navbar from "./component/navbar/navbar";
import LPhero from "./component/heroLP/LPhero";
import LPTrendingMovie from "./component/trenMovieLP/trendMovieLP";
import LPTrendingTV from "./component/trenTVLP/trendTVLP"
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LPhero />
      <LPTrendingMovie />
      <LPTrendingTV />
      <Footer />
    </div>
  );
}

export default App;
