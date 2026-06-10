import { describe, it, expect } from 'vitest';
import { isUserCancelledShare } from './share';

describe('isUserCancelledShare', () => {
  it('사용자 취소(AbortError)는 true → 호출부 조용히 종료', () => {
    expect(isUserCancelledShare(new DOMException('cancelled', 'AbortError'))).toBe(true);
    expect(isUserCancelledShare({ name: 'AbortError' })).toBe(true);
  });

  it('실제 오류는 false → 클립보드 폴백 필요(보호자 미전달 방지)', () => {
    expect(isUserCancelledShare(new DOMException('denied', 'NotAllowedError'))).toBe(false);
    expect(isUserCancelledShare(new DOMException('bad', 'DataError'))).toBe(false);
    expect(isUserCancelledShare(new TypeError('network'))).toBe(false);
    expect(isUserCancelledShare({ name: 'SomethingElse' })).toBe(false);
  });

  it('null/undefined/원시값은 false(안전측: 폴백으로 공유 경로 보장)', () => {
    expect(isUserCancelledShare(null)).toBe(false);
    expect(isUserCancelledShare(undefined)).toBe(false);
    expect(isUserCancelledShare('AbortError')).toBe(false);
    expect(isUserCancelledShare({})).toBe(false);
  });
});
