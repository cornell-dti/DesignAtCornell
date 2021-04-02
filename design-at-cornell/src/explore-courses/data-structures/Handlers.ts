import StringDict from "./StringDict";
import StringSet from "./StringSet";

export type filterBarChangeHandler = (filterData: StringDict<StringSet>) => void;
export type filterCategoryChangeHandler = (checkboxLabel: string) => void;
export type FilterCategoryButtonClickHandler = () => void;
