import React from "react";
import { useRouter } from "next/router";
import fetchApi from "../../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { DetailStyle } from "./style";
import reduxClear from "../../../services/reduxClear";
import { numberConverter } from "../../../utils/numberConverter";
import moment from "moment";
import Rating from "../../rating";
import ListInfo from "../../fetchName/listInfo";
import Link from "next/link";

const Detail = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        if (slug) {
            fetchApi.getStarShipDetail({ dispatch, slug });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.starshipDetail?.isSuccess) {
            setData(state.starshipDetail.data);
            reduxClear.starShipDetailClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <DetailStyle>
            {data && (
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="back">
                                <Link href="/starships">
                                    <a>
                                        <i className="fas fa-arrow-left"></i>{" "}
                                        Back
                                    </a>
                                </Link>
                            </div>
                            <div className="info">
                                <div className="info-header">
                                    <h2 className="info-title">{data.name}</h2>
                                    <Rating rating={data.hyperdrive_rating} />
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Model
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.model}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Starship Class
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.starship_class}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Manufacturer
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.manufacturer}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Films
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.films.length > 0
                                            ? data.films.map((item, key) => {
                                                  return (
                                                      <ListInfo
                                                          nameObj="films"
                                                          data={item}
                                                          key={key}
                                                          id={key}
                                                          target="title"
                                                          length={
                                                              data.films.length
                                                          }
                                                      />
                                                  );
                                              })
                                            : "-"}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Cost in Credits
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.cost_in_credits)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Cargo Capacity
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.cargo_capacity)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Consumables
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.consumables}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Crew
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.crew}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Passengers
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.passengers)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Created
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {moment(data.created).format(
                                            "YYYY-MM-DD"
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </DetailStyle>
    );
};
export default Detail;
