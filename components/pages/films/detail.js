import React from "react";
import { useRouter } from "next/router";
import fetchApi from "../../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { DetailStyle } from "./style";
import reduxClear from "../../../services/reduxClear";
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
            fetchApi.getFilmDetail({ dispatch, slug });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.filmDetail?.isSuccess) {
            setData(state.filmDetail.data);
            reduxClear.filmDetailClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <DetailStyle>
            {data && (
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="back">
                                <Link href="/films">
                                    <a>
                                        <i className="fas fa-arrow-left"></i>{" "}
                                        Back
                                    </a>
                                </Link>
                            </div>
                            <div className="info">
                                <div className="info-header">
                                    <h2 className="info-title">{data.title}</h2>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__desc">
                                        {data.opening_crawl}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Director
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.director}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Producer
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.producer}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Release Date
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.release_date}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Planets
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.planets.length > 0
                                            ? data.planets.map((item, key) => {
                                                  return (
                                                      <ListInfo
                                                          nameObj="planets"
                                                          data={item}
                                                          key={key}
                                                          id={key}
                                                          target="name"
                                                          length={
                                                              data.planets
                                                                  .length
                                                          }
                                                      />
                                                  );
                                              })
                                            : "-"}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Star Ship
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.starships.length > 0
                                            ? data.starships.map(
                                                  (item, key) => {
                                                      return (
                                                          <ListInfo
                                                              nameObj="starships"
                                                              data={item}
                                                              key={key}
                                                              id={key}
                                                              target="name"
                                                              length={
                                                                  data.starships
                                                                      .length
                                                              }
                                                          />
                                                      );
                                                  }
                                              )
                                            : "-"}
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
