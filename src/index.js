import "./app.scss";
const printTeam = (teamName, coachName, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coachName}`);
  const player = players.join(",");
  console.log(player);
};
