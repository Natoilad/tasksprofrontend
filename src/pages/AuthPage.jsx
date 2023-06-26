import { useParams } from 'react-router-dom';
import LogInForm from '../components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/authHooks';
import { Loader } from 'components/Loader/Loader';

const AuthPage = () => {
  const { id } = useParams();
  const { isLoading } = useAuth();
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {id === 'login' && <LogInForm />}
      {id === 'register' && <RegisterForm />}
    </>
  );
};

export default AuthPage;
