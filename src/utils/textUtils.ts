export const countWords = (text: string): number => {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
};

export const countVowels = (str: string): number => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

export const isPalindrome = (text: string): boolean => {
  if (!text) return false;
  const cleaned = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (cleaned.length === 0) return false;
  return cleaned === cleaned.split('').reverse().join('');
};

export const reverseWords = (text: string): string => {
  if (!text) return '';
  return text.split(/\s+/).map(word => word.split('').reverse().join('')).join(' ');
};

export const truncateString = (text: string, maxLength: number): string => {
  if (!text) return '';
  if (maxLength <= 0) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
