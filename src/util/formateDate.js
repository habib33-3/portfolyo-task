const formateDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = ("" + date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
};

export default formateDate;
