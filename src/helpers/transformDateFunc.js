const padStart = value => {
  return String(value).padStart(2, '0');
};

export const transformDate = bd => {
  const date = new Date(bd);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${padStart(day)}.${padStart(month)}.${year}`;
};

export const getBirthdayString = birthday => {
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()}`;
};
