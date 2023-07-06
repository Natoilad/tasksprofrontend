import Dropzone from 'react-dropzone';
import styles from './DropzoneBox.module.css';

// const KILOBYTE = 1024;

export const DropzoneBox = ({ setImg, setUploadImg, maxFileSize = 10 }) => {
  const handleDrop = acceptedFiles => {
    const file = acceptedFiles[0];
    setUploadImg(file);

    const reader = new FileReader();

    reader.onload = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            className={styles.input_box}
            {...getRootProps()}
            // maxSize={maxFileSize * KILOBYTE}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    </>
  );
};
