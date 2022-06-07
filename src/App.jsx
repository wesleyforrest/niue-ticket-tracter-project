import "./App.scss";
import TrackerCard from "./components/TrackerCard/TrackerCard";
import team from "./data/team";

function App() {
  console.log(team);

  return (
    <div className="App">
      <section className="card-container">
        <h1>Ticket Tracker</h1>
        <TrackerCard
          name={team[0].name}
          role={team[0].role}
          className="tracker-card"
        />
      </section>
    </div>
  );
}

export default App;
