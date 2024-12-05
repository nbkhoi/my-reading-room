import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./PdfViewer.css";
import { ContentItem } from "./Sidebar";

const PdfViewer: React.FC<ContentItem> = (selectedItem) => {
    return (

        <div className="viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={selectedItem.url}
                    defaultScale={1}
                />
            </Worker>
        </div>

    );

}

export default PdfViewer;
