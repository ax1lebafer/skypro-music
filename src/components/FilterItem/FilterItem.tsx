import cn from "classnames";
import styles from "./FilterItem.module.css";

type FilterItemProps = {
  filterName: string;
  isActive: boolean;
  handleChangeFilter: (filterName: string) => void;
  list: string[];
};

function formatDate(dateString: string | null): string {
  if (!dateString) return "";

  const dateParts = dateString.split("-");
  if (dateParts.length !== 3) return "";

  const [year, month, day] = dateParts;
  if (!year || !month || !day) return "";

  return `${day}.${month}.${year}`;
}

export function FilterItem({
  filterName,
  isActive,
  handleChangeFilter,
  list,
}: FilterItemProps) {
  const filteredList = list
    .filter((item) => item !== null && item !== "" && item !== "-")
    .map((item) => {
      if (filterName === "году выпуска" && item) {
        return formatDate(item);
      }
      return item;
    })
    .filter((item) => item !== "");

  return (
    <div className={styles.filter}>
      <div
        onClick={() => handleChangeFilter(filterName)}
        className={cn(styles.filterButton, styles.btnText)}
      >
        {filterName}
      </div>
      {isActive && (
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {filteredList.map((listName, index) => (
              <li className={styles.listItem} key={index}>
                {listName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
