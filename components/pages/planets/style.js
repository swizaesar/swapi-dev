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
            margin-bottom: 30px;
        }
        &-title {
            color: ${color.primary};
            text-decoration: underline;
            margin-bottom: 20px;
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
        }
    }
`;
