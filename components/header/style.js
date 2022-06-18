import styled from "styled-components";
import { color } from "../../utils/variable";

const HeaderStyle = styled.header`
    padding: 10px 20px;
    background-color: #000000;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: end;
        @media (max-width: 576px) {
            align-items: center;
        }
        &-logo {
            width: 100px;
            @media (max-width: 576px) {
                position: relative;
                z-index: 10;
            }
        }
        &-sidebar {
            display: none;
            font-size: 24px;
            @media (max-width: 576px) {
                display: block;
                position: relative;
                z-index: 99;
            }
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
    @media (max-width: 576px) {
        .nav {
            position: fixed;
            top: 0;
            bottom: 0;
            left: ${(props) => (props.isShow ? 0 : "-600px")};
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 5;
            width: 100%;
            transition: all 0.5s ease;
            .header {
                &-nav {
                    display: block;
                    padding: 100px 20px 20px;
                    background-color: #000000;
                    width: 200px;
                    &__menu {
                        display: block;
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 10px;
                        &.active {
                            border-bottom: 1px solid ${color.primary};
                            color: ${color.primary};
                            &:after {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default HeaderStyle;
