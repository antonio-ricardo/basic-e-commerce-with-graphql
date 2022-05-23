import { ClientBadRequest } from "../errors";

export const validateProductTag = (tag: string) => {
  const validTags: string[] = ["CLOTHES", "TOYS", "FOOD", "OTHERS"];

  const isInvalidTag = !validTags.includes(tag)

  if (isInvalidTag) {
    throw new ClientBadRequest("Invalid tag sent");
  }

  return tag;
};
