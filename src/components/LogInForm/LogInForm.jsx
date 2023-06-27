import { Formik } from 'formik';
import * as Yup from 'yup';
import { authLogin } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import {
  Form,
  Field,
  Button,
  Wrap,
  Section,
  NavLink,
  LinkWrap,
  PasswordWrap,
  FieldPassword,
  EyeButton,
  ErrorWrap,
} from './LogInForm.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .required('Required'),
});

const LogInForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const onFormSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    dispatch(authLogin(user));
    console.log(`Successfully ${values.email} login!`);
    resetForm();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Section>
      <Wrap>
        <LinkWrap>
          <NavLink to="/auth/register">Registration</NavLink>
          <NavLink to="/auth/login" className="active">
            Log In
          </NavLink>
        </LinkWrap>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={schema}
          onSubmit={onFormSubmit}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <Field name="email" type="email" placeholder="Enter your email" />
              {errors.email && touched.email ? (
                <ErrorWrap>{errors.email}</ErrorWrap>
              ) : null}

              <Field
                name="password"
                type="password"
                placeholder="Create a password"
              />
              {/* {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null} */}

              <Button type="submit">Log In Now</Button>
            </Form>
          )}
          {/* <ErrorMessage component="div" name="name" /> */}
        </Formik>
      </Wrap>
    </Section>
  );
};

export default LogInForm;
