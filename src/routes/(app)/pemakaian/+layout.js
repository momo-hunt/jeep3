export const load = () => {
  let fields = {
    no_spj: {
      label: "No SPJ",
      type: "text",
      name: "no_spj",
      placeholder: "Isi jika ada!",
    },

    sopir: {
      label: "Sopir",
      name: "sopir",
      option: [
        { label: "Santoso", value: 1 },
        { label: "Askep", value: 2 },
        { label: "Lainnya", value: 3 },
      ],
    },

    tujuan: {
      label: "Tujuan",
      type: "text",
      name: "tujuan",
      placeholder: "Tempat tujuan.",
    },

    keperluan: {
      label: "Keperluan",
      type: "text",
      name: "keperluan",
      placeholder: "Contoh : Dinas antar...",
    },

    tanggal_berangkat: {
      label: "Tanggal",
      type: "date",
      name: "tanggal_berangkat",
    },

    tanggal_kembali: {
      label: "Tanggal",
      type: "date",
      name: "tanggal_kembali",
    },

    jam_berangkat: {
      label: "Jam",
      type: "time",
      name: "jam_berangkat",
    },

    jam_kembali: {
      label: "Jam",
      type: "time",
      name: "jam_kembali",
    },

    km_awal: {
      label: "Km Awal",
      type: "number",
      name: "km_awal",
    },

    km_akhir: {
      label: "Km Akhir",
      type: "number",
      name: "km_akhir",
    },

    km_pemakaian: {
      label: "Km Pemakaian",
      type: "number",
      name: "km_pemakaian",
      readonly: true,
    },
  };
  return { fields };
};
