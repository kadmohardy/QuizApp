export const getPhone = function (phoneMasked: string) {
  return phoneMasked
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
    .replace(' ', '');
};

export const getDate = function (dateMasked: string) {
  const day = dateMasked.substr(0, 2);
  const month = dateMasked.substr(3, 2);
  const year = dateMasked.substr(6, 4);

  return new Date(year, month - 1, day);
};
