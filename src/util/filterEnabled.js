const filterEnabled = (array) => {
  return array?.filter((item) => item.enabled === true);
};

export default filterEnabled