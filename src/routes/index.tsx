import React from 'react';
import { useAuth } from '../hooks/auth';

import AuthRoutes from '../routes/auth.routes';
 import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
  const { token } = useAuth();

  return token ?  <AppRoutes/>: <AuthRoutes /> ;
};

export default Routes;