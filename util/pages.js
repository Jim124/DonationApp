function pagination(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex > items.length) return [];
  return items.slice(startIndex, endIndex);
}

export default pagination;
