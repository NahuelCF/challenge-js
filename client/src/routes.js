import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Home } from "./components/home/Home"
import { NewOperation } from "./components/new-operation/NewOperation"

export const Routes = () => (
    <Router>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/new-operation" component={NewOperation} />
            <Route render={() => <Redirect to="/home" />} />
        </Switch>
    </Router>
)