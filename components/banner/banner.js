import { Percent } from "react-feather";

const Banner = () => {
  const disocuntExpired = new Date("08/20/2022") > new Date();

  return disocuntExpired ? (
    <div className="banner" />
  ) : (
    <div className="banner">
      <div className="percent-icon">
        <Percent size={18} />
      </div>
      <span>
        Avail <b>10%</b> flat discount from 11th to 20th Sep 2022! 
        🎉
      </span>
    </div>
  );
};

export default Banner;
