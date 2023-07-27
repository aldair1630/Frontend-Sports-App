import React from "react";
import style from "./styles/Accordions.module.css";
import Accordion from "./Accordion";

function Soccer() {
  return (
    <div
      className={`accordion accordion-flush ${style.accordion}`}
      id="accordionFlushExample"
      style={{ backgroundColor: "#22252bff" }}
    >
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header ">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            style={{
              background: "#22252bff",
            }}
          >
            Soccer
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soccer;
