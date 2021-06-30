import fs from 'fs';
import path from 'path';

const root = '../../../';

export const readJsonFileSync = (relativeFilePath: string): any => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  const data = fs.readFileSync(resolvedFilePath, { encoding: 'utf-8' });
  return JSON.parse(data);
};

export const readJsonFile = (relativeFilePath: string): Promise<any> => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  let data: any;
  return new Promise((resolve, _) => {
    fs.readFile(resolvedFilePath, { encoding: 'utf-8' }, (err, result) => {
      if (err) throw new Error(err.message);
      data = JSON.parse(result);
      resolve(data);
    });
  });
};
//
export const addObjectInArrayFile = (relativeFilePath: string, data: Record<string, unknown>): Promise<boolean> => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  const fileData: Record<string, unknown>[] = JSON.parse(fs.readFileSync(resolvedFilePath, { encoding: 'utf-8' }));
  fileData.push(data);
  const jsonData = JSON.stringify(fileData);
  return new Promise((resolve, reject) => {
    fs.writeFile(resolvedFilePath, jsonData, err => {
      if (err) reject(err);
    });
    resolve(true);
  });
};

export const updateArrayFile = (relativeFilePath: string, data: Record<string, unknown>): Promise<boolean> => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  const jsonData = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(resolvedFilePath, jsonData, err => {
      if (err) reject(err);
    });
    resolve(true);
  });
};

export const updateObjectFile = (relativeFilePath: string, data: Record<string, unknown>): Promise<boolean> => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  const jsonData = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(resolvedFilePath, jsonData, err => {
      if (err) reject(err);
    });
    resolve(true);
  });
};
export const updateObjectFileSync = (relativeFilePath: string, data: Record<string, unknown>): void => {
  const resolvedFilePath = path.resolve(__dirname, folder, relativeFilePath);
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(resolvedFilePath, jsonData);
};
