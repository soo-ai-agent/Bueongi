/**
 * Web Share API(navigator.share) 실패가 사용자 취소(정상 흐름)인지 판정한다.
 *
 * 취소(AbortError)면 true → 호출부는 조용히 종료한다.
 * 그 외 실제 오류(NotAllowedError/DataError/네트워크 등)면 false → 호출부는 클립보드 등으로 폴백해야 한다.
 *
 * 안심귀가 앱에서 실제 오류를 "취소"로 삼키면 보호자에게 위치/메시지가 미전달인데
 * 사용자는 공유된 줄 착각하는 거짓 확신이 발생하므로 분기가 필수다.
 */
export function isUserCancelledShare(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'name' in err &&
    (err as { name?: unknown }).name === 'AbortError'
  );
}
