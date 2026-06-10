const ONBOARDED_KEY = 'bueongi-onboarded-v1';

/**
 * 온보딩을 이미 본(또는 건너뛴) 사용자인지 판정한다.
 * 안심귀가/긴급 앱에서 콜드스타트마다 온보딩을 강제하면 위급 시 홈·112 접근이 지연되므로,
 * 1회 완료/건너뛰기 후에는 홈으로 바로 진입시키기 위한 플래그.
 * localStorage 접근 불가(프라이빗 모드 등) 시 false(온보딩 노출) — 안전측 폴백.
 */
export function hasSeenOnboarding(): boolean {
  try {
    return localStorage.getItem(ONBOARDED_KEY) === '1';
  } catch {
    return false;
  }
}

/** 온보딩 완료/건너뛰기를 기록한다(저장 실패 시 다음 콜드스타트에 또 보여도 무해). */
export function markOnboardingSeen(): void {
  try {
    localStorage.setItem(ONBOARDED_KEY, '1');
  } catch {
    /* 비영속 무해 */
  }
}
