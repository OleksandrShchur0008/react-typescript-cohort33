import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  EmployeeInfo,
  EMPLOYEE_FIELD_NAMES,
} from "components/EmployeeFormV2/types";
import {
  EmployeeFormContainer,
  EmployeeCardContainer,
  EmployeeInfoContainer,
  EmployeeTitle,
  EmployeeInfoText,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormWrapper,
  ErrorContainer,
} from "components/EmployeeFormV2/styles";

function EmployeeFormV2() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.FIRST_NAME]: Yup.string()
      .required("Поле Имя обязательное")
      .min(2, "Минимальное колличество символов 2")
      .max(50, "Максимальное колличество символов 50"),
    [EMPLOYEE_FIELD_NAMES.LAST_NAME]: Yup.string()
      .required("Поле Фамилия обязательное")
      .max(15, "Максимальное колличество символов 15"),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.string()
      .required("Поле Возраст обязательное")
      .min(1, "Минимальное колличество символов 1")
      .max(3, "Максимальное колличество символов 3"),
    [EMPLOYEE_FIELD_NAMES.JOB_POSITION]: Yup.string().max(
      30,
      "Максимальное колличество символов 30"
    ),
    [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean().oneOf(
      [true],
      "Это поле обязательное для выбора"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FIELD_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FIELD_NAMES.AGE]: "",
      [EMPLOYEE_FIELD_NAMES.JOB_POSITION]: "",
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values) => {
      setUserInfo({
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        jobPosition: values.jobPosition,
      });
      setIsShowCard(true);
    },
  });

  console.log(formik);

  const { firstName, lastName, age, jobPosition, agreement } = formik.values;

  // Создадим state, который решает когда нам карточку показывать, а когда нет
  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  // Создаем контейнер(стейт), в котором будет храниться информация для карточки,
  // чтобы она туда добавлялась только на onClick
  const [userInfo, setUserInfo] = useState<EmployeeInfo>({
    firstName: "",
    lastName: "",
    age: "",
    jobPosition: "",
  });

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="first_name_id"
          name={EMPLOYEE_FIELD_NAMES.FIRST_NAME}
          placeholder="Иван"
          label="Имя*"
          value={firstName}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.FIRST_NAME]}
        />
        <Input
          id="last_name_id"
          name={EMPLOYEE_FIELD_NAMES.LAST_NAME}
          placeholder="Василевский"
          label="Фамилия*"
          value={lastName}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.LAST_NAME]}
        />
        <Input
          id="age_id"
          name={EMPLOYEE_FIELD_NAMES.AGE}
          placeholder="25"
          label="Возраст*"
          value={age}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
        />
        <Input
          id="job_position_id"
          name={EMPLOYEE_FIELD_NAMES.JOB_POSITION}
          placeholder="Старший специалист"
          label="Должность"
          value={jobPosition}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.JOB_POSITION]}
        />

        <CheckboxContainer>
          <Checkbox
            id="agreement_id"
            name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
            type="checkbox"
            checked={agreement}
            onChange={formik.handleChange}
          />
          <CheckboxLabel htmlFor="agreement_id">
            Я согласен с политикой обработки данных*
          </CheckboxLabel>
        </CheckboxContainer>
        {formik.errors[EMPLOYEE_FIELD_NAMES.AGREEMENT] && (
          <ErrorContainer>
            {formik.errors[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
          </ErrorContainer>
        )}
        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>

      {isShowCard && (
        <EmployeeCardContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{userInfo.firstName}</EmployeeInfoText>
          </EmployeeInfoContainer>

          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>

          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{userInfo.age}</EmployeeInfoText>
          </EmployeeInfoContainer>

          <EmployeeInfoContainer>
            <EmployeeTitle>Должность</EmployeeTitle>
            <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
          </EmployeeInfoContainer>
        </EmployeeCardContainer>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeFormV2;
