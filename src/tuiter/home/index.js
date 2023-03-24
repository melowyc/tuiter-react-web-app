import React from "react";
import TuitList from "../tuits/tuitList";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;