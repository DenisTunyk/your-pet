import { useAuth } from 'hooks/useAutn';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserData } from 'components/UserData/UserData';

export const AppBar = () => {
  const { isLoggeIn } = useAuth();

  return (
    <div>
      <Navigation />
      {isLoggeIn ? <AuthNav /> : <UserData />}
    </div>
  );
};
