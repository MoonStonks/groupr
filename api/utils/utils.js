const { db, admin } = require("../config/firestore");

const _bucketize = (n, items) => {
  let [i, curr, result] = [0, [], []];
  while (i < items.length) {
    if (i > 0 && i % n === 0) {
      result.push([...curr]);
      curr = [];
    }
    if (items[i] !== null && items[i] !== undefined) {
      curr.push(items[i]);
    }
    i++;
  }
  result.push(curr);
  return result;
};

const queryFirestoreWithBuckets = async (ref, property, table) => {
  const docs = await ref.get();
  const queryResult = [];
  docs.forEach((doc) => {
    queryResult.push(doc.data()[property]);
  });
  const buckets = _bucketize(10, queryResult);
  const resRef = db.collection(table);
  const items = await Promise.all(
    buckets.map((bucket) => {
      return resRef
        .where(admin.firestore.FieldPath.documentId(), "in", bucket)
        .get();
    })
  );
  const resultList = [];
  items.forEach((querySnapshot) => {
    querySnapshot.forEach((elem) => {
      resultList.push({ id: elem.id, ...elem.data() });
    });
  });
  return resultList;
};

const generateRandomString = (length, randomString = "") => {
  randomString += Math.random().toString(20).substr(2, length);
  if (randomString.length > length) return randomString.slice(0, length);
  return generateRandomString(length, randomString);
};

module.exports = {
  queryFirestoreWithBuckets,
  generateRandomString,
};
