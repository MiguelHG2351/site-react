import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

// Estilos || Styles
import "./components/css/App.css";

// Componentes
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Hola from "./pages/Hola";
import Mundo from "./pages/Mundo";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Index} />
            <Route exact path="/hola" component={Hola} />
            <Route exact path="/mundo" component={Mundo} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

console.log(
  "%c ATENCIÓN!, este es un entorno que solo esta permitido para desarrolladores del sitio favor no intentar ejecutar ningun código en esta consola sin importar el motivo; Si tiene problemas en el sitio contactar a yo@gmail.com, ni intene hackear el sitio con malos motivos debido a que es ilegal y no lograra nada",
  "text-align:center; color:red; font-size:30px; padding:250px"
);

export default App;
