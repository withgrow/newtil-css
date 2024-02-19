<script setup>
import ExampleSection from "../components/ExampleSection.vue";
import ComponentList from "../components/ComponentList.vue";
</script>

# 컴포넌트 시작하기

## 소개

`newtil-css`는 간편한 웹 문서 스타일링을 지원하기 위해 다양한 컴포넌트를 제공합니다.

이 컴포넌트들을 사용하면 `button`, `list`, `form`, `table` 등 다양한 컨텐츠를 빠르고 간편하게 스타일링할 수 있습니다.

::: raw
<ComponentList />
:::

<p class="color:base-5">▲ 위 컴포넌트를 클릭하여 자세한 사용법을 알아보세요!</p>

## 간단한 사용 예시

아래 HTML 코드를 통해 손쉽게 버튼 컴포넌트를 생성할 수 있습니다.

```html{2}
<!-- 이 버튼 요소에 기본 스타일이 적용됩니다! -->
<button class="n-btn">Button</button>
```

<ExampleSection>
  <template #h>버튼 사용하기</template>
  <button class="n-btn">Button</button>
</ExampleSection>

또한, `newtil-css`의 컴포넌트는 다양한 레이아웃과 스타일을 유연하게 적용할 수 있는 클래스 목록을 함께 제공합니다. 다음은 `List` 컴포넌트의 사용 예시입니다.

### List 기본 스타일

```html{1}
<ul class="n-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>consectetur adipiscing elit</li>
  <li>Morbi sed facilisis augue</li>
</ul>
```

::: raw
<ExampleSection>
<template #h>리스트 사용하기</template>

  <ul class="n-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipiscing elit</li>
    <li>Morbi sed facilisis augue</li>
  </ul>
</ExampleSection>
:::

### List 변형

```html{1}
<ul class="n-list n-tile-list">
  <li>Lorem</li>
  <li>Ipsum</li>
  <li>Dolor</li>
  <!-- ... -->
</ul>
```

::: raw
<ExampleSection>
<template #h>타일 리스트 사용하기</template>

  <ul class="n-list n-tile-list">
    <li>Lorem</li>
    <li>Ipsum</li>
    <li>Dolor</li>
    <li>Sit</li>
    <li>Amet</li>
    <li>Consecte</li>
    <li>Elit</li>
    <li>Morbi</li>
  </ul>
</ExampleSection>
:::

::: info
컴포넌트에 적용되는 클래스는 자주 사용되는 형태를 위주로 제공하고 있습니다.

추가 제안을 희망하는 경우, [깃허브를 통해 이슈로 제출](https://github.com/newlecture-corp/newtil-css/issues)해 주시기 바랍니다.
:::
