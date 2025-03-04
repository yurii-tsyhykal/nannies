function ageCalculate(date) {
  const birthDate = new Date(date);
    const currentDate = new Date();
    
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let ageInYears = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    ageInYears -= 1;
  }

  return ageInYears;
}

export default ageCalculate;
