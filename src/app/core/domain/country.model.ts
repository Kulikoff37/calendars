export interface CountryModel {
  global_id: number;
  signature_date: Date | string | null | undefined;
  system_object_id: string;
  ALFA3: string;
  SHORTNAME: string;
  FULLNAME?: string | undefined;
  ALFA2: string;
  CODE: string;
}