import { Button } from "antd";
import React from "react";
import { IButton } from "@/interfaces/Button.interface";


const BotonAdelante: React.FC<IButton> = ({ page, setPage, maxPage = 42 }) => {
    const handleClick = () => {
        if (page < maxPage) {
          setPage(page + 1);
        }
      };
    
      return (
        <div>
          <h4>Currently Page: {page}</h4>
          <Button disabled={page === maxPage} onClick={handleClick}>
          Page {page + 1}
        </Button>
        </div>
      );
}

export default BotonAdelante