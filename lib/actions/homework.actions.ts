'use server';
import { Query } from "node-appwrite"
import {
  databases,
  DATABASE_ID,
  EDUCATIONAL_CONTENT_COLLECTION_ID
} from "../appwrite.config";

const convertToTitleCase = (input: string) => {
  return input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}


export const getContent = async (year: string, subject: string) => {
  try {
    const titleCaseSubject = convertToTitleCase(subject);
    const subjects = await databases.listDocuments(
      DATABASE_ID!,
      EDUCATIONAL_CONTENT_COLLECTION_ID!,
      [
        Query.and([
          Query.equal("year_group", `Year ${year}`),
          Query.equal("subject", titleCaseSubject)
        ])

      ]
    );

    return JSON.parse(JSON.stringify(subjects.documents));
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};