import { describe, it, expect } from 'vitest';
import {
  countWords,
  countVowels,
  isPalindrome,
  reverseWords,
  truncateString
} from './textUtils';

describe('Text Utilities', () => {

  describe('countWords', () => {
    it('should count words in a normal string', () => {
      expect(countWords('hello world')).toBe(2);
    });
    it('should handle edge cases with extra spaces', () => {
      expect(countWords('   hello   world   ')).toBe(2);
    });
    it('should return 0 for empty or whitespace strings', () => {
      expect(countWords('')).toBe(0);
      expect(countWords('   ')).toBe(0);
    });
  });

  describe('countVowels', () => {
    it('should count lowercase and uppercase vowels', () => {
      expect(countVowels('Hello World')).toBe(3); // e, o, o
      expect(countVowels('AEIOUaeiou')).toBe(10);
    });
    it('should return 0 for strings without vowels', () => {
      expect(countVowels('xyz rthm')).toBe(0);
    });
    it('should handle empty strings', () => {
      expect(countVowels('')).toBe(0);
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a normal palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });
    it('should ignore punctuation and case', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
    it('should handle empty strings or strings with only punctuation', () => {
      expect(isPalindrome('')).toBe(false);
      expect(isPalindrome('.,!')).toBe(false);
    });
  });

  describe('reverseWords', () => {
    it('should reverse characters within each word', () => {
      expect(reverseWords('hello world')).toBe('olleh dlrow');
    });
    it('should handle strings with numbers', () => {
      expect(reverseWords('test 123')).toBe('tset 321');
    });
    it('should handle empty strings', () => {
      expect(reverseWords('')).toBe('');
    });
  });

  describe('truncateString', () => {
    it('should truncate and add ellipsis if longer than max', () => {
      expect(truncateString('hello world', 5)).toBe('hello...');
    });
    it('should return the original string if shorter or equal to max', () => {
      expect(truncateString('hello', 10)).toBe('hello');
      expect(truncateString('hello', 5)).toBe('hello');
    });
    it('should return empty string for max length <= 0', () => {
      expect(truncateString('hello', 0)).toBe('');
      expect(truncateString('hello', -5)).toBe('');
    });
    it('should handle empty strings', () => {
      expect(truncateString('', 5)).toBe('');
    });
  });

});
