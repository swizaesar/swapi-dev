import React from "react";
import { useRouter } from "next/router";
import fetchApi from "../../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { DetailStyle } from "./style";
import reduxClear from "../../../services/reduxClear";
import { numberConverter } from "../../../utils/numberConverter";
import moment from "moment";
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
            fetchApi.getPlanetDetail({ dispatch, slug });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.planetDetail?.isSuccess) {
            setData(state.planetDetail.data);
            reduxClear.planetDetailClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <DetailStyle>
            {data && (
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="back">
                                <Link href="/planets">
                                    <a>
                                        <i className="fas fa-arrow-left"></i>{" "}
                                        Back
                                    </a>
                                </Link>
                            </div>
                            <div className="info">
                                <div className="info-header">
                                    <h2 className="info-title">{data.name}</h2>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Diameter
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.diameter)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Climate
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.climate}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Gravity
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.gravity}
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
                                        Population
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.population)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Orbital Period
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.orbital_period)}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Rotation Period
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.rotation_period}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Terrain
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.terrain}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Surface Water
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {numberConverter(data.surface_water)}
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
