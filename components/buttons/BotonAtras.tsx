import { Button } from "antd";
import React from "react";

function BotonAtras({ page, setPage }: any){
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