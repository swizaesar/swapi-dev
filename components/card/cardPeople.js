import React from "react";
import { CardPeopleStyle } from "./styles";
import Button from "../button";

const CardPeople = ({ people, action = () => {} }) => {
    return (
        <CardPeopleStyle>
            <img
                src="/images/planet-background.png"
                alt="Star Ship"
                className="im-fluid"
            />
            <div className="people">
                <div className="people-info">
                    <h3 className="people-info__name">{people.name}</h3>
                    <div className="people-info__more">
                        Gender - {people.gender}
                    </div>
                    <div className="people-info__more">
                        Height - {people.height}
                    </div>
                    <div className="people-info__more">
                        Birthday - {people.birth_year}
                    </div>
                    <div className="people-info__more">
                        Skin - {people.skin_color}
                    </div>
                </div>
                <div className="people-action">
                    <Button
                        onClick={() => action(people.url)}
                        size={"16px"}
                        color="outline-primary"
                    >
                        More Info
                    </Button>
                </div>
            </div>
        </CardPeopleStyle>
    );
};
export default CardPeople;
