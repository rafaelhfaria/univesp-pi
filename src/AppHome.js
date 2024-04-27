import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuemSomos } from "./components/QuemSomos";
import { Ambientes } from "./components/Ambientes";
import { Contato } from "./components/Contato";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

function AppHome() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <QuemSomos />
      <Ambientes />
      <Contato />
    </div>
  );
}

export default AppHome;