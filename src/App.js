import "./App.css";
import CustomHeader from "./components/CustomHeader.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GameListings from "./components/GameListings";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="App">
      <div className="header">
        <CustomHeader/>
      </div>
      <div className="listing">
         <GameListings/> </div>
      <div className="action">
        <AddButton/>
      </div>
    </div>
  );
}

export default App;
