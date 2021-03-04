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

export interface HolidayModel {
  name: string;
  description: string;
  country: Country;
  locations: string;
  date: HolidayDate;
}


// {
//   name: "New Year's Day",
//   description: "Russians celebrate New Year’s Day in accordance with the Gregorian calendar on January 1.",
//   country: {
//   id: "ru",
//   name: "Russia"
//   },
//   date: {
//   iso: "2021-01-01",
//   datetime: {
//   year: 2021,
//   month: 1,
//   day: 1
//   }
//   },
//   type: [
//   "National holiday"
//   ],
//   locations: "All",
//   states: "All"
//   },