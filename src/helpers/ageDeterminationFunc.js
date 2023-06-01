export const ageDeterminationFunc = bd => {
  const now = new Date();
  const [day, month, year] = bd.split('.');
  const birthdate = new Date(year, month, day);

  const diff = now.getTime() - birthdate.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * (365.25 / 12))
  );

  let termin = '';

  if (years > 0) {
    termin = years === 1 ? 'year' : 'years';
  } else {
    termin = months === 1 ? 'month' : 'months';
  }

  const age = years ? `${years} ${termin}` : `${months} ${termin}`;

  return age;
};
