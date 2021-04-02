import { filterBarChangeHandler, FilterCategoryButtonClickHandler, filterCategoryChangeHandler } from "./Handlers";
import StringDict from "./StringDict";
import StringSet from "./StringSet";

export type TitleProps = {
    readonly filterData: StringDict<StringSet>;
    readonly onChange: filterBarChangeHandler;
};

export type FilterCategoryProps = {
    readonly category: string;
    readonly checkboxData: StringSet;
    readonly onChange: filterCategoryChangeHandler;
}

export type FilterCategoryButtonProps = {
    readonly label: string,
    readonly open: boolean,
    readonly onClick: FilterCategoryButtonClickHandler;
};

