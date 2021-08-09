import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Earth from "../components/planets/Earth";
import Jupiter from "../components/planets/Jupiter";
import Mars from "../components/planets/Mars";
import Mercury from "../components/planets/Mercury";
import Neptune from "../components/planets/Neptune";
import Saturn from "../components/planets/Saturn";
import Uranus from "../components/planets/Uranus";
import Venus from "../components/planets/Venus";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/mercury" component={Mercury} />
          <Route exact path="/venus" component={Venus} />
          <Route exact path="/earth" component={Earth} />
          <Route exact path="/mars" component={Mars} />
          <Route exact path="/jupiter" component={Jupiter} />
          <Route exact path="/saturn" component={Saturn} />
          <Route exact path="/uranus" component={Uranus} />
          <Route exact path="/neptune" component={Neptune} />

          <Redirect to="/mercury" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
