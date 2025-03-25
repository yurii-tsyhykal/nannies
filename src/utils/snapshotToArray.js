export const snapshotToArray = snapshot => {
  let arr = [];
  snapshot.forEach(childSnapshot => {
    arr.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  return arr;
};
