import {
    filterBarChangeHandler,
    filterCategoryButtonClickHandler,
    filterCategoryChangeHandler,
    filterCheckboxClickHandler,
    filterDropdownToggleHandler
} from "./Handlers";

export type TitleProps = {
    readonly filterData: ReadonlyMap<string, ReadonlySet<string>>;
    readonly dropdownInfo: ReadonlyMap<string, FilterDropdownInfo>;
    readonly onChange: filterBarChangeHandler;
};

export type FilterCategoryProps = FilterDropdownProps & {
    readonly category: string;
    readonly open: boolean;
    readonly onToggle: filterDropdownToggleHandler;
};

export type FilterDropdownProps = FilterDropdownInfo & {
    readonly checkboxData: ReadonlySet<string>;
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
