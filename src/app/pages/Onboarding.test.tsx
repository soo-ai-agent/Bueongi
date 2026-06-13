import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { Onboarding } from './Onboarding';

// 렌더 스모크 테스트(BUE-CANARY-2)
// jsdom/testing-library 미설치 + vitest node 환경이므로 react-dom/server의
// renderToString으로 "크래시 없이 렌더되는가"만 검증한다. renderToString은
// useEffect를 실행하지 않으므로(localStorage·navigate 미발동) provider는
// useNavigate가 요구하는 라우터 컨텍스트만 MemoryRouter로 최소 제공한다.
describe('Onboarding (smoke)', () => {
  it('라우터 컨텍스트 안에서 크래시 없이 렌더되고 핵심 카피를 포함한다', () => {
    const html = renderToString(
      <MemoryRouter initialEntries={['/onboarding']}>
        <Onboarding />
      </MemoryRouter>
    );

    expect(html).toContain('건너뛰기');
    expect(html).toContain('다음');
  });
});
