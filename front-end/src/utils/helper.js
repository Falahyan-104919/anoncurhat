import moment from 'moment';

const calculateAge = (dateOfBirthString) => {
  const dob = new Date(dateOfBirthString);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    age--;
  }

  return age;
};

const capitalizeGender = (str) => {
  return str[0].toUpperCase() + str.substring(1) + ', ';
};

const getMoment = (time) => {
  return moment(time).fromNow();
};

export { calculateAge, capitalizeGender, getMoment };
