import { Percent } from "react-feather";
import { hasDiscountExpired } from "../../utils";

const Banner = () => {
  return hasDiscountExpired ? (
    <div className="banner" />
  ) : (
    <div className="banner">
      <div className="percent-icon">
        <Percent size={18} />
      </div>
      <span>
        Avail <b>10%</b> flat discount from 11th to 20th Sep 2022!&emsp;🎉
      </span>
    </div>
  );
};

export default Banner;
