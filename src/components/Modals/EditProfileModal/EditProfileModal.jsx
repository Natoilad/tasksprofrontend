import { Container, IconButton } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './EditProfileModal.module.css';
import { Close as CloseIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { Form as FormWrap, Field as Input } from 'formik';
import userImg from '../../..//images/unknown-user.png';
import { DropzoneBox } from 'components/DropzoneBox/DropzoneBox';
import { useState } from 'react';
import { PhotoEditor } from 'components/PhotoEditor/PhotoEditor';

// {
//   /* <ContainerModal
// handleClose={handleClose}
// open={true}
// component={<EditProfileModal />} импортировать и вставить єту функцию не забыть прописать функии handleClose
// /> */
// }

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
  const [isShowEditor, setIsShowEditor] = useState(false);
  const [uploadImg, setUploadImg] = useState(null);
  const [photos, setPhotos] = useState({ photoName: null, dataURL: null });

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
      img: photos,
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(user);
    console.log(`Successfully!`);
    resetForm();
  };

  return (
    <div className={styles.box}>
      <Container>
        <h2 className={styles.title}>Edit profile</h2>
        <div className={styles.btn_close}>
          <StyledIconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>
        </div>

        <div>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={schema}
            onSubmit={onFormSubmit}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off">
                <div className={styles.box_icon_user}>
                  <div className={styles.icon_dropzone}>
                    {photos.dataURL ? (
                      <img
                        style={{ borderRadius: '4px' }}
                        className={styles.icon_user}
                        src={photos.dataURL}
                        alt={photos.photoName}
                      />
                    ) : (
                      <img
                        className={styles.icon_user}
                        src={userImg}
                        alt="unknown user img"
                      />
                    )}

                    <DropzoneBox
                      setIsShowEditor={setIsShowEditor}
                      setUploadImg={setUploadImg}
                    />
                    <div className={styles.box_add}>
                      <AddIcon width="10px" height="10px" />
                    </div>
                  </div>
                </div>
                <Field name="name" type="text" placeholder="Enter your Name" />
                {errors.name && touched.name ? (
                  <div className={styles.error}>{errors.name}</div>
                ) : null}
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}

                <Field name="password" placeholder="Create a password" />
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
      </Container>
      {isShowEditor ? (
        <PhotoEditor
          setIsShowEditor={setIsShowEditor}
          uploadImg={uploadImg}
          setUploadImg={setUploadImg}
          photos={photos}
          setPhotos={setPhotos}
          limit={2}
        />
      ) : (
        ''
      )}
    </div>
  );
};
