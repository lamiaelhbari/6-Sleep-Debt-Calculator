// Challenge 4 : Sleep Debt Calculator --------->

// 1- getSleepHours :
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 20;
      break;
    case "tuesday":
      return 9;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 0;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 9;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return "Invalid Day !";
      break;
  }
};
//  console.log(getSleepHours('tday'));

// 2- getActualSleepHours :
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};
// console.log(getActualSleepHours());

// 3- getIdealSleepHours :
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
//  console.log(getIdealSleepHours());

// 4- calculateSleepDebt :
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  // 5- afficher le résultat :
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  } else {
    console.log("You should get some rest.");
  }
};
calculateSleepDebt();
