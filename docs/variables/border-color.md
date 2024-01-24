<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-color

변수 `var(--border-color)`는 테두리의 기본 색상을 정의하는 데 사용되며, 다음의 속성에서 활용되고 있습니다:

-   [`border`](../utility/border/border.md)

## Default

기본으로 제공되는 테두리 스타일입니다.

<ExampleSection>
<template #h>기본 스타일</template>

  <div class="border padding:5 bg-color:base-1">Hello world</div>
</ExampleSection>

```html{1}
<div class="border padding:5 bg-color:base-1">
  Hello World
</div>
```

```css
:root {
    --border-color: var(--color-base-3); /* #dee2e6 */
}
```

## Overriding

다음과 같이 기본 테두리 색상을 재정의할 수 있습니다. 사용한 클래스에는 변화가 없지만 `--border-color`의 값을 `var(--color-base-3)`에서 `var(--color-main-1)`으로 조정함으로써 박스의 테두리 색상이 변경되었습니다.

<ExampleSection>
<template #h>기본 스타일</template>
  <div class="border border-c:main-1 padding:5 bg-color:base-1">Hello world</div>
</ExampleSection>

```html{1}
<div class="border padding:5 bg-color:base-1">
  Hello World
</div>
```

```css
/* root.css */
:root {
    --border-color: var(--color-main-1); /* 기본 색상을 main으로 재정의 */
}
```
