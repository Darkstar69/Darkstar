import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SearchBox from "./components/SearchBox";
import Profile from "./components/Profile";

function App() {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <Navbar
        searchBoxOpen={searchBoxOpen}
        setSearchBoxOpen={setSearchBoxOpen}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
      {searchBoxOpen && (
        <SearchBox
          searchBoxOpen={searchBoxOpen}
          setSearchBoxOpen={setSearchBoxOpen}
        />
      )}

      {showProfile && (
        <Profile showProfile={showProfile} setShowProfile={setShowProfile} />
      )}
    </>
  );
}

export default App;
