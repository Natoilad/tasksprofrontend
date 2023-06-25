import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import styles from './PhotoEditor.module.css';

export const PhotoEditor = ({ setIsShowEditor, uploadImg, setPhotos }) => {
  const canvasRef = useRef(null);

  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  const handleScaleChange = event => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };

  const handleRotate = () => {
    const newRotate = rotate + 90;
    setRotate(newRotate);
  };

  const handleSave = () => {
    const timestamp = Date.now();
    const canvas = canvasRef.current.getImageScaledToCanvas();
    const dataURL = canvas.toDataURL();
    const photoName = `photo_${timestamp}`;
    setPhotos({ photoName, dataURL });
    setIsShowEditor(false);
  };

  const handleCancel = () => {
    setIsShowEditor(false);
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.input_scale_title}>Edit Image</h2>
      {uploadImg && (
        <AvatarEditor
          ref={canvasRef}
          image={uploadImg}
          width={350}
          height={300}
          border={10}
          borderRadius={10}
          scale={scale}
          rotate={rotate}
        />
      )}
      <div className={styles.box_setting_btn}>
        <label className={styles.input_scale_title}>Scale:</label>
        <input
          className={styles.input_scale}
          type="range"
          id="scale"
          min="1"
          max="2"
          step="0.01"
          value={scale}
          onChange={handleScaleChange}
        />
        <button className={styles.btn_replace} onClick={handleRotate}>
          Rotate 90°
        </button>
      </div>
      <div className={styles.box_main_btn}>
        <button className={styles.btn_save} onClick={handleSave}>
          Save
        </button>
        <button className={styles.btn_cancel} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
