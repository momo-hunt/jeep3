export const numberKoma = (a) => {
  let v = a.toFixed(2);
  v = new Intl.NumberFormat("id-ID").format(v);
  //   console.log(v);
  return v;
};

export const rupiah = (a) => {
  let v = new Intl.NumberFormat("id-ID").format(a);
  //   console.log(v);
  return v;
};
