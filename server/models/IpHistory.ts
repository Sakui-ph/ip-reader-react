export interface IPHistory {
  id: number;
  date_submitted: Date;
  ip: string;
}

export const IPHistoryParams = {
  ID: "id",
  DATE: "date_submitted",
  IP: "ip",
};
