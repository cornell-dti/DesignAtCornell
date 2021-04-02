import {
    filterBarChangeHandler,
    filterCategoryButtonClickHandler,
    filterCategoryChangeHandler,
    filterCheckboxClickHandler
} from "./Handlers";
import Dictionary from "./Dictionary";
import Set from "./Set";

export type TitleProps = {
    readonly filterData: Dictionary<Set>;
    readonly onChange: filterBarChangeHandler;
};

export type FilterCategoryProps = {
    readonly category: string;
    readonly checkboxData: Set;
    readonly onChange: filterCategoryChangeHandler;
};

export type FilterDropdownProps = {
    readonly checkboxData: Set;
    readonly onChange: filterCategoryChangeHandler;
};

export type FilterCategoryButtonProps = {
    readonly label: string,
    readonly open: boolean,
    readonly onClick: filterCategoryButtonClickHandler;
};

export type FilterLabeledCheckboxProps = {
    readonly label: string;
    readonly checked: boolean;
    readonly onChange: filterCheckboxClickHandler;
};

export type FilterCheckboxProps = {
    readonly checked: boolean;
    readonly onClick: filterCheckboxClickHandler;
};
