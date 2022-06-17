import React from "react";
import { CardStarShipStyle } from "./styles";
import Button from "../button";
import Rating from "../rating";

const CardStarShip = ({ starship }) => {
    console.log(starship);
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
                    <div className="starship-info__manufacture">
                        Manufacture - {starship.manufacturer}
                    </div>
                    <div className="starship-info__model">
                        Model - {starship.model}
                    </div>
                    <div className="starship-info__class">
                        Class - {starship.starship_class}
                    </div>
                    <Rating rating={starship.hyperdrive_rating} />
                </div>
                <div className="starship-action">
                    <Button size={16} color="outline-primary">
                        More Info
                    </Button>
                </div>
            </div>
        </CardStarShipStyle>
    );
};
export default CardStarShip;
