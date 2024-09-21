import React from "react";
import { Button } from "antd";
import styles from "@/styles/botonMain.module.scss";

const BotonMain = () => {
  return (
    <div className={styles.buttonContainer}>
      <Button>Volver</Button>
    </div>
  );
};

export default BotonMain;
