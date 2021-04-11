import Category from "./Category";

export type filterBarChangeHandler = (filterData: ReadonlyMap<Category, ReadonlySet<string>>) => void;
export type filterCategoryCheckHandler = (checkboxLabel: string) => void;
export type filterCategoryClearHandler = () => void
export type filterCheckboxClickHandler = () => void;
export type filterCategoryButtonClickHandler = () => void;
export type filterDropdownToggleHandler = () => void;
export type filterSelectionBubbleClickHandler = () => void;
