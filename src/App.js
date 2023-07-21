import "./App.css";
import header from "./components/header/header";
import Main from "./components/main/main";
//import footer from "./components/footer/footer";
import data from "./data.json";
import SelectedBeast from "./components/selectedbeast";

function App() {
  const [modalShow, setModalShow] = useState(false); // controls if modal is visable/renders
  const [modalData, setmodalData] = useState({}); // contrals what data is used in the function we send it.

  function handleModal(beastObj) {
    setModalShow(!modalShow); // setting to true or false
    setmodalData(beastObj); // we ues this to pass the selected besats obj down to the selectedBeast component
  }

  return (
    <div className="App">
      <Main data={data} />
      {/* look up short circuiting for how this works. we ony need to see if modalShow is true  */}
      {modalShow && <SelectedBeast modalData={modalData} />}
    </div>
  );
}

export default App;
