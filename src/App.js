import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import LandingPage from "../src/pageviews/LandingPage" //page1
import SearchMovie from "../src/pageviews/SearchMovie" //page2
import SearchTV from "../src/pageviews/SearchTV";      //page3
import SearchPage from "./pageviews/SearchPage";       //page4 
import Detail from "./pageviews/Detail";               //page5
import DetailTV from "./pageviews/DetailtvTrend";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<SearchMovie />} />
        <Route path="/tvs" element={<SearchTV />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:idDetail" element={<Detail />} />
        <Route path="/detailtv/:idTvDetail" element={<DetailTV />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;