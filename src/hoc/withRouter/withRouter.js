import React from "react";

import { useNavigate, useLocation, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProps = (props) => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProps;
};

export default withRouter;
