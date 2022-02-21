const axios = require("axios");

async function fetchPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  return data;
};

const getPeople = async () => {
  const peopleData = await fetchPeople();
  return peopleData;
};

const getPeopleById = async (id) => {
  if (!id) throw "Error: You must provide an id to search for";
  if (typeof id !== "string") throw "Error: id must be a string";
  if (id.trim().length === 0)
    throw "Error: id cannot be an empty string or just spaces";
  if (Number(id) < 0) throw "Id should be a positive whole number";

  const peopleData = await fetchPeople();
  const person = peopleData.find(personObj => personObj.id === Number(id));
  if (!person) throw "Person can not be found";
  return person;
};

module.exports = { getPeople, getPeopleById };