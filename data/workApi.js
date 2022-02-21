const axios = require("axios");

async function fetchWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  return data;
}

const getWork = async () => {
  const workData = await fetchWork();
  return workData;
};

const getWorkById = async id => {
  if (!id) throw "Error: You must provide an id to search for";
  if (typeof id !== "string") throw "Error: id must be a string";
  if (id.trim().length === 0)
    throw "Error: id cannot be an empty string or just spaces";
  if (Number(id) < 0) throw "Id should be a positive whole number";

  const workData = await fetchWork();
  const work = workData.find(workObj => workObj.id === Number(id));
  if (!work) throw "Work can not be found";
  return work;
};

module.exports = { getWork, getWorkById };
