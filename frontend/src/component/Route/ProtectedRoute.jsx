import React ,{Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({component: Component,...rest}) => {
    const {loading,isAuthenticated,user} = useSelector((state) => state.user);
  return (
    <Fragment>
        {!loading && (
            <Route
            {...rest}
            render = {(props) => {
                if(!isAuthenticated) {
                    return <Navigate to="/login" replace />
                }
                return (
                    <>
                      {/* Render any content specific to ProtectedRoute */}
                      <Component {...props} />
                      <Outlet /> {/* Render nested routes here */}
                    </>
                  );
            }}
            />
        )}
    </Fragment>
  )
}

export default ProtectedRoute