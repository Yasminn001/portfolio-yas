// App.jsx
import './App.css'
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Motivacao from "./components/Motivacao";
import Habilidades from "./components/Habilidades";
import Planos from "./components/Planos";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Sobre />
      <Motivacao />
      <Habilidades />
      <Planos />
      <Projetos />
      <Contato />
    </div>
  );
}