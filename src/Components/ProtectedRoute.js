import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";


export const ProtectedRoute = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>401 not authorized redirecting to login</div>,
  });

  return <Component />;
};