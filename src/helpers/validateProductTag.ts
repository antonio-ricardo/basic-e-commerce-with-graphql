export const validateProductTag = (tag: string) => {
  const validTags: string[] = ["CLOTHES", "TOYS", "FOOD", "OTHERS"];

  return validTags.includes(tag);
};
