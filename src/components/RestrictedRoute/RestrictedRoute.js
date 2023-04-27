import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn;
  });
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
