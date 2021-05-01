import { CourseInfo } from "../../../../server/types";
import Category from "./Category";
import {
    filterBarChangeHandler,
    filterCategoryButtonClickHandler,
    filterCategoryCheckHandler,
    filterCategoryClearHandler,
    filterCheckboxClickHandler,
    filterDropdownToggleHandler,
    filterSelectionBubbleClickHandler
} from "./Handlers";

export type FilterDataMap = ReadonlyMap<Category, ReadonlySet<string>>;

export type CoursesProps = {
    readonly courses: ReadonlyArray<CourseInfo>;
    readonly filterData: FilterDataMap;
}

export type TitleProps = {
    readonly filterData: FilterDataMap;
    readonly dropdownInfo: ReadonlyMap<Category, FilterDropdownInfo>;
    readonly onChange: filterBarChangeHandler;
};

export type FilterCategoryProps = FilterDropdownProps & {
    readonly scroll: boolean;
    readonly category: Category;
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
    readonly label: Category,
    readonly open: boolean,
    readonly applied: number;
    readonly onClick: filterCategoryButtonClickHandler;
};

export type FilterCheckboxProps = {
    readonly label: string;
    readonly checked: boolean;
    readonly onClick: filterCheckboxClickHandler;
};
