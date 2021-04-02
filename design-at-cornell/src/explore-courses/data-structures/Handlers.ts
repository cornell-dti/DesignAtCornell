import Dictionary from "./Dictionary";
import Set from "./Set";

export type filterBarChangeHandler = (filterData: Dictionary<Set>) => void;
export type filterCategoryChangeHandler = (checkboxLabel: string) => void;
export type filterCheckboxClickHandler = () => void;
export type filterCategoryButtonClickHandler = () => void;
