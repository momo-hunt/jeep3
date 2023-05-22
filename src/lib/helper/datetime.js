export const dateForm = (p) => {
  let d = new Date();
  let dd = d.toLocaleDateString("fr-CA");
  return dd;
};

export const timeForm = (p) => {
  let d = new Date();
  let dd = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
  });
  //   console.log(dd + ":00");
  return dd.toString() + ":00";
};
