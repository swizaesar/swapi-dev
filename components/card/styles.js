import styled from "styled-components";
import { Card } from "reactstrap";
import { color } from "../../utils/variable";

export const CardNameStyle = styled(Card)`
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    cursor: pointer;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${color.primary};
    color: ${color.primary};
    font-size: 24px;
    font-weight: 600;
    background-color: ${color.secondary};
    border-radius: 20px;
`;
export const CardStarShipStyle = styled(Card)`
    border: unset;
    position: relative;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    max-height: 175px;
    overflow: hidden;
    .starship {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        &-info {
            &__name {
                color: ${color.primary};
            }
        }
    }
`;
export const CardPlanetStyle = styled(Card)`
    border: unset;
    position: relative;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    max-height: 175px;
    overflow: hidden;
    .planet {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        &-info {
            &__name {
                color: ${color.primary};
            }
        }
    }
`;
export const CardPeopleStyle = styled(Card)`
    border: unset;
    position: relative;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    max-height: 175px;
    overflow: hidden;
    .people {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        &-info {
            &__name {
                color: ${color.primary};
            }
        }
    }
`;
export const CardFilmStyle = styled(Card)`
    border: unset;
    position: relative;
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    background-color: #000000;
    color: #fff;
    text-align: center;
    .film {
        &-info {
            padding: 20px;
            &__name {
                color: ${color.primary};
            }
            &__desc {
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 10px;
            }
            &__more {
                span {
                    color: ${color.primary};
                }
            }
        }
        &-action {
            button {
                border-radius: 0px 0px 5px 5px;
                border: unset;
                border-top: 1px solid ${color.primary};
                padding: 20px;
            }
        }
    }
    /* .film {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        &-info {
            &__name {
                color: ${color.primary};
            }
        }
    } */
`;
