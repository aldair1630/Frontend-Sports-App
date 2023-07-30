import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchsByCountries } from "../redux/actions";
import style from "./styles/Accordion.module.css";

function Accordion(props) {
  const dispatch = useDispatch();
  const matchsByCountries = useSelector((state) => state.matchsByCountries);
  const [showAll, setShowAll] = useState(false); // Estado para alternar entre mostrar todos o solo los primeros 20

  useEffect(() => {
    dispatch(getMatchsByCountries());
  }, [dispatch]);

  // Dependiendo de si se muestra todo o no, se filtran los elementos
  const visibleCountries = showAll
    ? matchsByCountries
    : matchsByCountries.slice(0, 10);

  return (
    <div>
      {visibleCountries.map((countries, index) => (
        <div
          key={index}
          className={`accordion accordion-flush ${style.accordion}`}
          id={`accordionFlushExample-${index}`}
          style={{ backgroundColor: "#22252bff" }}
        >
          <div className={`accordion-item ${style.accordionItem}`}>
            <h2 className="accordion-header ">
              <button
                className={`accordion-button collapsed text-white ${style.accordionButton} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse-${index}`}
                style={{
                  background: "#22252bff",
                }}
              >
                <img
                  src={countries.image}
                  alt={countries.image}
                  className={style.imgCountry}
                />
                {countries.name}
              </button>
            </h2>
            <div
              id={`flush-collapse-${index}`}
              className="accordion-collapse collapse text-white"
              data-bs-parent={`#accordionFlushExample-${index}`}
              style={{ backgroundColor: "#22252bff" }}
            >
              <div className="accordion-body">Acordeon {index + 1}</div>
            </div>
          </div>
        </div>
      ))}
      {/* Botón para alternar entre mostrar todos o solo los primeros 20 */}
      <button
        className={style.viewMoreButton}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Ver menos" : "Ver más..."}
      </button>
    </div>
  );
}

export default Accordion;
