import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import SearchBar from "./components/SearchBar.js";
import JobCard  from "./components/JobCard.js";
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar/>
      <JobCard/>
      
    </div>
  );
}

export default App;
