import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import { serverConfig } from "config";
import { isNotProduction } from "utils/common";

const logFormat = winston.format.printf(info => {
  const formattedDate = info.timestamp;
  return `[${formattedDate}][${info.level}]${JSON.stringify(info.message)}`;
});

const dailyRotateFile = new DailyRotateFile({
  level: serverConfig.logger.level,
  filename: `${serverConfig.logger.folder_path}/%DATE%.log`,
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "90d"
});

const logger = winston.createLogger({
  level: serverConfig.logger.level,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat,
  ),
  transports: [
    dailyRotateFile
  ],
});

if (isNotProduction()) {
  logger.add(
    new winston.transports.Console({
      level: serverConfig.logger.level,
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat,
      )
    })
  );
}

export default logger;
