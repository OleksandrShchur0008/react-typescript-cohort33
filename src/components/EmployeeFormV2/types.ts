export interface EmployeeInfo {
  firstName: string;
  lastName: string;
  age: string;
  jobPosition: string;
}

export enum EMPLOYEE_FIELD_NAMES {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  AGE = "age",
  JOB_POSITION = "jobPosition",
  AGREEMENT = "agreement",
}
