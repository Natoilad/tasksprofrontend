import { useParams } from 'react-router-dom';
import LogInForm from '../components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/authHooks';
import { LoaderWelcomePage } from 'components/Loader/LoaderWelcomePage/Loader';

const AuthPage = () => {
  const { id } = useParams();
  const { isLoading } = useAuth();
  return isLoading ? (
    <LoaderWelcomePage />
  ) : (
    <>
      {id === 'login' && <LogInForm />}
      {id === 'register' && <RegisterForm />}
    </>
  );
};

export default AuthPage;
