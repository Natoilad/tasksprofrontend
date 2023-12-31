import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
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
  InputSvg,
  SSvg,
  BlockSvg,
  Bgpriority,
  CloseIcon,
} from './EditBoardModal.styled';

import sprite from '../../../images/sprite.svg';
import backgrounds from '../../../images/bgFolder/backgrounds.json';
import { updateBoard } from 'redux/content/content-operations';

import BgComponent from '../AddBoard/bgComponent';

const EditBoard = ({ handleClose, title, boardTitle, boardId, boardBgr }) => {
  const [inputValue, setInputValue] = useState(boardTitle);
  const [value, setValue] = useState('icon-dashbordicon1');
  const [bground, setBground] = useState(boardBgr);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const hundleSubmit = event => {
    event.preventDefault();

    const data = {
      title: inputValue,
      icon: value,
      background: bground,
    };

    dispatch(updateBoard({ boardId, data }));

    if (boardTitle !== data.title) {
      navigate(`/home/${data.title}`, { replace: true });
    }

    handleClose();
  };

  const onClickOnBg = value => {
    setBground(value);
  };

  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <Wrap>
      <Form onSubmit={hundleSubmit}>
        <Title>{title}</Title>
        <Field
          type="text"
          name="title"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Label id="my-radio-groupIcon">
          Icons
          <Priority role="group" aria-labelledby="my-radio-groupIcon">
            <InputSvg
              id="project"
              type="radio"
              name="radio"
              value="icon-dashbordicon1"
              checked={value === 'icon-dashbordicon1' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="project">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-dashbordicon1'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="star"
              type="radio"
              name="radio"
              value="icon-star"
              checked={value === 'icon-star' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="star">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-star'}></use>
              </SSvg>
            </LabelSvg>

            <InputSvg
              id="loading"
              type="radio"
              name="radio"
              value="icon-loading-spin"
              checked={value === 'icon-loading-spin' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="loading">
              <SSvg width="18" height="18" value="icon-loading-spin">
                <use href={sprite + '#icon-loading-spin'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="puzle"
              type="radio"
              name="radio"
              value="icon-puzzle-piece"
              checked={value === 'icon-puzzle-piece' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="puzle">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-puzzle-piece'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="container"
              type="radio"
              name="radio"
              value="icon-container"
              checked={value === 'icon-container' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="container">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-container'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="lightning"
              type="radio"
              name="radio"
              value="icon-lightning"
              checked={value === 'icon-lightning' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="lightning">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-lightning'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="colors"
              type="radio"
              name="radio"
              value="icon-colors"
              checked={value === 'icon-colors' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="colors">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-colors'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="hexagon"
              type="radio"
              name="radio"
              value="icon-hexagon"
              checked={value === 'icon-hexagon' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="hexagon">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-hexagon'}></use>
              </SSvg>
            </LabelSvg>
          </Priority>
        </Label>

        <Label id="my-radio-groupImage">
          Background
          <Bgpriority role="group" aria-labelledby="my-radio-groupImage">
            <LabelBlockSvg>
              <input
                type="radio"
                name="radio"
                value="649f40cdcaf11c74bb222222"
                onClick={e => onClickOnBg(e.target.value)}
              />
              <BlockSvg width="28" height="28">
                <use href={sprite + '#icon-block'}></use>
              </BlockSvg>
            </LabelBlockSvg>
            {backgrounds.map(bg => {
              return (
                <>
                  <BgComponent
                    key={bg._id}
                    bg={bg}
                    _id={bg._id}
                    onClick={onClickOnBg}
                  />
                </>
              );
            })}
          </Bgpriority>
        </Label>

        <Button type="submit" onSubmit={hundleSubmit}>
          <IconPlus width="28" height="28">
            <use href={sprite + '#icon-plus-black'}></use>
          </IconPlus>
          {/* {butName} */}
          Edit
        </Button>
        <CloseBtn onClick={handleClose}>
          <CloseIcon width="18" height="18">
            <use href={sprite + '#icon-close'}></use>
          </CloseIcon>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};

export default EditBoard;
