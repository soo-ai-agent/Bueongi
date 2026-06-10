import { describe, it, expect, vi, afterEach } from 'vitest';
import { hasSeenOnboarding, markOnboardingSeen } from './onboarding';

const KEY = 'bueongi-onboarded-v1';

describe('hasSeenOnboarding', () => {
  afterEach(() => vi.unstubAllGlobals());

  it("플래그가 '1'이면 true(홈으로 바로 진입)", () => {
    vi.stubGlobal('localStorage', { getItem: vi.fn(() => '1') });
    expect(hasSeenOnboarding()).toBe(true);
  });

  it('플래그 미설정(null)이면 false(온보딩 노출)', () => {
    vi.stubGlobal('localStorage', { getItem: vi.fn(() => null) });
    expect(hasSeenOnboarding()).toBe(false);
  });

  it('localStorage 접근 불가(프라이빗 모드 등)면 false(안전측: 온보딩 노출)', () => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => {
        throw new Error('blocked');
      }),
    });
    expect(hasSeenOnboarding()).toBe(false);
  });
});

describe('markOnboardingSeen', () => {
  afterEach(() => vi.unstubAllGlobals());

  it("플래그를 '1'로 저장", () => {
    const setItem = vi.fn();
    vi.stubGlobal('localStorage', { setItem });
    markOnboardingSeen();
    expect(setItem).toHaveBeenCalledWith(KEY, '1');
  });

  it('저장 실패해도 throw하지 않음(비영속 무해)', () => {
    vi.stubGlobal('localStorage', {
      setItem: vi.fn(() => {
        throw new Error('quota');
      }),
    });
    expect(() => markOnboardingSeen()).not.toThrow();
  });
});
