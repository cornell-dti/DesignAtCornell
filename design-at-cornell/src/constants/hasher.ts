import { createHash } from 'crypto';

// naive string hash
export const hashString = (string: string) => {
  const hash = createHash('md5').update(string, 'utf8').digest('hex');
  var h = 0;
  for (var i = 0; i < hash.length; ++i) {
    h += ((h << 5) - h + hash.charCodeAt(i)) | 0;
  }
  return h;
};

// return hashed string between [0..length-1]
export const modHashString = (str: string, length: number) => {
  return ((hashString(str) % length) + length) % length;
};
