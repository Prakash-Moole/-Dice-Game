if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
  let p1 = Math.floor(Math.random() * 6) + 1;
  let p2 = Math.floor(Math.random() * 6) + 1;
  let arr = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  document.getElementById("p1dice").setAttribute("src", arr[p1 - 1]);
  document.getElementById("p2dice").setAttribute("src", arr[p2 - 1]);
}
