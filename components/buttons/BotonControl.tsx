import { Button } from "antd";
import React from "react";
import { IButton } from "@/interfaces/Button.interface";
import Link from "next/link";
import styles from "@/styles/BotonControl.module.scss";

const BotonControl: React.FC<IButton> = ({ page, setPage, maxPage = 42 }) => {
  const handleNextClick = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <h4>
        Currently Page: <span>{page}</span>
      </h4>
      <div className={styles.buttonRow}>
        {/* Botones de paginación */}
        <Button disabled={page === 1} onClick={handlePrevClick}>
          Page {page - 1}
        </Button>
        <Button disabled={page === maxPage} onClick={handleNextClick}>
          Page {page + 1}
        </Button>
      </div>
      <Link href={`/charts`} className={styles.linkButton}>
        <Button className={styles.buttonCharts}>Graficas</Button>
      </Link>
    </div>
  );
};

export default BotonControl;
