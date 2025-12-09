export const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ORD-${timestamp}-${random}`;
};

export const calculateDeliveryCharge = (totalAmount) => {
  if (totalAmount > 500) {
    return 0; // Free delivery above 500
  } else if (totalAmount > 250) {
    return 30;
  } else {
    return 50;
  }
};

export const calculateDiscount = (coupon, totalAmount) => {
  if (totalAmount < coupon.minOrderAmount) {
    return 0;
  }

  let discount = 0;

  if (coupon.discountType === 'percentage') {
    discount = (totalAmount * coupon.discountValue) / 100;
    if (coupon.maxDiscount) {
      discount = Math.min(discount, coupon.maxDiscount);
    }
  } else if (coupon.discountType === 'fixed') {
    discount = coupon.discountValue;
  }

  return Math.floor(discount);
};
