import React from "react";
import { ContentItem } from "./Sidebar";

const AudiobookPlayer: React.FC<ContentItem> = (selectedItem) => (
  <div>
    <h2>Now Playing</h2>
    <h3>{selectedItem?.title}</h3>
    <audio controls>
      <source src={selectedItem?.url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

export default AudiobookPlayer;
