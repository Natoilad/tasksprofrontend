const { LabeImgBg, InputImg, BgImg } = require('./AddBoard.styled');

const BgComponent = ({ bg, onClick, _id }) => {
  return (
    <>
      <LabeImgBg htmlFor={_id}>
        <BgImg src={bg.bgIcons} width="28px" height="28px" alt="bgIcons" />
      </LabeImgBg>
      <InputImg
        onClick={e => onClick(e.target.value)}
        id={_id}
        type="radio"
        name="radio"
        value={_id}
      />
    </>
  );
};

export default BgComponent;
