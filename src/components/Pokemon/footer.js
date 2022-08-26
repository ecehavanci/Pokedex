import React from "react";
import styles from "./footer.module.css";

const Footer = ({loadMore}) => (
    <div className={styles.footer}>
        <button onClick={loadMore}>Load</button>
    </div>
);

export default Footer;