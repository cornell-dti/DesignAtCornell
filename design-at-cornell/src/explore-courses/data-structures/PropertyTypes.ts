import {
    filterBarChangeHandler,
    filterCategoryButtonClickHandler,
    filterCategoryChangeHandler,
    filterCheckboxClickHandler,
    filterDropdownToggleHandler
} from "./Handlers";
import Dictionary from "./Dictionary";
import Set from "./Set";

export type TitleProps = {
    readonly filterData: Dictionary<Set>;
    readonly dropdownInfo: Dictionary<FilterDropdownInfo>;
    readonly onChange: filterBarChangeHandler;
};

export type FilterCategoryProps = FilterDropdownProps & {
    readonly category: string;
    readonly open: boolean;
    readonly onToggle: filterDropdownToggleHandler;
};

export type FilterDropdownProps = FilterDropdownInfo & {
    readonly checkboxData: Set;
    readonly onChange: filterCategoryChangeHandler;
};

export type FilterDropdownInfo = {
    readonly checkboxLabels: ReadonlyArray<string>;
    readonly expand: boolean;
    readonly scroll: boolean;
};

export type FilterCategoryButtonProps = {
    readonly label: string,
    readonly open: boolean,
    readonly onClick: filterCategoryButtonClickHandler;
};

export type FilterCheckboxProps = {
    readonly label: string;
    readonly checked: boolean;
    readonly onClick: filterCheckboxClickHandler;
};
