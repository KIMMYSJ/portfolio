import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { grey } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";

export default function NavBar() {
    return (
        <header className="bg-white border-b-2 border-gray-100">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white-100 hover:underline text-4xl font-bold cursive tracking-widest"
                    >
                        SJ Kim
                    </NavLink>
                    <NavLink
                        className="text-gray infline-flex items-ceneter py-3 px-3 my-6 rounded hover:text-gray-400"
                        to="/post"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        className="text-gray infline-flex items-ceneter py-3 px-3 my-6 rounded hover:text-gray-400"
                        to="/project"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        className="text-gray infline-flex items-ceneter py-3 px-3 my-6 rounded hover:text-gray-400"
                        to="/about"
                    >
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <IconButton
                        onClick={(event) =>
                            window.open(
                                "https://www.facebook.com/joshua.kim.56679/"
                            )
                        }
                    >
                        <FacebookIcon
                            fontSize="large"
                            className="mr-4"
                            style={{ color: grey[400], height: 35, width: 35 }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={(event) =>
                            window.open("https://www.instagram.com/zun710/")
                        }
                    >
                        <InstagramIcon
                            className="mr-4"
                            style={{ color: grey[600], height: 35, width: 35 }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={(event) =>
                            window.open(
                                "https://www.linkedin.com/in/seong-jun-kim-2576191a0/"
                            )
                        }
                    >
                        <LinkedInIcon
                            className="mr-4"
                            style={{ color: grey[800], height: 35, width: 35 }}
                        />
                    </IconButton>
                </div>
            </div>
        </header>
    );
}
