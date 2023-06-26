import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/auth/auth-operations';

import {
  Form,
  Field,
  Button,
  Wrap,
  Section,
  NavLink,
  LinkWrap,
  ErrorWrap,
} from './RegisterForm.styled';

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
  const onFormSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(authRegister(user));
    console.log(`Successfully ${values.email} register!`);
    resetForm();
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

              <Field
                name="password"
                type="password"
                placeholder="Create a password"
              />
              {errors.password && touched.password ? (
                <ErrorWrap>{errors.password}</ErrorWrap>
              ) : null}

              <Button type="submit">Register Now</Button>
            </Form>
          )}
          {/* <ErrorMessage component="div" name="name" /> */}
        </Formik>
      </Wrap>
    </Section>
  );
};

export default RegisterForm;

// const handleSubmit = e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   dispatch(
//     userRegister({
//       name: form.elements.name.value,
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     })
//   );
//   form.reset();
// };

// <Formik
//   initialValues={{ name: '', number: '' }}
//   validationSchema={schema}
//   onSubmit={(values, { resetForm }) => {
//     const chekContact = contactsState.find(
//       contactState => contactState.name === values.name
//     );
//     if (chekContact) {
//       alert(`${values.name} is alteady in contacts`);
//       resetForm();
//       return;
//     }
//     dispatch(addContact(values));
//     resetForm();
//   }}
// >
//   <Form>
//     <Label htmlFor="name">
//       Name
//       <Field
//         id="name"
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <ErrorMessage component="div" name="name" />
//     </Label>
//     <Label htmlFor="number">
//       Number
//       <Field
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <ErrorMessage component="div" name="name" />
//     </Label>

//     <Button type="submit">Submit</Button>
//   </Form>
// </Formik>;

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[A-Za-z0-9]+$/, 'Only alphanumeric characters are allowed')
//     .min(2, 'Too Short!')
//     .max(32, 'Too Long!')
//     .required('Required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .matches(
//       /^[A-Za-z0-9@.]+$/,
//       'Only alphanumeric characters, @, and . are allowed'
//     )
//     .matches(/^[^@]*@[^@]*\.[^@]*$/, 'Invalid email format')
//     .required('Required'),
//   password: Yup.string()
//     .matches(
//       /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
//       'Only alphanumeric characters and special symbols are allowed'
//     )
//     .min(8, 'Too Short!')
//     .max(64, 'Too Long!')
//     .matches(/^[^\s]+$/, 'Password cannot contain spaces')
//     .required('Required'),
// });
