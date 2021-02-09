const players = [
  { name: "Albert", points: 1955 },
  { name: "Isaac", points: 1727 },
  { name: "Marie", points: 1934 },
  { name: "Galileo", points: 1642 },
  { name: "Johannes", points: 1630 },
];
const ele = document.getElementById("main");
const scoreEle = document.getElementById("score");
const displayList = (players) => {
  // sort array first
  players.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  console.log(players);
  // append element in <div>
  players.forEach((a, index) => {
    const child = document.createElement("INPUT");
    child.setAttribute("type", "checkbox");
    child.value = a.name;
    child.id = index;
    const label = document.createElement("LABEL");
    label.setAttribute("for", index);
    label.innerText = a.name;
    ele.appendChild(child);
    ele.appendChild(label);
  });
  // append total score
  const total = players.reduce((acc, curr) => acc + curr.points, 0);
  console.log(total);
  const score = document.createElement("P");
  score.innerText = total;

  scoreEle.appendChild(score);
};
displayList(players);
