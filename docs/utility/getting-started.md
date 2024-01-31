<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# 유틸리티 시작하기

## 소개

`newtil-css`는 웹 문서의 스타일링을 손쉽게 하기 위해 `유틸리티 스타일 클래스`를 제공합니다.

이 클래스들을 사용하면 색상, 레이아웃, 간격, 사이즈 등 다양한 스타일 요소들을 빠르고 간편하게 적용할 수 있습니다.

예를 들어, 다음 HTML 코드에서는 `padding:10` 클래스를 사용하여 div 요소에 40px의 패딩을 적용합니다.

```html{2}
<!-- 이 div 요소에 40px의 패딩이 적용됩니다! -->
<div class="padding:10">👋 안녕하세요!</div>
```

`가칭`의 유틸리티 스타일 클래스는 기존 CSS 속성 이름을 해치지 않으면서도 원하는 스타일을 적용할 수 있도록 설계되었습니다.

<ExampleSection>
  <template #h>유틸리티 스타일 예제</template>
  <div class="width:full padding:4 border border-radius:3 background-color:base-1 box-shadow:3">
    👋 안녕하세요!
  </div>
</ExampleSection>

```html
<div
  class="width:full padding:4 border border-radius:3 background-color:base-1 box-shadow:3">
  👋 안녕하세요!
</div>

<!-- 위 코드는 아래와 같이 간결하게 표현할 수 있습니다. -->
<div
  class="w:full p:4 border border-rd:3 bg-color:base-1 box-shadow:3">
  👋 안녕하세요!
</div>
```

위 예시에서 보듯, class 속성이 과도하게 길어질 수 있는 문제를 해결하기 위해, `약어 클래스`를 추가로 제공합니다.

이 약어 클래스는 원래 클래스와 동일한 스타일을 제공하면서도 더 간결한 표현이 가능합니다.

::: info
약어 클래스는 이름 충돌을 방지하기 위해 점진적으로 도입하고 있습니다.

문제가 발견되거나 추가 제안이 필요할 경우, [깃허브를 통해 이슈로 제출](https://github.com/newlecture-corp/newtil-css/issues)해 주시기 바랍니다.
:::

## 반응형 적용하기

`newtil-css`의 모든 유틸리티 스타일 클래스는 반응형 웹 디자인을 지원하기 위해 두 개의 주요 `breakpoint`에 대한 접두사를 제공합니다

| 접두사 | 최소 너비 | CSS                        |
| ------ | --------- | -------------------------- |
| md     | 768px     | @media (min-width: 768px)  |
| lg     | 1200px    | @media (min-width: 1200px) |

여기서 `md`는 주로 태블릿 화면 크기에 적용되며, `lg`는 데스크탑 크기의 화면에 주로 사용됩니다.

이를 통해 웹 페이지의 디자인이 다양한 화면 크기와 장치에 맞춰 유연하게 조정될 수 있도록 도와줍니다.

**모든 유틸리티 스타일 클래스는 기본적으로 모바일 기기를 기준으로 작성해야 합니다.**

그 후, 더 큰 화면 크기의 디바이스에서는 해당 접두사를 붙여 반응형 스타일을 적용할 수 있습니다. 예를 들어:

<ExampleSection>
  <div class="p:1 md:p:5 lg:p:10 bg-color:base-1">👋 Hi!</div>
</ExampleSection>

```html
<!-- 모바일에서는 padding이 1, 태블릿에서는 5, 데스크탑에서는 10으로 적용됩니다. -->
<div class="p:1 md:p:5 lg:p:10 bg-color:base-1">👋 Hi!</div>
```

이와 같은 방식으로, 웹 페이지는 다양한 장치와 화면 크기에 맞춰 적절히 반응하며, 사용자에게 최적화된 경험을 제공할 수 있습니다.
