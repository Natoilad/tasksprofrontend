import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from 'hooks/authHooks';

import {
  authUpdateUser,
  authUpdateUserAvatar,
} from 'redux/auth/auth-operations';

import icon from '../../../images/sprite.svg';

import { DropzoneBox } from 'components/DropzoneBox/DropzoneBox';
import {
  Wrap,
  EditForm,
  Title,
  CloseBtn,
  CloseIcon,
  AvatarBox,
  AddBtnBox,
  FormInput,
  PasswordWrap,
  EyeButton,
  ErrorBox,
  SendBtn,
} from './EditProfileModal.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email().required('Email is Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(64, 'Too Long!')
    .required('Password is Required'),
});

export const EditProfileModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useAuth();
  const [uploadImg, setUploadImg] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [img, setImg] = useState(currentUser.avatarURL || '');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
      <CloseBtn aria-label="close" onClick={handleClose}>
        <CloseIcon>
          <use href={icon + '#icon-close'}></use>
        </CloseIcon>
      </CloseBtn>

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
          <EditForm autoComplete="off">
            <AvatarBox>
              <div className="icon_dropzone">
                {img ? (
                  <img className="icon_user" src={img} alt="User avatar" />
                ) : (
                  <svg className="icon_user">
                    <use href={icon + '#icon-user-avatar'}></use>
                  </svg>
                )}
                <DropzoneBox setUploadImg={setUploadImg} setImg={setImg} />
                <AddBtnBox>
                  <svg width="10" height="10">
                    <use href={icon + '#icon-plus-fill'}></use>
                  </svg>
                </AddBtnBox>
              </div>
            </AvatarBox>

            <FormInput
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Enter your Name"
            />
            {errors.name ? <ErrorBox>{errors.name}</ErrorBox> : null}
            <FormInput
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email ? <ErrorBox>{errors.email}</ErrorBox> : null}
            <PasswordWrap>
              <FormInput
                name="password"
                type={passwordShown ? 'text' : 'password'}
                placeholder="Create a password"
              />
              <EyeButton onClick={togglePassword} type="button">
                <svg width="18" height="18">
                  <use href={icon + '#icon-eye'}></use>
                </svg>
              </EyeButton>
            </PasswordWrap>
            {errors.password && touched.password ? (
              <ErrorBox>
                <p>{errors.password}</p>
              </ErrorBox>
            ) : null}

            <SendBtn type="submit">Send</SendBtn>
          </EditForm>
        )}
      </Formik>
    </Wrap>
  );
};
