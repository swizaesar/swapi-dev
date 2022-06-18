import React from "react";
import { CardPlanetStyle } from "./styles";
import Button from "../button";

const CardPlanet = ({ planet }) => {
    return (
        <CardPlanetStyle>
            <img
                src="/images/planet-background.png"
                alt="Star Ship"
                className="im-fluid"
            />
            <div className="planet">
                <div className="planet-info">
                    <h3 className="planet-info__name">{planet.name}</h3>
                    <div className="planet-info__more">
                        Gravity - {planet.gravity}
                    </div>
                    <div className="planet-info__more">
                        Terrain - {planet.terrain}
                    </div>
                    <div className="planet-info__more">
                        Surface Water - {planet.surface_water}
                    </div>
                    <div className="planet-info__more">
                        Rotation Period - {planet.rotation_period}
                    </div>
                </div>
                <div className="planet-action">
                    <Button size={"16px"} color="outline-primary">
                        More Info
                    </Button>
                </div>
            </div>
        </CardPlanetStyle>
    );
};
export default CardPlanet;
