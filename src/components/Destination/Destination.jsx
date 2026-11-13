import { useState } from "react";
import style from "./Destination.module.css";

function Destination({ image, titre, pays, description, prix }) {
    const [afficher, setAfficher] = useState(false);
    const [favori, setFavori] = useState(false);

    function swap() {
        setAfficher(!afficher);
    }

    return (
        <article className={style.card}>
            <div style={{ position: "relative" }}>
                <img src={image} alt={titre} className={style.image} />
                <button
                    type="button"
                    onClick={() => setFavori(!favori)}
                    aria-label={favori ? `Retirer ${titre} des favoris` : `Ajouter ${titre} aux favoris`}
                    aria-pressed={favori}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        color: favori ? "red" : "white",
                        background: "none",
                        border: "none",
                        fontSize: "30px",
                        cursor: "pointer",
                        textShadow: "0 1px 4px black",
                    }}
                >
                    ♥
                </button>
            </div>

            <div className={style.content}>
                <h2>{titre}</h2>
                <p>{pays}</p>
                {afficher && <p>{description}</p>}
                <p className={style.prix}>{prix} DT</p>

                <button type="button" onClick={swap}>
                    {afficher ? "Masquer" : "Afficher"}
                </button>
            </div>
        </article>
    );
}

export default Destination;