export const handleLikeSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.like - a.like);

  return numDescending.slice(0, numSlice);
};

export const handleDateSortingDes = (list, numSlice) => {
  const numDescending = [...list].sort(
    (a, b) => b.createDate - a.createDate
  );

  return numDescending.slice(0, numSlice);
};

export const handleDateSortingAs = (list, numSlice) => {
  const numAscending = [...list].sort(
    (a, b) => a.createDate - b.createDate
  );

  return numAscending.slice(0, numSlice);
};

export const handleViewSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.view - a.view);

  return numDescending.slice(0, numSlice);
};
