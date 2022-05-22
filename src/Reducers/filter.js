export const filterByCategory = (items, category) => {
  const categoryArray = Object.keys(category).filter(
    (value) => category[value] === true
  );
  return categoryArray.length === 0
    ? items
    : items.filter(({ categoryName }) => {
        const getItems = (categoryName) => {
          return categoryArray.filter((value) => value === categoryName);
        };
        return getItems(categoryName).length === 0 ? false : true;
      });
};
