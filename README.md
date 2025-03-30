## Lighthouse 성능 최적화 리포트
초기 개발 단계에서는 이미지 최적화, 렌더링 전략, 메타데이터 설정 등이 누락되어 Lighthouse 점수가 낮게 측정되었고, SEO 구성도 미비했습니다. 이로 인해 초기 로딩 속도가 느리고, 검색 엔진에도 잘 노출되지 않는 문제가 발생했습니다.
이를 해결하고자 성능 개선 및 SEO 최적화 작업을 진행하였습니다.


### 1. 최적화 전 🚨

- **낮은 Performance** 점수: 78점  
- **Largest Contentful Paint (LCP)**: 2.2s  
- **Total Blocking Time (TBT)**: 460ms  
- **SEO 구성 미비** (예: `robots.txt`, `sitemap.xml` 없음)  
- 슬라이더가 **LCP 주요 요소**로 작용해 성능 저하 유발   


<details>
<summary> 📈 Lighthouse 리포트(최적화 전)</summary>
<img src="https://github.com/user-attachments/assets/e40f98c4-7f3e-4968-bc76-e77a26eead38" alt="Before Optimization Report" width="1000" />
</details>  


### 2. 해결 과정 ✨

- `next/image`의 `priority`, `loading="lazy"` 설정
- 슬라이더 컴포넌트 `Suspense` 처리 및 렌더링 최적화
- Skeleton UI 적용으로 초기 로딩 시 시각적 피드백 제공
- `robots.ts`, `sitemap.ts` 파일 생성으로 SEO 구성 보완
- 메타데이터 및 `<html lang="en">` 설정  


### 3. 최적화 후 🏆

- **Performance**: 100점
- **Accessibility / Best Practices / SEO**: **모두 100점**
- LCP: 0.4s
- TBT: 20ms
- 사용자 경험 및 검색 엔진 최적화 향상  

<details>
<summary>📈 Lighthouse 리포트(최적화 후)</summary>
<img src="https://github.com/user-attachments/assets/e11b1a9d-910a-43b0-adbf-65ac386aaca2" alt="After Optimization Report" width="1000" />
</details>


### 4. 개선 결과 및 인사이트 
이번 성능 최적화 작업은 단순한 점수 개선에 그치지 않고, 사용자에게 **_빠르고 안정적인 페이지 경험_** 을 제공하며, SEO를 통한 **_검색 엔진 노출_** 기반을 마련하는 데 큰 도움이 되었습니다. 또한, 
**_성능 분석 → 병목 파악 → 코드 개선 → 결과 확인_** 이라는 일련의 과정을 통해, **_서비스 품질을 향상 시키는 개발 루틴을 체득_** 할 수 있었습니다.
