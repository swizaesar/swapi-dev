import React from "react";
import { CardStarShipStyle } from "./styles";
import Button from "../button";
import Rating from "../rating";

const CardStarShip = ({ starship, action = () => {} }) => {
    return (
        <CardStarShipStyle>
            <img
                src="/images/starship-background.jpg"
                alt="Star Ship"
                className="im-fluid"
            />
            <div className="starship">
                <div className="starship-info">
                    <h3 className="starship-info__name">{starship.name}</h3>
                    <div className="starship-info__more">
                        Manufacture - {starship.manufacturer}
                    </div>
                    <div className="starship-info__more">
                        Model - {starship.model}
                    </div>
                    <div className="starship-info__more">
                        Class - {starship.starship_class}
                    </div>
                    <Rating rating={starship.hyperdrive_rating} />
                </div>
                <div className="starship-action">
                    <Button
                        onClick={() => action(starship.url)}
                        size={"16px"}
                        color="outline-primary"
                    >
                        More Info
                    </Button>
                </div>
            </div>
        </CardStarShipStyle>
    );
};
export default CardStarShip;
