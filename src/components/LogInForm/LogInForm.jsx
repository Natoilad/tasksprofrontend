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
} from './LogInForm.styled';
// import { useParams } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .required('Required'),
});

const LogInForm = () => {
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

export default LogInForm;
