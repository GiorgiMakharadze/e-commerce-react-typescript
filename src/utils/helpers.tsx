export const formatPrice = (number: string | number) => {
  const num = typeof number === "string" ? parseFloat(number) : number;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
};
