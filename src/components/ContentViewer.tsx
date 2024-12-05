import React from "react";
import PdfViewer from "./PdfViewer";
import AudiobookPlayer from "./AudiobookPlayer";
import { ContentItem } from "./Sidebar";

const ContentViewer: React.FC<{ selectedItem: ContentItem | null }> = ({selectedItem}) => {
  if (!selectedItem) {
    return <div className="content-viewer">Select an item to view or play</div>;
  }

  return (
    <div className="content-viewer">
      {selectedItem.type === "pdf" ? (
        <PdfViewer {...selectedItem} />
      ) : (
        <AudiobookPlayer {...selectedItem} />
      )}
    </div>
  );
};

export default ContentViewer;
