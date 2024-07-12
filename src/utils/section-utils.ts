import { SectionItem } from "@/common/interfaces";
import { SECTIONS } from "@/constants";

export const getSectionIdsArray = (): Array<string> => {
  if (!SECTIONS || !SECTIONS.length) return [];

  return SECTIONS.map((sectionItem: SectionItem) => {
    return sectionItem.value;
  });
};
