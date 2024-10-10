export const formatDate = (value: string) => {
  const date = new Date(value as string);

  return `
            ${date.getDate().toString().padStart(2, "0")}.${date.getMonth().toString().padStart(2, "0")}.${date.getFullYear()}${" "}
            ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
};
