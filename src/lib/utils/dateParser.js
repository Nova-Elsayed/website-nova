export const simpleGermanDate = (date) => {
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return newDate.toLocaleDateString("de-DE", options);
};
