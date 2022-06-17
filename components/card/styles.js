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
