import styled from "styled-components";
import { color } from "../../utils/variable";

const HeaderStyle = styled.header`
    padding: 10px 20px;
    background-color: #000000;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: end;
        &-logo {
            width: 100px;
        }
        &-nav {
            list-style: none;
            display: flex;
            &__menu {
                padding: 5px 15px;
                &.active {
                    color: ${color.primary};
                    position: relative;
                    &:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 15px;
                        right: 15px;
                        height: 2px;
                        border-radius: 3px;
                        background-color: ${color.primary};
                    }
                }
                &:hover {
                    color: ${color.primary};
                }
            }
        }
    }
`;
export default HeaderStyle;
