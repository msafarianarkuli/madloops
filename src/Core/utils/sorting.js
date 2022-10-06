export const handleLikeSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.likeCount - a.likeCount);

  return numDescending.slice(0, numSlice);
};

export const handleDateSortingDes = (list, numSlice) => {
  const numDescending = [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return numDescending.slice(0, numSlice);
};

export const handleDateSortingAs = (list, numSlice) => {
  const numAscending = [...list].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return numAscending.slice(0, numSlice);
};

export const handleViewSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.view - a.view);

  return numDescending.slice(0, numSlice);
};
