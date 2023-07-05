import icon from '../../../images/sprite.svg';
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import backgrounds from '../../../images/bgFolder/backgrounds.json';

import { useTheme } from 'styled-components';

import {
  Form,
  FieldSvg,
  Wrap,
  CloseBtn,
  CloseIcon,
  Title,
  Span,
  LabelContainer,
  ShowAll,
  Text,
  Box,
  Svg,
  ImgContainer,
} from './FilterModal.styled';
import { setFilter } from 'redux/filter/filter-slice';
import BgComponent from '../AddBoard/bgComponent';
import { updateBoardEl } from 'redux/content/content-operations';
// import { ThemeProvider } from 'styled-components';

const initialFormValues = {};

export const FilterModal = ({
  handleClose,
  title,
  boardId,
  boardBgr,
  boardTitle,
}) => {
  const [bground, setBground] = useState(boardBgr);
  const dispatch = useDispatch();
  const theme = useTheme();

  const onClickOnBg = value => {
    setBground(value);

    const data = {
      title: boardTitle,
      background: bground,
    };

    console.log(data);
    dispatch(updateBoardEl({ boardId, data }));
  };

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  // const bgChange = event => {
  //   const data = {
  //     title: boardTitle,
  //     background: bground,
  //   };

  //   dispatch(updateBoardEl({ boardId, data }));
  // };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Wrap>
        <Title>{title}</Title>
        <Formik initialValues={initialFormValues} onSubmit={() => {}}>
          <Form autoComplete="off">
            <Text>Backgrounds</Text>
            <ImgContainer role="group" aria-labelledby="bgimg-group">
              <label>
                <FieldSvg
                  type="radio"
                  name="radio"
                  value="649f40cdcaf11c74bb222222"
                  onClick={e => onClickOnBg(e.target.value)}
                />
                <Svg>
                  <use href={icon + '#icon-block'}></use>
                </Svg>
              </label>
              {backgrounds.map(bg => {
                return (
                  <>
                    <BgComponent
                      key={bg._id}
                      bg={bg}
                      _id={bg._id}
                      // onChange={onClickOnBg}
                      onClick={onClickOnBg}
                    />
                  </>
                );
              })}
            </ImgContainer>
            <Box>
              <Text name="labelPriority">Label color</Text>
              <ShowAll>
                <input
                  type="radio"
                  value="all"
                  name="labelPriority"
                  onChange={onFilter}
                />
                <span value="all" />
                Show all
              </ShowAll>
            </Box>
            <LabelContainer role="group" aria-labelledby="label-group">
              <label>
                <input
                  theme={theme}
                  type="radio"
                  value="none"
                  name="labelPriority"
                  onChange={onFilter}
                />
                <Span value="without" />
                Without priority
              </label>
              <label>
                <input
                  type="radio"
                  value="low"
                  name="labelPriority"
                  onChange={onFilter}
                />
                <Span value="low" />
                Low
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  name="labelPriority"
                  onChange={onFilter}
                />
                <Span value="medium" />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="high"
                  name="labelPriority"
                  onChange={onFilter}
                />
                <Span value="high" />
                High
              </label>
            </LabelContainer>
          </Form>
        </Formik>
        <CloseBtn onClick={handleClose}>
          <CloseIcon>
            <use href={icon + '#icon-close'}></use>
          </CloseIcon>
        </CloseBtn>
      </Wrap>
      {/* </ThemeProvider> */}
    </>
  );
};
