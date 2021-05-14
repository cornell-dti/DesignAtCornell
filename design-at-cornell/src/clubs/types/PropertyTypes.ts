import ClubsCategory from "./ClubsCategory";
import {
    filterBarChangeHandler,
    filterCategoryButtonClickHandler,
    filterCategoryCheckHandler,
    filterCategoryClearHandler,
    filterCheckboxClickHandler,
    filterDropdownToggleHandler,
    filterSelectionBubbleClickHandler,
    searchHandler
} from "./Handlers";

export type TitleProps = {
    readonly filterData: ReadonlyMap<ClubsCategory, ReadonlySet<string>>;
    readonly dropdownInfo: ReadonlyMap<ClubsCategory, FilterDropdownInfo>;
    readonly onChange: filterBarChangeHandler;
    readonly searchHandler: searchHandler;
};

export type FilterCategoryProps = FilterDropdownProps & {
    readonly scroll: boolean;
    readonly category: ClubsCategory;
    readonly open: boolean;
    readonly onToggle: filterDropdownToggleHandler;
};

export type FilterDropdownProps = {
    readonly checkboxLabels: ReadonlyArray<string>;
    readonly expand: boolean;
    readonly checkboxData: ReadonlySet<string>;
    readonly onCheck: filterCategoryCheckHandler;
    readonly onClear: filterCategoryClearHandler;
};

export type FilterSelectionBubbleProps = {
    readonly label: string;
    readonly color: string;
    readonly onClick: filterSelectionBubbleClickHandler;
};

export type FilterDropdownInfo = {
    readonly checkboxLabels: ReadonlyArray<string>;
    readonly expand: boolean;
    readonly scroll: boolean;
};

export type FilterCategoryButtonProps = {
    readonly label: ClubsCategory,
    readonly open: boolean,
    readonly applied: number;
    readonly onClick: filterCategoryButtonClickHandler;
};

export type FilterCheckboxProps = {
    readonly label: string;
    readonly checked: boolean;
    readonly onClick: filterCheckboxClickHandler;
};
