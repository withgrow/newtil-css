<script setup>
import ExampleSection from "../components/demo/ExampleSection.vue"
</script>

# 유틸리티 시작하기

## 소개

`Newtil CSS`는 컴포넌트 클래스 외에도 `유틸리티 클래스`를 제공하여 여러분만의 컴포넌트와 레이아웃을 쉽게 구성할 수 있도록 합니다.

:::tip
상단 헤더의 검색바 또는 숏컷(Window control + K, MAC cmommand + K)으로 알고 있는 CSS 속성을 검색해보세요!
:::

### 유틸리티 클래스의 특징

- **직관적인 클래스명**: HTML 클래스에 기존 CSS 속성 이름을 바로 적용할 수 있어, 스타일링이 직관적이고 간단해집니다.
- **반응형 접두사**: `sm:`, `md:`, `lg:`와 같은 반응형 접두사를 통해 다양한 화면 크기에 맞춰 스타일을 적용할 수 있습니다.
- **약어 클래스**: 더 빠르고 간결한 스타일링을 위해, 일반적인 스타일 속성에 대한 약어 클래스를 사용할 수 있습니다.

## 유틸리티 클래스를 활용하여 인터페이스 구성하기

유틸리티 클래스만을 사용하여, 다음과 같이 사용자 인터페이스를 구성할 수 있습니다:
<ExampleSection>
<template #h>예시</template>

<div class="width:5 background-color:base-1 padding:6 border border-radius:4 box-shadow:3">
  <div class="font-size:5">👋 안녕하세요!</div>
  <div class="margin-top:4 display:flex justify-content:end">
    <button
      class="padding-x:5 padding-y:1 background-color:main-1 border-radius:2 color:base-1 font-weight:2"
    >
      확인
    </button>
  </div>
</div>
</ExampleSection>

```html
<div
  class="width:5 background-color:base-1 padding:6 border border-radius:4 box-shadow:3"
>
  <div class="font-size:5">👋 안녕하세요!</div>
  <div class="margin-top:4 display:flex justify-content:end">
    <button
      class="padding-x:5 padding-y:1 background-color:main-1 border-radius:2 color:base-1 font-weight:2"
    >
      확인
    </button>
  </div>
</div>
```

**유틸리티 클래스들은 `CSS-속성:값` 형태로 구성**되어 있어, 원하는 스타일을 쉽게 HTML에 적용할 수 있습니다. 예를 들어, `width:5`, `background-color:main-1` 같은 클래스는 각각 너비와 배경색을 설정합니다.

여기서 **숫자는 스타일의 레벨**을 나타내며, 세밀한 디자인 조정이 가능합니다.

위 예시에서 사용된 유틸리티 클래스는 다음과 같은 스타일을 적용합니다:

- `padding-x:5`와 `padding-y:1`은 각각 X축과 Y축에 대한 패딩을 설정합니다.
- `background-color:main-1`은 버튼의 배경색을 main 색상의 첫 번째 레벨로 지정합니다.
- `border-radius:2`는 버튼의 모서리를 2단계로 만듭니다.
- `color:base-1`과 `font-weight:2`는 각각 텍스트 색상과 굵기를 조정합니다.

:::tip
각 레벨별 수치나 색의 테마 재정의는 [테마 커스터마이징]에서 확인하실 수 있습니다.
:::

## 약어 클래스 사용하기

약어 클래스를 사용하면, 같은 스타일을 더 간결하게 표현할 수 있습니다. 이는 긴 클래스명 대신 짧은 약어를 사용하여 코드의 가독성을 높이고, 작성 시간을 단축시킵니다:

```html
<div class="w:5 bg-color:base-1 p:6 border bd-radius:4 box-shadow:3">
  <div class="font-size:5">👋 안녕하세요!</div>
  <div class="mt:4 d:flex jc:end">
    <button
      class="px:5 py:1 bg-color:main-1 bd-radius:2 color:base-1 font-weight:2"
    >
      확인
    </button>
  </div>
</div>
```

이 예시에서 `w:5`, `bg-color:base-1`, `p:6` 등은 각각 `width`, `background-color`, `padding`의 약어를 사용한 것으로, 스타일 적용을 위한 코드를 간소화합니다.

## 반응형 적용하기

`Newtil CSS`의 모든 유틸리티 스타일 클래스는 반응형 웹 디자인을 지원하기 위해 두 개의 주요 `breakpoint`에 대한 접두사를 제공합니다

| 접두사 | 최소 너비 | CSS                        |
| ------ | --------- | -------------------------- |
| md     | 768px     | @media (min-width: 768px)  |
| lg     | 1200px    | @media (min-width: 1200px) |

여기서 `md`는 주로 태블릿 화면 크기에 적용되며, `lg`는 데스크탑 크기의 화면에 주로 사용됩니다.

이를 통해 웹 페이지의 디자인이 다양한 화면 크기와 장치에 맞춰 유연하게 조정될 수 있도록 도와줍니다.

**모든 유틸리티 스타일 클래스는 기본적으로 모바일 기기를 기준으로 작성해야 합니다.**

그 후, 더 큰 화면 크기의 디바이스에서는 해당 접두사를 붙여 반응형 스타일을 적용할 수 있습니다:

<ExampleSection>
<div class="w:5 bg-color:base-1 md:bg-color:base-2 lg:bg-color:base-5 p:6 border bd-radius:4 box-shadow:3">
  <div class="font-size:5">👋 안녕하세요!</div>
  <div class="mt:4 d:flex jc:end">
    <button
      class="px:5 py:1 bg-color:main-1 bd-radius:2 color:base-1 font-weight:2"
    >
      확인
    </button>
  </div>
</div>
</ExampleSection>

```html{1}
<div class="w:5 bg-color:base-1 md:bg-color:base-2 lg:bg-color:base-5 p:6 border bd-radius:4 box-shadow:3">
  <div class="font-size:5">👋 안녕하세요!</div>
  <div class="mt:4 d:flex jc:end">
    <button
      class="px:5 py:1 bg-color:main-1 bd-radius:2 color:base-1 font-weight:2"
    >
      확인
    </button>
  </div>
</div>
```

이와 같은 방식으로, 웹 페이지는 다양한 장치와 화면 크기에 맞춰 적절히 반응하며, 사용자에게 최적화된 경험을 제공할 수 있습니다.
