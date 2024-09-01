import cn from "classnames";
import styles from "./FilterItem.module.css";

type FilterItemProps = {
  filterName: string;
  isActive: boolean;
  handleChangeFilter: (filterName: string) => void;
  list: string[];
  handleSelectValue: (value: string) => void;
  selectedValues: string[];
};

export function FilterItem({
  filterName,
  isActive,
  handleChangeFilter,
  list,
  handleSelectValue,
  selectedValues,
}: FilterItemProps) {

  return (
    <div className={styles.filter}>
      <div
        onClick={() => handleChangeFilter(filterName)}
        className={cn(styles.filterButton, styles.btnText, {
          [styles.active]: isActive,
        })}
      >
        {filterName}
      </div>
      {isActive && (
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {list.map((listName, index) => (
              <li
                className={cn(styles.listItem, {
                  [styles.selected]: selectedValues.includes(listName),
                })}
                key={index}
                onClick={() => handleSelectValue(listName)}
              >
                {listName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
