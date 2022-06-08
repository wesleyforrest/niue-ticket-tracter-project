import "./App.scss";
import TrackerCard from "./components/TrackerCard/TrackerCard";
import team from "./data/team";

function App() {
  const ticketCardJSX = team.map((person) => {
    return <TrackerCard name={person.name} role={person.role} />;
  });
  console.log(ticketCardJSX);
  return (
    <div className="App">
      <section className="header">
        <h1>Ticket Tracker</h1>
      </section>
      <section className="card-container">{ticketCardJSX}</section>
    </div>
  );
}

export default App;
