import { Button } from "antd";
import React from "react";
import { IButton } from "@/interfaces/Button.interface";

const BotonAtras: React.FC<Omit<IButton, 'maxPage'>> = ({ page, setPage }) => {
    const handleClick = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
      return (
        <Button disabled={page === 1} onClick={handleClick}>
          Page {page - 1}
        </Button>
      );
}

export default BotonAtras