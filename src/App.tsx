import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar, { ContentItem } from "./components/Sidebar";
import ContentViewer from "./components/ContentViewer";
import "./App.css";

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <div className="app">
      <Header title="My Reading Room" />
      <div className="main">
        <Sidebar onSelectItem={setSelectedItem} />
        <ContentViewer selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default App;
