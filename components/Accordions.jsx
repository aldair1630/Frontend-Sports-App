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
      {/* Soccer */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSoccer"
            aria-expanded="false"
            aria-controls="flush-collapseSoccer"
            style={{ background: "#22252bff" }}
          >
            Soccer
          </button>
        </h2>
        <div
          id="flush-collapseSoccer"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            <Accordion />
          </div>
        </div>
      </div>

      {/* Tennis */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTennis"
            aria-expanded="false"
            aria-controls="flush-collapseTennis"
            style={{ background: "#22252bff" }}
          >
            Tennis
          </button>
        </h2>
        <div
          id="flush-collapseTennis"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for Tennis section */}
          </div>
        </div>
      </div>

      {/* Basketball */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseBasketball"
            aria-expanded="false"
            aria-controls="flush-collapseBasketball"
            style={{ background: "#22252bff" }}
          >
            Basketball
          </button>
        </h2>
        <div
          id="flush-collapseBasketball"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for Basketball section */}
          </div>
        </div>
      </div>

      {/* Volleyball */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseVolleyball"
            aria-expanded="false"
            aria-controls="flush-collapseVolleyball"
            style={{ background: "#22252bff" }}
          >
            Volleyball
          </button>
        </h2>
        <div
          id="flush-collapseVolleyball"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for Volleyball section */}
          </div>
        </div>
      </div>

      {/* American Football */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseAmericanFootball"
            aria-expanded="false"
            aria-controls="flush-collapseAmericanFootball"
            style={{ background: "#22252bff" }}
          >
            American Football
          </button>
        </h2>
        <div
          id="flush-collapseAmericanFootball"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for American Football section */}
          </div>
        </div>
      </div>

      {/* Baseball */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseBaseball"
            aria-expanded="false"
            aria-controls="flush-collapseBaseball"
            style={{ background: "#22252bff" }}
          >
            Baseball
          </button>
        </h2>
        <div
          id="flush-collapseBaseball"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for Baseball section */}
          </div>
        </div>
      </div>

      {/* Handball */}
      <div className={`accordion-item ${style.accordionItem}`}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed text-white ${style.accordionButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseHandball"
            aria-expanded="false"
            aria-controls="flush-collapseHandball"
            style={{ background: "#22252bff" }}
          >
            Handball
          </button>
        </h2>
        <div
          id="flush-collapseHandball"
          className="accordion-collapse collapse text-white"
          data-bs-parent="#accordionFlushExample"
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className="accordion-body">
            {/* Content for Handball section */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soccer;
