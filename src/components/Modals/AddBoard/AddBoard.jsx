import { useEffect, useState } from 'react';
import icon from '../../../images/sprite.svg';
import {
  Form,
  Field,
  Button,
  Wrap,
  Title,
  CloseBtn,
  IconPlus,
  Priority,
  Label,
  LabelSvg,
  LabelBlockSvg,
  IconSvg,
  IconBlockSvg,
  SSvg,
  BlockSvg,
  LabeImgBg,
  Bgpriority,
  ImgBgList,
  ImgBgItem,
  ImgBg,
} from './AddBoard.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  addBoards,
  // getBoards,
  getBackGrounds,
} from 'redux/content/content-operations';
import { useBg } from 'hooks/backgroundHooks';

const AddBoard = ({ handleClose, title, background, butName }) => {
  const [value, setValue] = useState(1);
  // const [bgIcons, setBgIcons] = useState([]);
  // const [bg, setBg] = useState([]);
  const dispatch = useDispatch();

  const { backgrounds } = useBg();
  console.log(backgrounds);

  const hundleSubmit = evt => {
    evt.preventDefault();
    const task = {
      title,
      icon,
      background,
    };
    dispatch(addBoards(task));
  };

  useEffect(() => {
    dispatch(getBackGrounds());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getBackGrounds())
  //     .then(response => {
  //       const bgIconsData = response[0].bgIcons(item => item.bgIcons);
  //       console.log(bgIconsData);
  //       setBgIcons(bgIconsData);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  function chengeValue(event) {
    setValue(event.target.value);
  }

  // const iconDataBg = response[0].bgIcons;

  return (
    <Wrap>
      <Form onSubmit={hundleSubmit}>
        <Title>{title}</Title>
        <Field
          id="title"
          type="text"
          required
          name="title"
          placeholder="Title"
        />

        <Label>
          Icons
          <Priority>
            <IconSvg
              id="project"
              type="radio"
              name="radio"
              checked
              // value="1"
              // checked={value === '1' ? true : false}
              // onChange={chengeValue}
            />
            <LabelSvg for="project">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-dashbordicon1'}></use>
              </SSvg>
            </LabelSvg>

            {/* <input type="radio" name="" id="id1">   
<label for="id1"><img src="" alt=""></label>


а чекать в css соответсвующим селектором
input:checked + label > img {} */}

            <IconSvg
              id="star"
              type="radio"
              name="radio"
              value="2"
              checked={value === '2' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="star">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-star'}></use>
              </SSvg>
            </LabelSvg>

            <IconSvg
              id="loading"
              type="radio"
              name="radio"
              value="3"
              checked={value === '3' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="loading">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-loading-spin'}></use>
              </SSvg>
            </LabelSvg>
            <IconSvg
              id="puzle"
              type="radio"
              name="radio"
              value="4"
              checked={value === '4' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="puzle">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-puzzle-piece'}></use>
              </SSvg>
            </LabelSvg>
            <IconSvg
              id="container"
              type="radio"
              name="radio"
              value="5"
              checked={value === '5' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="container">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-container'}></use>
              </SSvg>
            </LabelSvg>
            <IconSvg
              id="lightning"
              type="radio"
              name="radio"
              value="6"
              checked={value === '6' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="lightning">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-lightning'}></use>
              </SSvg>
            </LabelSvg>
            <IconSvg
              id="colors"
              type="radio"
              name="radio"
              value="7"
              checked={value === '7' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="colors">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-colors'}></use>
              </SSvg>
            </LabelSvg>
            <IconSvg
              id="hexagon"
              type="radio"
              name="radio"
              value="8"
              checked={value === '8' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg for="hexagon">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-hexagon'}></use>
              </SSvg>
            </LabelSvg>
          </Priority>
        </Label>
        <Label>
          Background
          <Bgpriority>
            <IconBlockSvg
              id="block"
              type="radio"
              name="radio"
              // value="2"
              // checked={value === '2' ? true : false}
              onChange={chengeValue}
            />
            <LabelBlockSvg for="block">
              <BlockSvg width="28" height="28">
                <use href={sprite + '#icon-block'}></use>
              </BlockSvg>
            </LabelBlockSvg>
            {backgrounds.map(bg => {
              return (
                <>
                  <LabeImgBg for={bg.bgIcons}>
                    <ImgBgList>
                      <ImgBgItem>
                        <ImgBg
                          src={bg.bgIcons}
                          width="28px"
                          height="28px"
                          alt="bgIcons"
                        />
                      </ImgBgItem>
                    </ImgBgList>
                  </LabeImgBg>

                  <IconSvg
                    id={bg.bgIcons}
                    type="radio"
                    name="radio"
                    value="7"
                    // checked={value === '7' ? true : false}
                    onChange={chengeValue}
                  />
                </>
              );
            })}
          </Bgpriority>
        </Label>

        <Button type="submit">
          <IconPlus width="28" height="28">
            <use href={icon + '#icon-plus-black'}></use>
          </IconPlus>
          {butName}
        </Button>
        <CloseBtn onClick={handleClose}>
          <svg width="18" height="18">
            <use href={icon + '#icon-close'}></use>
          </svg>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};

export default AddBoard;
