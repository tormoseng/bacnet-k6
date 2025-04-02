/*
Headers used in the requests
 */

// An anonymous account defined in Firestore: pWd2B2g6XIacYZV6JxTdSLtFG063
export const bacnetHeaders = (): any => {
  return {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    "Authorization": "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==",
  };
};
