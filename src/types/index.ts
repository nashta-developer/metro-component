import {ReactNode} from "react";

export interface MenuData {
  listMenuFlat: []
  listMenuRecursive: []
}

export type WithChildren = {
  children?: ReactNode
}

export interface UserProps extends MenuData {
  isExpire?: boolean
  accessToken?: string
  refreshToken?: string
  employee?: EmployeeProps
  emp_info_data?: EmpInfoDataProps

}
export interface EmpInfoDataProps {
  religion_id?:                       number;
  religion_key?:                      string;
  religion_value?:                    string;
  marital_id?:                        number;
  marital_key?:                       string;
  marital_value?:                     string;
  gender_id?:                         number;
  gender_key?:                        string;
  gender_value?:                      string;
  blood_type_id?:                     number;
  blood_type_key?:                    string;
  blood_type_value?:                  string;
  identity_id?:                       number;
  identity_key?:                      string;
  identity_value?:                    string;
  hr_emp_company_id?:                 string;
  hr_emp_company_nik?:                string;
  business_unit_id?:                  number;
  business_unit_name?:                string;
  hr_job_position_id?:                string;
  hr_job_position_job_position_name?: string;
  hr_job_level_id?:                   string;
  hr_job_level_job_level_name?:       string;
  hr_organization_id?:                string;
  hr_organization_name?:              string;
  direct_supervisor_first_name?:      string;
  direct_supervisor_last_name?:       string;
  id?:                                string;
  first_name?:                        string;
  last_name?:                         string;
  alias?:                             string;
  email?:                             string;
  no_hp?:                             string;
  no_telp?:                           string;
  place_of_birth?:                    string;
  date_of_birth?:                     null;
  no_identity?:                       string;
  citizen_id_address?:                string;
  residential_address?:               string;
  created_at?:                        Date;
  updated_at?:                        Date;
  deleted_at?:                        null;
  date_expired_identity?:             Date;
  postal_code?:                       string;
  flag_permanent_identity?:           null;
  file_url?:                          null;
  created_by?:                        null;
  updated_by?:                        null;
  deleted_by?:                        null;
  hr_emp_company_business_unit_id?:   number;
  emp_name?:                          string;
}
export interface EmployeeProps {
  hr_emp_info_id?:     string;
  alias?:              string;
  id?:                 any;
  name?:               string;
  initialName?:        string;
  email?:              string;
  role_id?:            any;
  role_name?:          string;
  position_id?:        any;
  position_name?:      string;
  business_unit_id?:   any;
  business_unit_name?: string;
  organization_id?:    any;
  organization_name?:  string;
  user_id?:            any;
  user_name?:          null;
  division_id?:        any;
  division_name?:      string;
  department_id?:      any;
  department_name?:    string;
  role_menus?:         RoleMenu[];
}

export interface RoleMenu {
  id?:        number;
  menu_name?: string;
}
export interface FetchProps<P> {
  apiFunction: (data: any) => Promise<P>;
  fetchOnMounted?: boolean
  listValueAndLabel?: {
    valueKey: string
    labelKey1?: string
    labelKey2?: string
    custom?: (value: P, index: number, obj: P[]) => void
  }
  showToastWhenSuccess?: boolean
  showToastWhenFailed?: boolean
  initialParamOrDataForFetch?: any
  saveDataWithName?: string
}
export interface ConfirmDialogProps<PreConfirmResult = any, PreConfirmCallbackValue = any> {
  text?: string;
  icon?: string | null;
  html?: string | HTMLElement | JQuery;
  preConfirm?(inputValue: PreConfirmCallbackValue): PreConfirmResult;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
  confirmButtonText?: string
  cancelButtonText?: string
  onOk?: () => void
  onCancel?: () => void
  showLoaderOnConfirm?: boolean;
  title?: string | HTMLElement | JQuery;
}
export type data_color =
  | 'primary'
  | 'white'
  | 'light'
  | 'secondary'
  | 'secondary2'
  | 'secondary3'
  | 'secondary4'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'nashta'
const AllowedFile = ['pdf', 'jpg', 'png', 'xlsx', 'xls', 'jpeg', 'docx', 'doc', 'csv', 'txt', 'plain', 'ppt', 'pptx'] as const;
export type allowed_extension_file = typeof AllowedFile[number];

export type Many<T> = T | ReadonlyArray<T>;

export interface TargetVsRealizationProps {
  chartData: {
    realisasi_in_percent: number; months: any[], realisasi: any; target: any; sales: any; stage: any[]
  };
  chartClickData?: any
  setChartClickData?: (data: any) => void
}
export interface UserModelNashTa {
  religion_id:                       number;
  religion_key:                      string;
  religion_value:                    string;
  marital_id:                        number;
  marital_key:                       string;
  marital_value:                     string;
  gender_id:                         number;
  gender_key:                        string;
  gender_value:                      string;
  blood_type_id:                     number;
  blood_type_key:                    string;
  blood_type_value:                  string;
  initialName:                  string;
  company_name:                  string;
  identity_id:                       number;
  identity_key:                      string;
  identity_value:                    string;
  hr_emp_company_id:                 string;
  hr_emp_company_nik:                string;
  business_unit_id:                  number;
  business_unit_name:                string;
  hr_job_position_id:                string;
  hr_job_position_job_position_name: string;
  hr_job_level_id:                   string;
  hr_job_level_job_level_name:       string;
  hr_organization_id:                string;
  hr_organization_name:              string;
  direct_supervisor_first_name:      string;
  direct_supervisor_last_name:       string;
  id:                                string;
  first_name:                        string;
  last_name:                         string;
  alias:                             string;
  email:                             string;
  no_hp:                             string;
  no_telp:                           string;
  place_of_birth:                    string;
  date_of_birth:                     string;
  no_identity:                       string;
  citizen_id_address:                string;
  residential_address:               string;
  created_at:                        string;
  updated_at:                        string;
  deleted_at:                        null;
  date_expired_identity:             string;
  postal_code:                       string;
  flag_permanent_identity:           boolean;
  file_url:                          string;
  created_by:                        null;
  updated_by:                        number;
  deleted_by:                        null;
  hr_emp_company_business_unit_id:   number;
  emp_name:                          string;
  role_id:            number;
  role_name:          string;
  user_id:            number;
  hr_emp_info_id:     string;
  approval_name:      string;
}
