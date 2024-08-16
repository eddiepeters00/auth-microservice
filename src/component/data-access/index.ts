import {
  insertOneDocument as makeInsertDocument,
  updateDocument as makeUpdateDocument,
  findDocuments as makeFindDocuments,
} from "../../libs/mongoDb";

const insertDocument = ({ document, dbConfig }) =>
  makeInsertDocument({ document, ...dbConfig });

const updateDocument = ({ query, values, dbConfig }) =>
  makeUpdateDocument({ query, values, ...dbConfig });

const findDocuments = ({ query, dbConfig }) =>
  makeFindDocuments({ query, ...dbConfig });

export { findDocuments, insertDocument, updateDocument };
