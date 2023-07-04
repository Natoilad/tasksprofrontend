// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export const ButtonDatePicker = () => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <DatePicker
//       slots={{ field: ButtonField, ...props.slots }}
//       slotProps={{ field: { setOpen } }}
//       {...props}
//       open={open}
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//     />
//   );
// };
// import icon from '../../images/sprite.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Btn } from './ButtonDatePicker.styled';
function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Btn
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.(prev => !prev)}
    >
      {label ?? 'Pick a date'}
    </Btn>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

export default function PickerWithButtonField({ setDeadline, date }) {
  const [value, setValue] = React.useState(null);
  const setDate = newValue => {
    if (dayjs(newValue) < Date.now()) {
      toast.warning('Please select a date in future', {
        position: 'top-center',
      });
      // alert('Please select a date in future');
      return;
    }
    setValue(newValue);
    setDeadline(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <ButtonDatePicker
          label={
            value === null
              ? `Today, ${dayjs(date).format('MMMM DD')} `
              : ` ${dayjs(value).format('MMMM DD')}`
          }
          value={value}
          onChange={setDate}
        />
      </Stack>
    </LocalizationProvider>
  );
}
