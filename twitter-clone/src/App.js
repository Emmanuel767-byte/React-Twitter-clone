import React from 'react'
import Sidebar from './Components/Sidebar-F/Sidebar'
import './App.css';
import Feed from './Components/Feed-F/Feed'
import Widgets from "./Components/Widgets-F/Widgets.jsx"

function App() {
  return (
    <div className="App">
      {/* SideBar */}
          <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
