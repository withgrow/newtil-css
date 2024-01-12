<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# 스타일 재정의하기

`newtil-css`의 스타일을 여러분의 프로젝트에 맞게 스타일을 커스터마이징하는 알려드릴 차례입니다. 🚀

### 변수로 나만의 스타일로

아래 예시를 살펴보세요:

```html{1}
<div class="padding:5 background-color:main-1 border-radius: color:base-1">
  Hello World
</div>
```

<ExampleSection>
  <template #h>스타일 재정의하기</template>
  <div class="padding:5 bg-color:main-1 border-radius:5 color:base-1">Hello World</div>
</ExampleSection>

이 Hello World 예시에는 다음과 같은 스타일이 적용되어 있습니다.

- 5단계 패딩 : `padding:5`
- 1단계 메인 배경 색 : `background-color:main-1`
- 5단계 모서리 둥글기 : `border-radius:5`

`newtil-css`는 이런 단계를 미리 정의하고 [CSS 변수](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)와 [계단식 및 상속](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)을 통해 간편하게 디자인을 조절할 수 있습니다.

```css
:root {
  /* 이런 변수들이 준비되어있습니다 */
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;
}
```

이제 여러분의 프로젝트에 어떻게 적용할 수 있는지 알아보겠습니다.

## CSS 사용자 정의하기

프로젝트에 맞게 스타일을 맞춤 설정하려면, 다음과 같이 `custom.css` 파일을 생성하고 추가합니다.

```css
/* css/custom.css */
:root {
  /* main 테마 색상을 원하는 색상으로 설정했습니다 */
  --color-main-1: #3b5bdb;
  --color-main-2: #4263eb;
  --color-main-3: #4c6ef5;

  /* 추가로 필요한 스타일을 선언하세요 */
}
```

그리고 HTML 문서의 head 섹션에 `custom.css`를 다음과 같이 추가합니다.

```html {11}
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/nutil-css@latest/dist/style.css" />
    <link href="css/custom.css" type="text/css" rel="stylesheet" />
  </head>
</html>
```

이제 `custom.css` 파일에 원하는 스타일을 추가하여 `newtil-css` 라이브러리를 프로젝트에 맞게 맞춤 설정할 수 있습니다.

아래의 각 항목을 참고하여 커스터마이징을 진행해보세요.

## 테마 색상

`newtil-css`는 다음 네 가지 색상 테마를 제공합니다.

### main

주요 색을 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:main-${item}`" > {{ item }} </div>
</div>

```css
:root {
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;

  --rgb-main-1: rgb(153, 200, 66);
  --rgb-main-2: rgb(133, 177, 50);
  --rgb-main-3: rgb(117, 157, 42);
}
```

### sub

주요 색을 보조하는 색을 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:sub-${item}`" > {{ item }} </div>
</div>

```css
:root {
  --color-sub-1: #339af0;
  --color-sub-2: #228be6;
  --color-sub-3: #1c7ed6;

  --rgb-sub-1: 51, 154, 240;
  --rgb-sub-2: 34, 139, 230;
  --rgb-sub-3: 28, 126, 214;
}
```

### accent

경고, 오류 등 강조를 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:accent-${item}`" > {{ item }} </div>
</div>

```css
:root {
  --color-accent-1: #ff6b6b;
  --color-accent-2: #fa5252;
  --color-accent-3: #f03e3e;

  --rgb-accent-1: 255, 107, 107;
  --rgb-accent-2: 250, 82, 82;
  --rgb-accent-3: 240, 62, 62;
}
```

### base

중립적인 색입니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 10}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:base-${item}`" > {{ item }} </div>
</div>

```css
:root {
  --color-base-1: #ffffff;
  --color-base-2: #e4e7ea;
  --color-base-3: #dee2e6;
  --color-base-4: #ced4da;
  --color-base-5: #adb5bd;
  --color-base-6: #868e96;
  --color-base-7: #495057;
  --color-base-8: #343a40;
  --color-base-9: #1a1c20;
  --color-base-10: #000000;

  --rgb-base-1: 255, 255, 255;
  --rgb-base-2: 228, 231, 234;
  --rgb-base-3: 222, 226, 230;
  --rgb-base-4: 206, 212, 218;
  --rgb-base-5: 173, 181, 189;
  --rgb-base-6: 134, 142, 150;
  --rgb-base-7: 73, 80, 87;
  --rgb-base-8: 52, 58, 64;
  --rgb-base-9: 26, 28, 32;
  --rgb-base-10: 0, 0, 0;
}
```

## 간격

`gap` 변수는 여러 곳에서 사용되는 간격을 정의하는데 사용됩니다.

예를 들어 `padding`, `margin`, `width`, `height` 등에 적용될 수 있습니다.

`4px` 간격으로 10단계가 제공되며, 필요에 따라 단계를 재정의 할 수 있습니다.

```css
:root {
  --gap-0: 0rem; /* 0px */
  --gap-1: 0.25rem; /* 4px */
  --gap-2: 0.5rem; /* 8px */
  --gap-3: 0.75rem; /* 12px */
  --gap-4: 1rem; /* 16px */
  --gap-5: 1.25rem; /* 20px */
  --gap-6: 1.5rem; /* 24px */
  --gap-7: 1.75rem; /* 28px */
  --gap-8: 2rem; /* 32px */
  --gap-9: 2.25rem; /* 36px */
  --gap-10: 2.5rem; /* 40px */
  --gap-full: 9999px;
}
```

중간 단계가 필요할 경우 다음과 같이 추가할 수 있습니다.

```css
/* custom.css */
:root {
  --gap-1-5: 0.375rem; /* gap-1과 gap-2의 중간 단계 */
}
```
