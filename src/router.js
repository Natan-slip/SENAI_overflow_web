import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { isSignedIn } from "./services/security";
import Register from "./pages/Register";

function PrivateRoute({ children, ...rest }) {

    if(isSignedIn()){
        return <Route {...rest}>{children}</Route>
    }else{
        return <Redirect to="/" />
    }

}

function Router() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;