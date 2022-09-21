const expiryDate = "08/20/2022";

export const hasDiscountExpired = +new Date(expiryDate) < +new Date();

export const NAVBAR_HEIGHT = {
  desktop: 96,
  mobile: 76,
};

export const BANNER_HEIGHT = {
  desktop: 46,
  mobile: 36,
};
