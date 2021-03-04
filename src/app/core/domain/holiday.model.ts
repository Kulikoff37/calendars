interface Country {
  id: string;
  name: string;
}

interface HolidayDate {
  iso: string;
  datetime: {
    year: number;
    month: number;
    day: number;
  }
}

interface State {
  id: number;
  abbrev: string;
  name: string;
  exception: null | string;
  iso: string;
}

export interface HolidayModel {
  name: string;
  description: string;
  type: string[];
  locations: string;
  states: string | State[];
  country: Country;
  date: HolidayDate;
}
