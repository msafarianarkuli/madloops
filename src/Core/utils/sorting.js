export const handleLikeSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.likeCount - a.likeCount);
  console.log("like sorting");
  return numDescending.slice(0, numSlice);
};

export const handleDateSortingDes = (list, numSlice) => {
  const numDescending = [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  console.log("date sorting");
  return numDescending.slice(0, numSlice);
};

export const handleDateSortingAs = (list, numSlice) => {
  const numAscending = [...list].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  console.log("date sorting");
  return numAscending.slice(0, numSlice);
};

export const handleViewSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.view - a.view);

  console.log("view sorting");
  return numDescending.slice(0, numSlice);
};
