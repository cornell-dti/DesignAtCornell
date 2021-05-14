import React from "react";
import ClubsCategory from "./ClubsCategory";

export type filterBarChangeHandler = (filterData: ReadonlyMap<ClubsCategory, ReadonlySet<string>>) => void;
export type filterCategoryCheckHandler = (checkboxLabel: string) => void;
export type filterCategoryClearHandler = () => void
export type filterCheckboxClickHandler = () => void;
export type filterCategoryButtonClickHandler = () => void;
export type filterDropdownToggleHandler = () => void;
export type filterSelectionBubbleClickHandler = () => void;
export type searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
