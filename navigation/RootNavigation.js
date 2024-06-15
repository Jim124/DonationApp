import { useSelector } from 'react-redux';
import { NonAuthenticated, Authenticated } from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector((state) => state.user);
  return user.isLogined ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
