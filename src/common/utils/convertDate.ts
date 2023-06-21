export const convertDate = (str: string) => {
  const data = new Date(str);
  const month =
    (data.getMonth() + 1).toString().length === 1
      ? "0" + (data.getMonth() + 1)
      : data.getMonth() + 1;
  return data.getDate() + "." + month + "." + data.getFullYear();
};
