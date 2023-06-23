import { useParams } from 'react-router-dom';
import LogInForm from '../components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
      {id === 'login' && <LogInForm />}
      {id === 'register' && <RegisterForm />}
    </>
  );
};

export default AuthPage;
