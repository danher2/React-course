import React, { useContext } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    //para leer  si el usuario esta autenticado o no
    //dato (user) que utilizaran mis componentes de  Public Route y Private Route
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
