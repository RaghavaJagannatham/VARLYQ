import './App.css';
import PrimarySearchAppBar from "./Header";
import InteractiveList from "./Sidebar";
import BasicTable from "./Table";
import Model from "./model"

function App() {
  return (
    <div className="App">
      
      <PrimarySearchAppBar />
      <Model />
      <InteractiveList />
      <BasicTable />
      
    </div>
  );
}

export default App;
