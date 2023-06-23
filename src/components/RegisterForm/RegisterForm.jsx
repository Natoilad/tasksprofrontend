import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  Field,
  Button,
  Wrap,
  Section,
  NavLink,
  LinkWrap,
} from './RegisterForm.styled';
import { useParams } from 'react-router-dom';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .required('Required'),
});

const RegisterForm = () => {
  // const { id } = useParams();

  return (
    <Section>
      <Wrap>
        <LinkWrap>
          <NavLink to="/auth/register">Registration</NavLink>
          <NavLink to="/auth/login">Log In</NavLink>
        </LinkWrap>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={schema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form autocomplete="off">
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              {/* {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null} */}

              <Field name="email" type="email" placeholder="Enter your email" />
              {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}

              <Field name="password" placeholder="Create a password" />
              {/* {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null} */}

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
