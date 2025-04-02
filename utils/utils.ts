
/* @ts-ignore */
import file from 'k6/x/file';

const logFile = 'logs/log.txt';
const errorLogFile = 'logs/log-error.txt';

export const log = (label: string) => {
  file.appendString(logFile, `${label}\n`);
};

export const errorLog = (label: string) => {
  file.appendString(errorLogFile, `${label}\n`);
};
