<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-color

변수 `var(--border-color)`는 테두리의 기본 색상을 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [border](../utility/border/border.md)

## Default

다음의 테두리 스타일이 기본 제공됩니다.

<ExampleSection>
<template #h>기본 스타일</template>
  <div class="border bg-color:base-1 border-rd:4 padding:5">Hello world</div>
</ExampleSection>

```html{1}
<div class="border border-rd:4 ...">
  Hello World
</div>
```

```css
:root {
    --border-color: var(--color-base-3); /* #dee2e6 */
}
```

테마 색상 `var(--color-base-3)` 에 대한 내용은 [여기](./theme-colors.md)를 참고해주세요.

## Overriding

다음과 같이 기본 테두리 색상을 재정의할 수 있습니다.

<ExampleSection>
<template #h>기본 스타일</template>
	<div class="border border-c:main-3 bg-color:base-1 border-rd:4 padding:5">
		Hello World
	</div>
</ExampleSection>

```html{1}
<div class="border border-rd:4 ...">
	Hello World
</div>
```

```css
/* root.css */
:root {
    --border-color: var(--color-base-3); /* #dee2e6 */ /* [!code --] */
    --border-color: var(--color-main-3); /* #759d2a */ /* [!code ++] */
}
```
