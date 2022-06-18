import React from "react";
import { useRouter } from "next/router";
import fetchApi from "../../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { DetailStyle } from "./style";
import reduxClear from "../../../services/reduxClear";
import moment from "moment";
import ListInfo from "../../fetchName/listInfo";

const Detail = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        if (slug) {
            fetchApi.getPeopleDetail({ dispatch, slug });
        }
    }, [dispatch, slug]);
    React.useEffect(() => {
        if (state?.peopleDetail?.isSuccess) {
            setData(state.peopleDetail.data);
            reduxClear.peopleDetailClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <DetailStyle>
            {data && (
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="info">
                                <div className="info-header">
                                    <h2 className="info-title">{data.name}</h2>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Birth Year
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.birth_year}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Gender
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.gender}
                                    </div>
                                </div>

                                <div className="info-group">
                                    <div className="info-group__label">
                                        Height
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.height}
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
                                        Hair Color
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.hair_color}
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="info-group__label">
                                        Skin Color
                                    </div>
                                    <div className="info-group__dot">:</div>
                                    <div className="info-group__value">
                                        {data.skin_color}
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
