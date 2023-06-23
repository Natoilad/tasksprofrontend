import { useParams } from 'react-router-dom';
import LogInForm from '../components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <div>
      {id === 'login' && <LogInForm />}
      {id === 'register' && <RegisterForm />}
    </div>
  );
};

export default AuthPage;
