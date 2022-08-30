import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./footer.module.css";

function Footer({ loadMore }) {
    let navigate = useNavigate();
    return (<div className={styles.footer}>
        <button onClick={loadMore}>Load</button>
        <button onClick={() => {
            navigate("/battle");
        }
        }>Battle!</button>
    </div>);
}



export default Footer;