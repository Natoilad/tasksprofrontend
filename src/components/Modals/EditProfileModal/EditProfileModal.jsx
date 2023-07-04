import { useState } from 'react';

import { Formik } from 'formik';
import { Form as FormWrap, Field as Input } from 'formik';
import * as Yup from 'yup';

import { Close as CloseIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DropzoneBox } from 'components/DropzoneBox/DropzoneBox';
import styles from './EditProfileModal.module.css';

import userImg from '../../..//images/unknown-user.png';

import {
  Wrap,
  // Button,
  Title,
} from './EditProfileModal.styled';
import { useDispatch } from 'react-redux';
import {
  authUpdateUser,
  authUpdateUserAvatar,
} from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/authHooks';

const Form = styled(FormWrap)({
  display: ' flex',
  flexDirection: ' column',
  rowGap: '14px',
  alignItems: 'center',
});

const StyledIconButton = styled(IconButton)({
  color: 'white',
});
const Field = styled(Input)({
  width: '100%',
  paddingLeft: '10px',
  height: ' 49px',
  borderRadius: '8px',
  border: '1px solid #bedbb0',
  opacity: '0.4000000059604645',
  background: '#1f1f1f',
  boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.08)',
  color: '#fff',
});

export const EditProfileModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useAuth();
  const [uploadImg, setUploadImg] = useState(null);
  const [img, setImg] = useState(currentUser.avatarURL || '');

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email().required('Email is Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(64, 'Too Long!')
      .required('Password is Required'),
  });

  const onFormSubmit = (values, { resetForm }) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
      _id: currentUser._id,
    };

    const formData = new FormData();
    formData.append('avatar', uploadImg);

    dispatch(authUpdateUser(user));

    if (uploadImg) {
      dispatch(authUpdateUserAvatar(formData));
    }

    resetForm();
    handleClose();
  };

  return (
    <Wrap>
      <Title>Edit profile</Title>
      <div className={styles.btn_close}>
        <StyledIconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </StyledIconButton>
      </div>

      <div>
        <Formik
          initialValues={{
            name: currentUser.name,
            email: currentUser.email,
            password: '',
          }}
          validationSchema={schema}
          onSubmit={onFormSubmit}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <div className={styles.box_icon_user}>
                <div className={styles.icon_dropzone}>
                  {img ? (
                    <img
                      style={{ borderRadius: '4px' }}
                      className={styles.icon_user}
                      src={img}
                      alt="user"
                    />
                  ) : (
                    <img
                      className={styles.icon_user}
                      src={img ? img : userImg}
                      alt="unknown user img"
                    />
                  )}
                  <DropzoneBox setUploadImg={setUploadImg} setImg={setImg} />
                  <div className={styles.box_add}>
                    <AddIcon width="10px" height="10px" />
                  </div>
                </div>
              </div>
              <Field
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Enter your Name"
              />
              {errors.name && touched.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}
              <Field name="email" type="email" placeholder="Enter your email" />
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}

              <Field
                name="password"
                type="password"
                placeholder="Create a password"
              />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}

              <button className={styles.btn_submit} type="submit">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Wrap>
  );
};
