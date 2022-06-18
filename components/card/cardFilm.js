import React from "react";
import { CardFilmStyle } from "./styles";
import Button from "../button";

const CardFilm = ({ film }) => {
    return (
        <CardFilmStyle>
            <div className="film">
                <div className="film-info">
                    <h3 className="film-info__name">{film.title}</h3>
                    <div className="film-info__desc">{film.opening_crawl}</div>
                    <div className="film-info__more">
                        Director - <span>{film.director}</span>
                    </div>
                    <div className="film-info__more">
                        Producer - <span>{film.producer}</span>
                    </div>

                    <div className="film-info__more">
                        Release - <span>{film.release_date}</span>
                    </div>
                </div>
                <div className="film-action">
                    <Button size={"16px"} color="outline-primary" block>
                        More Info
                    </Button>
                </div>
            </div>
        </CardFilmStyle>
    );
};
export default CardFilm;
