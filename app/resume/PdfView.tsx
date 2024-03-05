"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfView = (props: any) => {
  const [numPages, setNumPages] = useState<number>(2);
  const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  return (
    <>
      <Nav pageNumber={pageNumber} numPages={numPages} />
      <div hidden={loading} className="flex items-center justify-center ">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="relative h-[calc(100vh - 64px)] px-2 py-24 text-gray-400 hover:text-gray-50 focus:z-20 mx-4"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-10 w-10" aria-hidden="true" />
        </button>

        <div className="h-full flex justify-center">
          <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            renderMode="canvas"
            className=""
          >
            <Page
              className=""
              key={pageNumber}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={onPageLoadSuccess}
              onRenderError={() => setLoading(false)}
              width={Math.max(pageWidth * 0.6, 390)}
            />
          </Document>
        </div>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages!}
          className="relative h-[calc(100vh - 64px)] px-2 py-24 text-gray-400 hover:text-gray-50 focus:z-20 mx-4"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};

function Nav({
  pageNumber,
  numPages,
}: {
  pageNumber: number;
  numPages: number;
}) {
  return (
    <nav className=" flex justify-center items-center w-full">
      <div className="rounded-2xl  text-white p-2 my-4 ">
        <span className="text-gray-400">Page: </span>
        <span>{pageNumber}</span>
        <span className="text-gray-400"> / {numPages}</span>
      </div>
    </nav>
  );
}

export default PdfView;
