import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.blue,
  primaryDark: defaultColors.blueDark,
  font: '#dddddd',
  fontDark: '#8a8a8a',
  background: '#29282A',
  mainBackground: '#1E1E1F',
  border: '#323234',
  hover: defaultColors.red,
  shadow: defaultColors.gray + '33',
};

export default {
  colors: colors,
};
