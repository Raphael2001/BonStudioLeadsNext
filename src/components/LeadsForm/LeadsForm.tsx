"use client";

import React from "react";

import styles from "./LeadsForm.module.scss";
import FormCreator from "components/FormCreator/FormCreator";
import { FormDataType } from "utils/types/form";
import FORM_INPUTS_TYPES from "constants/form-inputs-types";
import Api from "api/requests";
import usePopup from "utils/hooks/usePopup";
import POPUP_TYPES from "constants/popup-types";
import Button from "components/AppButton/Button";
import useTranslate from "utils/hooks/useTranslate";
import AppText from "components/AppText/AppText";

function LeadsForm() {
  const openPopup = usePopup();

  const translate = useTranslate();
  function onSubmit(payload: any) {
    Api.sendLead({ payload, onSuccess });

    function onSuccess() {
      openPopup(POPUP_TYPES.LEAD_SENT_SUCCESS, {
        title: translate("leadSentSuccess_title").text,
        name: payload.fullname,
        content: translate("leadSentSuccess_content").text,
        btnText: translate("leadSentSuccess_btnText").text,
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
  };

  return (
    <div className={styles["leads-form-wrapper"]} id="leads-form">
      <AppText
        className={styles["title"]}
        value={translate("leadsForm_title")}
      />
      <AppText
        className={styles["subtitle"]}
        value={translate("leadsForm_subtitle")}
      />

      <div className={styles["form"]}>
        <FormCreator
          formData={formData}
          CustomButton={Button}
          onSubmit={onSubmit}
          buttonText="שליחה"
        />
      </div>
    </div>
  );
}

export default LeadsForm;
