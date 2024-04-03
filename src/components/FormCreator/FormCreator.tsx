"use client";

import React, { useEffect, useState } from "react";

import styles from "./FormCreator.module.scss";
import InputsCreator from "./InputsCreator/InputsCreator";
import Validate from "utils/validation/validation";
import CmsButton from "components/CmsButton/CmsButton";
import { FormDataType } from "utils/types/form";
import { copy } from "utils/functions";

type Props = {
  formData: FormDataType;
  children?: React.ReactNode;
};

function FormCreator(props: Props) {
  const { formData, children } = props;
  const { inputs, buttonText, onSubmit, initialData } = formData;

  const [firstTry, setFirstTry] = useState(true);

  const [form, setForm] = useState({});

  useEffect(() => {
    const formData = {};
    if (Array.isArray(inputs)) {
      for (const key in inputs) {
        const input = inputs[key];
        let initialValue = "";
        if (initialData) {
          initialValue = initialData[input.name] ?? "";
        }

        formData[input.name] = {
          value: initialValue,
          valid: false,
          errorMessage: "",
          rules: input.rules,
        };
      }
    }
    setForm(formData);
  }, [initialData, inputs]);

  function onChange(name: string, value: string) {
    const newState = copy(form);

    const { valid, msg } = Validate(value, form[name].rules);

    newState[name].value = value;
    newState[name].valid = valid;
    newState[name].errorMessage = msg;

    setForm(newState);
  }

  function showError(name: string) {
    return !form?.[name]?.valid && !firstTry;
  }

  function onSubmitHandler() {
    setFirstTry(false);

    let formValid = true;
    const payload = {};
    const newState = copy(form);

    for (const key in form) {
      const validationObj = Validate(form[key].value, form[key].rules);
      newState[key].valid = validationObj.valid;
      newState[key].errorMessage = validationObj.msg;

      payload[key] = form[key].value;

      if (!validationObj.valid) {
        formValid = false;
      }
    }

    setForm(newState);

    if (formValid) {
      onSubmit(payload);
    }
  }

  return (
    <div className={styles["cms-form"]}>
      {inputs.map((input) => {
        if (form[input.name]) {
          return (
            <InputsCreator
              input={input}
              key={"input" + input.name}
              onChange={onChange}
              showError={showError}
              value={form?.[input.name]?.value}
              errorMessage={form?.[input.name]?.errorMessage}
            />
          );
        }
        return null;
      })}
      {children && children}
      <CmsButton
        title={buttonText}
        className={"create"}
        onClick={onSubmitHandler}
      />
    </div>
  );
}

export default FormCreator;
