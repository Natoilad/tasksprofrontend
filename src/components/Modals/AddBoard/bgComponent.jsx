import { SmallLoader } from 'components/Loader/SmallLoader/Loader';
import { useBg } from 'hooks/backgroundHooks';
const { LabeImgBg, InputImg, BgImg } = require('./AddBoard.styled');

const BgComponent = ({ bg }) => {
  const { bgIcons } = bg;
  const { isLoading } = useBg();


  return isLoading ? (
    <SmallLoader />
  ) : (
    <>
      <LabeImgBg htmlFor={bgIcons}>
        <BgImg src={bgIcons} width="28px" height="28px" alt="bgIcons" />
      </LabeImgBg>
      <InputImg
        id={bgIcons}
        type="radio"
        name="radio"
        // value="11"
        // checked={bgValue === '11' ? true : false}
        // onChange={chengeValue}
      />
    </>
  );
};

export default BgComponent;
