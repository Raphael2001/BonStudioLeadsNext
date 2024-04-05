"use client";

import React from "react";

import styles from "./LeadsForm.module.scss";
import { Texts } from "utils/types/init";
import FormCreator from "components/FormCreator/FormCreator";
import { FormDataType } from "utils/types/form";
import FORM_INPUTS_TYPES from "constants/form-inputs-types";
import Button from "components/Button/Button";
import Api from "api/requests";
import usePopup from "utils/hooks/usePopup";
import POPUP_TYPES from "constants/popup-types";

type Props = {
  texts: Texts;
};

function LeadsForm({ texts }: Props) {
  const openPopup = usePopup();
  function onSubmit(payload: any) {
    Api.sendLead({ payload, onSuccess });

    function onSuccess() {
      openPopup(POPUP_TYPES.LEAD_SENT_SUCCESS, {
        title: texts.leadSentSuccess_title,
        name: payload.fullname,
        content: texts.leadSentSuccess_content,
        btnText: texts.leadSentSuccess_btnText,
      });
    }
  }

  const formData: FormDataType = {
    inputs: [
      {
        name: "fullname",
        label: "שם מלא",
        inputType: FORM_INPUTS_TYPES.ANIMATED_INPUT,
        rules: ["not_empty", "full_name"],
      },
      {
        name: "phone",
        label: "טלפון",
        inputType: FORM_INPUTS_TYPES.ANIMATED_INPUT,
        rules: ["not_empty", "phone"],
        type: "tel",
      },
    ],
    onSubmit: onSubmit,
    buttonText: "שליחה",
  };

  return (
    <div className={styles["leads-form-wrapper"]} id="leads-form">
      <h3 className={styles["title"]}>{texts.leadsForm_title}</h3>
      <h6 className={styles["subtitle"]}>{texts.leadsForm_subtitle}</h6>
      <div className={styles["form"]}>
        <FormCreator formData={formData} CustomButton={Button} />
      </div>
    </div>
  );
}

export default LeadsForm;
