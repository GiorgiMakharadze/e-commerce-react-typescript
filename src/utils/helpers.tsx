export const formatPrice = (number: string | number) => {
  const num = typeof number === "string" ? parseFloat(number) : number;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
};
export const getUniqueValues = (data: [], type: string) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
