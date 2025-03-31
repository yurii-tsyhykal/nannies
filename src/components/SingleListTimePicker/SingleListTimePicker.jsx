import { appointmentStyles } from './appointmentStyles';
import { useState } from 'react';
import Select, { components } from 'react-select';
import dayjs from 'dayjs';
import icons from '/images/sprite.svg';

const createTimeSlots = (startHour, endHour, stepMinutes) => {
  const options = [];
  const startTime = dayjs().hour(startHour).minute(0).second(0);
  const endTime = dayjs().hour(endHour).minute(0).second(0);

  let currentTime = startTime;
  while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
    const formattedValue = currentTime.format('HH:mm');
    const formattedLabel = currentTime.format('HH : mm');
    options.push({ value: formattedValue, label: formattedLabel });
    currentTime = currentTime.add(stepMinutes, 'minute');
  }
  return options;
};

const timeOptions = createTimeSlots(9, 18, 30);

const ControlWithIcon = ({ children, ...props }) => (
  <components.Control {...props}>
    {children}
    {/* <BiTime
      style={{
        color: 'var(--black)',
        width: '20px',
        height: '20px',
      }}
    /> */}
    <svg
      width={20}
      height={20}
      style={{
        stroke: 'var(--black)',
        fill: 'transparent',
        width: '20px',
        height: '20px',
      }}
    >
      <use href="/images/sprite.svg#clock"></use>
    </svg>
  </components.Control>
);

const MenuListWithTitle = props => (
  <components.MenuList {...props}>
    <p
      style={{
        paddingLeft: '16px',
        textAlign: 'start',
      }}
    >
      Meeting time
    </p>
    {props.children}
  </components.MenuList>
);

const SingleListTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <Select
      value={selectedTime}
      onChange={setSelectedTime}
      options={timeOptions}
      styles={appointmentStyles}
      components={{ Control: ControlWithIcon, MenuList: MenuListWithTitle }}
      placeholder="00 : 00"
      isSearchable={false}
    />
  );
};

export default SingleListTimePicker;
