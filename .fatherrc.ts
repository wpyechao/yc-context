const options = {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'dragonPageContext',
    globals: {
      react: 'React',
    },
  },
};

export default options;
