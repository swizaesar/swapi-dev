import Link from "next/link";
import React from "react";
import HeaderStyle from "./style";

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link href={"/"}>
                    <a>
                        <img
                            src="/images/logo.png"
                            alt="Star Wars"
                            className="img-fluid header-logo"
                        />
                    </a>
                </Link>
            </div>
        </HeaderStyle>
    );
};
export default Header;
