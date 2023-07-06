import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/auth/auth-operations';
import { useState } from 'react';

import {
  Form,
  Field,
  Button,
  Wrap,
  Section,
  NavLink,
  LinkWrap,
  ErrorWrap,
  EyeButton,
  FieldPassword,
  PasswordWrap,
} from './RegisterForm.styled';
import sprite from '../../images/sprite.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z0-9]+$/, 'Only alphanumeric characters are allowed')
    .min(2, 'Name must be between 2 and 32 characters!')
    .max(32, 'Name must be between 2 and 32 characters!')
    .required('Name is required field'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[A-Za-z0-9@.]+$/,
      'Only alphanumeric characters, @, and . are allowed'
    )
    .matches(/^[^@]*@[^@]*\.[^@]*$/, 'Invalid email format')
    .required('Email is required field'),
  password: Yup.string()
    .matches(/^\S*$/, 'Password cannot contain spaces')
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
      'Only alphanumeric characters and special symbols are allowed'
    )
    .min(8, 'Name must be between 8 and 64 characters!')
    .max(64, 'Name must be between 8 and 64 characters!')
    .required('Password is required field'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const onFormSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(authRegister(user));

    resetForm();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Section>
      <Wrap>
        <LinkWrap>
          <NavLink to="/auth/register" className="active">
            Registration
          </NavLink>
          <NavLink to="/auth/login">Log In</NavLink>
        </LinkWrap>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={schema}
          onSubmit={onFormSubmit}
          validateOnChange={false}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              {errors.name && touched.name ? (
                <ErrorWrap>{errors.name}</ErrorWrap>
              ) : null}
              <Field name="email" type="email" placeholder="Enter your email" />
              {errors.email && touched.email ? (
                <ErrorWrap>{errors.email}</ErrorWrap>
              ) : null}
              <PasswordWrap>
                <FieldPassword
                  name="password"
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Create a password"
                />
                <EyeButton onClick={togglePassword} type="button">
                  <svg width="18" height="18">
                    <use href={sprite + '#icon-eye'}></use>
                  </svg>
                </EyeButton>
                {errors.password && touched.password ? (
                  <ErrorWrap>{errors.password}</ErrorWrap>
                ) : null}
              </PasswordWrap>

              <Button type="submit">Register Now</Button>
            </Form>
          )}
        </Formik>
      </Wrap>
    </Section>
  );
};

export default RegisterForm;
