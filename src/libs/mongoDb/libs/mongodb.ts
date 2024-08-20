export default function makeDB({ dbClient }) {
  return Object.freeze({
    insertOneDocument,
    findDocuments,
    updateDocument,
    dropDb,
  });

  async function insertOneDocument({ document, dbName, dbUri, dbColl }) {
    logger.info(
      "[LIBS/MONGODB] INSERT ONE DOCUMENT: ",
      document,
      dbName,
      dbUri,
      dbColl
    );
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.insertDocument({ document });

    return results;
  }

  async function updateDocument({ query, values, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.updateDocument({ query, values });

    return results;
  }

  async function findDocuments({ query, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    logger.info("FIND DOCUMENTS", db);
    const results = await db.findDocumentsByQuery({ query });
    logger.info("FIND DOCUMENTS", results);
    return results;
  }

  async function dropDb({ test, dbName, dbUri, dbColl }) {
    if (!test) return;
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = db.dropDB();

    return results;
  }
}
