import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeFormWrapper } from "components/EmployeeForm/styles";
import { EmployeeFormContainer } from "components/EmployeeForm/styles";
import { EmployeeCardContainer } from "components/EmployeeForm/styles";
import { EmployeeInfoContainer } from "components/EmployeeForm/styles";
import { EmployeeTitle } from "components/EmployeeForm/styles";
import { EmployeeInfoText } from "components/EmployeeForm/styles";

import { EmployeeInfo } from "components/EmployeeForm/types";

function EmployeeForm() {
  const [firstNameValue, setFirstNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [jobPositionValue, setJobPositionValue] = useState<string>("");

  const [isShowCard, setIsShowCardValue] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<EmployeeInfo>({
    firstName: "",
    lastName: "",
    age: "",
    jobPosition: "",
  });

  const onChangeFieldsValue = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Dispatch<SetStateAction<string>>
  ) => {
    setFieldValue(event.target.value);
  };

  const createEmployeeCard = () => {
    // Если все значения у нас не пустые, то показываем карточку
    if (
      !!firstNameValue &&
      !!lastNameValue &&
      !!ageValue &&
      !!jobPositionValue
    ) {
      setUserInfo({
        firstName: firstNameValue,
        lastName: lastNameValue,
        age: ageValue,
        jobPosition: jobPositionValue,
      });
      setIsShowCardValue(true);
    } else {
      // Показываем alert если хотя бы одно из полей пустое
      setIsShowCardValue(false);
      setTimeout(() => alert("Введите данные во все поля"), 0);
    }
  };

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer>
        <Input
          id="first_name_id"
          name="firstName"
          placeholder="Иван"
          label="Имя"
          value={firstNameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setFirstNameValue)
          }
        />
        <Input
          id="last_name_id"
          name="lastName"
          placeholder="Василевский"
          label="Фамилия"
          value={lastNameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setLastNameValue)
          }
        />
        <Input
          id="age_id"
          name="age"
          placeholder="25"
          label="Возраст"
          value={ageValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setAgeValue)
          }
        />
        <Input
          id="job_position_id"
          name="jobPosition"
          placeholder="Старший специалист"
          label="Должность"
          value={jobPositionValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setJobPositionValue)
          }
        />

        <Button name="Создать" onClick={createEmployeeCard} />
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

export default EmployeeForm;
