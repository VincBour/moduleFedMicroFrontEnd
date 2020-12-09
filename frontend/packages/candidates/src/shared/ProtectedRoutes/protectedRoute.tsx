import * as React from 'react';
import { Redirect, Route, RouteProps} from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
    component: React.ComponentType<any>;
    path:string;
    isAuthenticated:boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({component: Component, isAuthenticated,...rest}) => {

    return (
    <Route
        exact
        {...rest}
        render = {
           (props) => isAuthenticated
                ? <Component {...props} /> 
                : <Redirect to={{pathname:'/signin', state:{from: props.location}}} />
        }
    />
    );
}

export default ProtectedRoute;