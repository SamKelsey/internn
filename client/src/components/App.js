import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

// Import components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Portfolio from "./Portfolio/Portfolio";
import Landing from "./Landing";
import Book from "./Book/Book";

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/join-us" component={JoinUs} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/book" component={Book} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
