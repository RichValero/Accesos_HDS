export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  try {
    return date.toLocaleString("es-CL", options);
  } catch (error) {
    return date.toLocaleString;
  }
};
