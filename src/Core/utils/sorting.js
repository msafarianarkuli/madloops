const handleLikeSorting = (list, numSlice) => {
  const numDescending = [...list].sort(
    (a, b) => b.likeCount - a.likeCount
  );
  console.log('like sorting');
  return numDescending.slice(0, numSlice);
};

const handleDateSorting = (list, numSlice) => {
  const numDescending = [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  console.log('date sorting');
  return numDescending.slice(0, numSlice);
};

export { handleLikeSorting, handleDateSorting };
