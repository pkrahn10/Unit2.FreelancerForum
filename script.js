// Names of people in the forum
const names = ["LeBron", "Ja'marr", "Joe", "Tee", "Ochocinco"];
// Occupations of the people
const occupations = ["Legend", "GOAT", "Icon", "MVP", "CEO"];
// Cost of each person
const prices = [23, 1, 9, 5, 85];

const getAverage = () => {
  const total = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  return (total / freelancers.length).toFixed(2);
};

const avg = document.querySelector("#averagePrice");

// freelancers that will always appear first when you open in browser
const freelancers = [
  { name: "LeBron", occupation: "GOAT", price: 23 },
  { name: "Ja'marr", occupation: "Icon", price: 1 },
];
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];

  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  const price = prices[Math.floor(Math.random() * prices.length)];

  freelancers.push({ name, occupation, price });
}
function render() {
  const nameList = document.querySelector("#freelancers");
  const nameElements = freelancers.map((freelancer) => {
    const nameElement = document.createElement("li");
    nameElement.classList.add(
      freelancer.name,
      freelancer.occupation,
      freelancer.price
    );
    nameElement.innerText = `${freelancer.name} ${freelancer.occupation} ${freelancer.price}`;
    return nameElement;
  });
  // avg.replaceChildren(getAverage());
  nameList.replaceChildren(...nameElements);
}
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  render();
  avg.replaceChildren(getAverage());
}, 1000);

render();
