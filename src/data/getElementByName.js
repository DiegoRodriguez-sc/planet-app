import data from "./data";

const getDataByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLowerCase();
  return data.filter((hero) => hero.name.toLowerCase().includes(name));
};

export default getDataByName;
