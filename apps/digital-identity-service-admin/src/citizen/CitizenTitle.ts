import { Citizen as TCitizen } from "../api/citizen/Citizen";

export const CITIZEN_TITLE_FIELD = "firstName";

export const CitizenTitle = (record: TCitizen): string => {
  return record.firstName?.toString() || String(record.id);
};
