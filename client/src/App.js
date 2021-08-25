import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Parallax from "./pages/portfolio/port1/parallax_astronaut";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/parallax_astronaut" component={Parallax} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
