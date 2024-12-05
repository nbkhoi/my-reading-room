import React from "react";
import "./Sidebar.css";
export interface ContentItem {
    id: number;
    title: string;
    type: string;
    url: string;
  }

const Sidebar: React.FC<{ onSelectItem: (item: ContentItem) => void }> = ({ onSelectItem }) => {
    // Load audiobook list
    const [audiobooks, setAudiobooks] = React.useState<ContentItem[]>([]);
    React.useEffect(() => {
      fetch("/audiobooks.json")
        .then((response) => response.json())
        .then((data) => setAudiobooks(data));
    }, []);
    // Load ebook list
    const [ebooks, setEbooks] = React.useState<ContentItem[]>([]);
    React.useEffect(() => {
      fetch("/ebooks.json")
        .then((response) => response.json())
        .then((data) => setEbooks(data));
    }, []);
  return (
    <div className="sidebar">
      <h2>My shelf</h2>
      <h3>📄 eBooks</h3>
      <ul>
        {ebooks.map((item, index) => (
          <li key={index} onClick={() => onSelectItem(item)}>
            {item.title}
          </li>
        ))}
      </ul>
      <h3>🎧 Audiobooks</h3>
      <ul>
        {audiobooks.map((item, index) => (
          <li key={index} onClick={() => onSelectItem(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
