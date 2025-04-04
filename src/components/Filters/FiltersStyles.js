export const filterStyles = {
  container: styles => ({
    ...styles,
    maxWidth: '226px',
    marginBottom: '32px',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '1.11',
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'var(--background)',
    cursor: 'pointer',
    borderRadius: '14px',
    padding: '13px 18px',
    border: 0,
    boxShadow: state.isFocused && 'none',
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--main)',
    paddingTop: '2px',
    margin: 0,
  }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: 0,
    fill: 'var(--main)',
    color: 'var(--main)',
    '&:hover': {
      color: 'var(--main)',
    },
  }),
  menu: styles => ({
    ...styles,
    zIndex: '9',
    boxShadow: '0 20px 69px 0 rgba(0, 0, 0, 0.07);',
    borderRadius: '14px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  }),

  menuList: styles => ({ ...styles, padding: '14px 18px 18px 18px' }),
  option: (styles, { isFocused, isSelected, isDisabled }) => ({
    ...styles,
    padding: 0,
    color: !isSelected ? 'rgba(17, 16, 28, 0.3)' : 'var(--black)',
    backgroundColor: isFocused && 'transparent',
    cursor: isDisabled ? 'default' : 'pointer',
    fontWeight: 400,
    '&:hover': {
      color: 'var(--black)',
      transition: 'color var(--transition)',
    },

    '&:not(:last-of-type)': {
      marginBottom: '12px',
    },
  }),
};
