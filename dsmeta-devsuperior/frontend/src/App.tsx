import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Table />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
