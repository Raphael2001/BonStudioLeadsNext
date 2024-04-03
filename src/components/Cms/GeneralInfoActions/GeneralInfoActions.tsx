import CmsButton from "components/CmsButton/CmsButton";

import styles from "./GeneralInfoActions.module.scss";
import useGeneralInfo from "utils/hooks/useGeneralInfo";
import { copy } from "utils/functions";

type actionsProps = {
  name: string;
  inputValue: string | Array<any>;
  resetValue: () => void;
};

export default function GeneralInfoActions({
  name = "",
  inputValue,
  resetValue,
}: actionsProps) {
  const { multiValues, value, upsertGeneralInfo } = useGeneralInfo(name);
  function updateSingleValue() {
    upsertGeneralInfo(inputValue);
  }

  function updateMultiValues() {
    const currentValue: Array<any> = copy(value);

    if (multiValues) {
      currentValue.push(inputValue);
      upsertGeneralInfo(currentValue, resetValue);
    }
  }

  return (
    <div className={styles["actions"]}>
      {multiValues ? (
        <CmsButton
          title={"הוספה"}
          className="create"
          onClick={updateMultiValues}
        />
      ) : (
        <CmsButton
          title={"עדכון"}
          className="update"
          onClick={updateSingleValue}
        />
      )}
    </div>
  );
}
