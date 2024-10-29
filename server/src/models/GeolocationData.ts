export interface GeolocationData {
  geolocation_id?: number;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

export const GeolocationDataParams = {
  TABLE_NAME: "geolocation",
  //   ID: "geolocation_id",
  //   CITY: "city",
  //   REGION: "region",
  //   COUNTRY: "country",
  //   LOC: "loc",
  //   ORG: "org",
  //   POSTAL: "postal",
  //   TIMEZONE: "timezone",
};
