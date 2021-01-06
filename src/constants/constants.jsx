import AppConsts from '../lib/appconst';

export const Days = [
  { day: 'Sunday', value: 0 },
  { day: 'Monday', value: 1 },
  { day: 'Tuesday', value: 2 },
  { day: 'Wednesday', value: 3 },
  { day: 'Thursday', value: 4 },
  { day: 'Friday', value: 5 },
  { day: 'Saturday', value: 6 },
];
export function downloadTempFile(file) {
  const url =
    AppConsts.remoteServiceBaseUrl +
    '/api/File/DownloadTempFile?fileType=' +
    file.fileType +
    '&fileToken=' +
    file.fileToken +
    '&fileName=' +
    file.fileName;
  window.location.href = url; //TODO: This causes reloading of same page in Firefox
}
