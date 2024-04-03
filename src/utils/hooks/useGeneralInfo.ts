import { GeneralInfo } from "utils/types";
import { useAppSelector } from "./useRedux";
import Api from "api/requests";
import useNotificationsHandler from "./useNotificationsHandler";
import { copy } from "utils/functions";

export default function useGeneralInfo(name: string) {
  const { onSuccessNotification } = useNotificationsHandler();
  const generalInfoData: GeneralInfo = useAppSelector(
    (store) => store.init?.generalInfo?.[name]
  );
  const value = generalInfoData.value;
  const inputType = generalInfoData.inputType;
  const cmsTitle = generalInfoData.cmsTitle ?? "";

  const multiValues = Array.isArray(generalInfoData.value);

  function removeItemByIndex(index: number) {
    const arr: Array<any> = copy(value);
    // Check if the index is within the bounds of the array
    if (index < 0 || index >= arr.length) {
      return arr; // Return the original array if the index is out of bounds
    }

    // Create a new array without the item at the specified index
    return arr.slice(0, index).concat(arr.slice(index + 1));
  }

  function upsertGeneralInfo(
    value: string | Array<any>,
    callback = () => {},
    title = ""
  ) {
    const payload = { name, value, inputType };
    if (title) {
      payload["cmsTitle"] = title;
    }

    function onSuccess() {
      callback();
      onSuccessNotification();
    }
    Api.upsertGeneralInfo({
      payload,
      onSuccess,
    });
  }

  return {
    multiValues,
    value,
    inputType,
    cmsTitle,
    removeItemByIndex: (index: number) => removeItemByIndex(index),
    upsertGeneralInfo,
  };
}
