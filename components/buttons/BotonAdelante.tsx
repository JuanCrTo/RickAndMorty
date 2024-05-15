import { Button } from "antd";
import React from "react";


const BotonAdelante = ({ page, setPage, maxPage = 42 }: any) => {
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