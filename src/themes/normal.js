/**
 * Default theme object required for styled towards styled-components.
 */
export const colors = {
  border: '#B7BBBD',
  layoutBg: '#F7F7F8',
  primaryBtnBg: '#0464dd',
  primaryBtnColor: '#fff',
  primaryBtnDisabledBg: '#f3f3f3',
  primaryBtnDisabledColor: 'grey',
  danger: '#BF223C',
  success: '#46A46C',
  listCellBg: '#E0E3F0',
  listCellColor: '#000000',
  listCellHoverBg: '#C8CDE5',
  primaryBtnHoverBg: '#045bc7',
  toggleSwitchBg: '#045bc7',
  toggleBg: '#bebebe',
  navbarBg: '#000000',
  navbarColor: '#F7F7F8',
  textColor: '#000000',
  textDark: '#000',
  modalOverlayBg: '#000',
  modalBg: '#fff',
  inputPrefixBg: '#fff',
};

export default {
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  space: [0, 2, 4, 8, 12, 16, 24, 30, 26, 48, 64, 96, 128],
  sizes: [0, 4, 8, 20, 40, 100, 200, 300, 500],
  fontSizes: [10, 12, 14, 16, 18, 24, 30, 36, 72],
  textStyles: {
    secondary: {
      cursor: 'pointer',
      textTransform: 'capitalize',
      '&:hover': {
        color: colors.success,
        fontWeight: 'bold',
      },
      '&[data-selected=true]': {
        color: colors.primaryBtnBg,
        fontWeight: 'bold',
      },
    },
  },
  buttons: {
    primary: {
      backgroundColor: colors.primaryBtnBg,
      color: colors.primaryBtnColor,
      borderStyle: 'none',
      borderRadius: 3,
      borderWidth: '2px',
      '&:disabled': {
        backgroundColor: colors.primaryBtnDisabledBg,
        color: colors.primaryBtnDisabledColor,
        borderStyle: 'solid',
      },
      '&:hover': {
        backgroundColor: colors.primaryBtnHoverBg,
      },
    },
    danger: {
      backgroundColor: colors.danger,
      color: colors.primaryBtnColor,
      borderStyle: 'none',
      borderRadius: 3,
      borderWidth: '2px',
      '&:disabled': {
        backgroundColor: colors.primaryBtnDisabledBg,
        color: colors.primaryBtnDisabledColor,
        borderStyle: 'solid',
      },
      '&:hover': {
        backgroundColor: colors.primaryBtnHoverBg,
      },
    },
  },
  fontWeights: {
    regular: 400,
    bold: 700,
    extraBold: 900,
  },
  radii: [0, 1, 2, 4, 8, 16],
  colors,
};
