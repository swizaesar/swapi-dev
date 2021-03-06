import styled from "styled-components";
import { color } from "../../../utils/variable";

export const Style = styled.div`
    .pagination {
        display: flex;
        justify-content: end;
        margin-bottom: 20px;
    }
`;
export const DetailStyle = styled.div`
    margin-bottom: 30px;
    .back {
        margin-bottom: 30px;
        font-size: 18px;
        i {
            margin-right: 7px;
        }
        &:hover {
            a {
                color: ${color.primary};
            }
        }
    }
    .info {
        width: 100%;
        border: 2px solid ${color.primary};
        border-radius: 10px;
        padding: 20px;
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        &-title {
            color: ${color.primary};
            text-decoration: underline;
        }
        &-group {
            display: flex;
            justify-content: space-between;
            margin-bottom: 7px;
            &__label {
                width: 150px;
            }
            &__value {
                width: 250px;
                text-align: right;
                color: ${color.primary};
                font-weight: 600;
            }
            &__desc {
                margin-bottom: 20px;
                text-align: center;
            }
            @media (max-width: 400px) {
                font-size: 14px;
                &__value {
                    font-size: 12px;
                }
            }
        }
    }
`;
