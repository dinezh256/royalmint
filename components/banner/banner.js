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
        Avail <b>10%</b> flat discount on this Diwali!&emsp;🪔
      </span>
    </div>
  );
};

export default Banner;
