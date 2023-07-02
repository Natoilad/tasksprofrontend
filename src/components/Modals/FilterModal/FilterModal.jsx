import icon from '../../../images/sprite.svg';
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import backgrounds from '../../../images/bgFolder/backgrounds.json';

import {
  Form,
  Field,
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
  BgImg,
} from './FilterModal.styled';
import { setFilter } from 'redux/filter/filter-slice';

const initialFormValues = { title: '' };

export const FilterModal = ({ handleClose, title }) => {
  const dispatch = useDispatch();
  const onFilter = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <Wrap>
        <Title>{title}</Title>
        <Formik initialValues={initialFormValues} onSubmit={() => {}}>
          <Form autoComplete="off">
            <Text>Backgrounds</Text>
            <ImgContainer role="group" aria-labelledby="bgimg-group">
              <label>
                <Field type="radio" name="bgicon" value="default" />
                <Svg>
                  <use href={icon + '#icon-block'}></use>
                </Svg>
              </label>
              {backgrounds.map(({ _id, bgIcons }) => (
                <label key={_id}>
                  <Field type="radio" name="bgicon" value="" />
                  <BgImg src={bgIcons} alt="" />
                </label>
              ))}
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
    </>
  );
};
