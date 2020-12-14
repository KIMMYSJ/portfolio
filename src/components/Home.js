import { Divider } from "@material-ui/core";
import React from "react";
import img from "../images/computergeek.jpg";

export default function Home() {
    return (
        <main>
            <img
                src={img}
                alt="Monstera Leaves"
                className="absolute object-cover w-full h-full "
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Ay, I'm Joshua.
                </h1>
            </section>
        </main>
    );
}
