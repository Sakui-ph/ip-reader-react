export interface IPHistory {
  history_id?: number;
  date_submitted: Date;
  geolocation_id: number;
  user_id: number;
}

export const IPHistoryParams = {
  TABLE_NAME: "history",
  // ID: "history_id",
  // DATE: "date_submitted",
  // GEOLOCATION_ID: "geolocation_id",
  // USER_ID: "user_id",
};
