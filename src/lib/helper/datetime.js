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

export const tanggalIndo = (p) => {
  let d = new Date(p);
  let dd = d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  // console.log(dd);
  // return "13 Jan 2023";
  return dd;
};

export const jamIndo = (p) => {
  let d = new Date(p);
  let dd = d.getTime() - 60000 * 25;
  let d3 = new Date(dd);
  let d2 = d3.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  // console.log(d2);
  // return "10:01";
  return d2;
};

export const tanggalIndoFull = (p) => {
  let d = new Date(p);
  let dd = d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  // console.log(dd);
  // return "13 Jan 2023";
  return dd;
};

export const dayAgo = (d) => {
  let n1 = new Date();
  let d1 = new Date(d);

  let yearAgo = n1.getFullYear() - d1.getFullYear();
  let monthAgo = n1.getMonth() - d1.getMonth();
  let dayAgo = n1.getDate() - d1.getDate();
  let hourAgo = n1.getHours() - d1.getHours();

  if (yearAgo > 0) {
    return yearAgo + " tahun lalu";
  } else if (monthAgo > 0) {
    return monthAgo + " bulan lalu";
  } else if (dayAgo > 0) {
    return dayAgo + " hari lalu";
  } else if (hourAgo > 0) {
    return hourAgo + " jam lalu";
  } else {
    return "beberapa saat lalu";
  }
};

export const dateHalf = (f, b) => {
  b = new Date(b);

  let opt = {};
  if (f == "bulan") {
    opt = { month: "short" };
  } else if (f == "tanggal") {
    opt = { day: "2-digit" };
  } else if (f == "tahun") {
    opt = { year: "numeric" };
  } else {
    opt = null;
  }

  let v = new Intl.DateTimeFormat("id-ID", opt).format(b);
  // console.log(v);
  // return "Jan";
  return v;
};
