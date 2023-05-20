import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginFormWrapper, LogInPage } from './LoginPage.styled';

export const LoginPage = () => {
  return (
    <LogInPage>
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </LogInPage>
  );
};
