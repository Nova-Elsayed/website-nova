export const simpleGermanDate = (date: string | Date): string => {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return newDate.toLocaleDateString("de-DE", options);
};

export const simpleGermanDateWithTime = (date: string | Date): string => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(newDate);
};
