const getRandomObjectKey = (obj) => {
  if (!obj) {
    return obj;
  }

  const keys = Object.keys(obj);

  if (obj[keys[(keys.length * Math.random()) << 0]]) {
    return [keys[(keys.length * Math.random()) << 0]][0];
  }

  getRandomObjectKey(obj);
};

export default getRandomObjectKey;
