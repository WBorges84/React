import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Cursos from './Cursos';
import Modulos from './Modulos';
import Aulas from './Aulas';

function App() {
  return (
      <Router>
          <div>
            <Switch>
            <Route path="/:nomeCurso/:nomeModulo/:nomeAula">
                <div className="aula-video">MOSTRAR AULA</div>
              </Route>
            <Route path="/:nomeCurso/:nomeModulo">
                <Aulas />
              </Route>
              <Route path="/:nomeCurso">
                <Modulos />
              </Route>
              <Route path="/">
                <Cursos />
              </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
