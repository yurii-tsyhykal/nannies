export const appointmentStyles = {
  container: styles => ({
    ...styles,
    display: 'inline-block',
    maxHeight: '52px',
    maxWidth: '232px',
    '&:focus-visible': {
      outline: 'transparent',
    },
  }),
  control: (styles, state) => ({
    ...styles,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: state.selectProps.error
      ? 'var(--error)'
      : 'var(--input-singIn)',
    '&:is(:hover, :focus )': {
      transition: 'none',
      borderColor: state.selectProps.error
        ? 'var(--error)'
        : 'var(--input-singIn)',
    },
    boxShadow: state.isFocused && 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    maxHeight: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 18px',
    minHeight: '52px',
  }),
  valueContainer: styles => ({
    ...styles,
    gridTemplateRows: '45px',
    padding: 0,
    alignItems: 'center',
    flex: 1,
    overflow: 'hidden',
  }),
  singleValue: styles => ({
    ...styles,
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25,
    color: 'var(--black)',
    margin: 0,
  }),
  placeholder: styles => ({
    ...styles,
    margin: 0,
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25,
    color: 'var(--black)',
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  menu: styles => ({
    ...styles,
    right: 0,
    backgroundColor: 'white',
    fontWeight: '500',
    lineHeight: 1.5,
    maxWidth: '151px',
    borderRadius: '12px',
    marginTop: '8px',
    boxShadow: '0 20px 69px 0 rgba(0, 0, 0, 0.07)',
    maxHeight: '250px',
  }),
  menuList: styles => ({
    ...styles,
    zIndex: '10',
    maxHeight: '180px',
    maxWidth: '151px',
    textAlign: 'center',
    padding: '16px 0px',
    '::-webkit-scrollbar': {
      width: '0px',
      height: '0px',
      background: 'transparent',
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }),
  option: (styles, state) => ({
    ...styles,
    lineHeight: 1.25,
    padding: '10px 32px',
    cursor: 'pointer',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    '&:is(:hover, :focus)': {
      backgroundColor: 'transparent',
    },
    color: state.isSelected ? 'var(--black)' : 'rgba(17, 16, 28, 0.3)',
    '&:hover': {
      color: 'var(--black)',
    },
  }),
};
