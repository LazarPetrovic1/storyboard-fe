import moment from "moment";

export const getId = () => crypto.randomUUID();
export const sortByDateDesc = (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated);
export const sortByDateAsc = (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated);
export const getRandomColour = () => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();

export const getDatesOfWeek = current => {
  const week = [];
  // Starting Monday not Sunday
  current.setDate((current.getDate() - current.getDay() + 1));
  for (let i = 0; i < 7; i++) {
      week.push(moment(new Date(current)).format("DD.MM.YYYY")); 
      current.setDate(current.getDate() + 1);
  }
  return week; 
}

export const getDatesOfMonth = (day) => {
  const month = moment(new Date(day)).format("DD.MM.YYYY").split(".")[1];
  const year = moment(new Date(day)).format("DD.MM.YYYY").split(".")[2];
  const date = new Date(parseInt(year), parseInt(month - 1), 1);
  const dates = [];
  while (date.getMonth() === parseInt(month - 1)) {
    dates.push(moment(new Date(date)).format("DD.MM.YYYY"));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}