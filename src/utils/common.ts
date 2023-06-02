export const isProduction = () => {
  return process.env.NODE_ENV == "production";
};

export const isNotProduction = () => {
  return process.env.NODE_ENV !== "production";
};
