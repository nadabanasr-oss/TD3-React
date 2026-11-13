import Destination from "../Destination/Destination";
import style from "./Destinations.module.css";

import bali from "../../assets/bali.jpg";
import rome from "../../assets/Rome.jpg";
import santorini from "../../assets/santorini.jpg";

function Destinations() {
    return (
        <section className={style.container}>
            <h1 className={style.title}>Nos destinations</h1>

            <div className={style.destinations}>
                <Destination
                    image={santorini}
                    titre="Santorin"
                    pays="Grèce"
                    description="Découvrez les magnifiques paysages des îles grecques."
                    prix="1200"
                />

                <Destination
                    image={bali}
                    titre="Bali"
                    pays="Indonésie"
                    description="Découvrez les plages et la nature magnifique de Bali."
                    prix="1800"
                />

                <Destination
                    image={rome}
                    titre="Rome"
                    pays="Italie"
                    description="Explorez les monuments historiques de la ville de Rome."
                    prix="950"
                />
            </div>
        </section>
    );
}

export default Destinations;