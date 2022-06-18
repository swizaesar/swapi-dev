import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { listHome } from "../../utils/Helpers";
import HeaderStyle from "./style";

const Header = () => {
    const router = useRouter();
    return (
        <HeaderStyle>
            <div className="header">
                <Link href={"/"}>
                    <a>
                        <img
                            src="/images/logo.png"
                            alt="Star Wars"
                            className="img-fluid header-logo"
                        />
                    </a>
                </Link>
                <ul className="header-nav">
                    {listHome.map((item, key) => {
                        return (
                            <li key={key}>
                                <Link href={item.url}>
                                    <a
                                        className={`header-nav__menu ${
                                            router.asPath === item.url
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </HeaderStyle>
    );
};
export default Header;
