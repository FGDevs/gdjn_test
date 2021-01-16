const month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const dobFormatter = (date) => `${date.split("-")[2].substring(0,2)} ${month[Number(date.split("-")[1])-1]}`;
