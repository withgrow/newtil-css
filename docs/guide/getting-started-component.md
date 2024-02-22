<script setup>
import ExampleSection from "../components/demo/ExampleSection.vue";
import ComponentList from "../components/demo/NewtilComponentOverview.vue";
</script>

# 컴포넌트 시작하기

`Newtil CSS`는 간편한 웹 문서 스타일링을 지원하기 위해 다양한 컴포넌트를 제공합니다.

이 컴포넌트들을 사용하면 `button`, `list`, `form`, `table` 등 다양한 컨텐츠를 빠르고 간편하게 스타일링할 수 있습니다.

::: raw
<ComponentList />
:::

<p class="color:base-5">▲ 위 컴포넌트를 클릭하여 자세한 사용법을 알아보세요!</p>

::: info

컴포넌트는 자주 사용되는 요소를 중심으로 제공하고 있으며, 점차적으로 추가될 예정입니다.

추가 아이디어가 있다면 [깃허브를 통해 이슈로 제출](https://github.com/newlecture-corp/newtil-css/issues/new?assignees=&labels=feature&projects=&template=%EA%B8%B0%EB%8A%A5-%EC%9A%94%EC%B2%AD.md&title=feature%3A+)해 주시기 바랍니다.
:::

## 컴포넌트 사용하기

`Newtil CSS`는 `n-컴포넌트명` 클래스를 통해 간편하게 사용할 수 있습니다.

```html
<button class="n-btn">Button</button>
```

<ExampleSection class="mb:10">
  <template #h>버튼 사용하기</template>
  <button class="n-btn">Button</button>
</ExampleSection>

다음으로 `List` 컴포넌트의 활용 예시를 살펴보겠습니다.

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

아래와 같이 클래스를 추가 작성하여 레이아웃 혹은 스타일을 손쉽게 변경할 수 있습니다.

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

## 컴포넌트 커스터마이징하기 {#customize-components}

컴포넌트를 커스터마이징하는 방법에는 두 가지가 있습니다.

1. [유틸리티 클래스 사용하기](#customizing-width-utility-class)
   <!-- 유틸리티 클래스를 사용하여 즉시, 간편하게 스타일을 적용할 수 있습니다. -->

2. [변수 재정의하기](#customizing-width-variable-overriding)
   <!-- 전역적으로 동일한 모든 컴포넌트에 혹은 2. 특정 영역 안에서 바꿀 수 있따 -->

### 1. 유틸리티 클래스 사용하기 {#customizing-width-utility-class}

`Newtil CSS`가 제공하는 유틸리티 클래스를 통해 즉시, 간편하게 컴포넌트를 커스터마이징할 수 있습니다.

유틸리티 클래스를 활용하여 진행도를 표현하는 `Progress` 컴포넌트의 `background-color`, `border-radius`, `height` 속성값을 변경해보겠습니다.

**기본 스타일**

<ExampleSection>
  <div class="n-progress w:5p" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</ExampleSection>

```html{1}
<div class="n-progress w:5p" role="progressbar">
  <div style="width: 25%"></div>
</div>
```

**커스텀 스타일**

<ExampleSection>
  <div class="n-progress w:5p bg-color:base-1 bd-radius:0 h:1" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</ExampleSection>

```html{2}
<div
  class="n-progress w:5p bg-color:base-1 bd-radius:0 h:1"
  role="progressbar">
  <div style="width: 25%"></div>
</div>
```

<Link :text="'유틸리티 클래스 자세하게 알아보기'" :link="'./getting-started-utility'" />

### 2. 변수 재정의하기 {#customizing-width-variable-overriding}

컴포넌트의 기본 스타일을 정의하고 있는 변수값을 조정하여 컴포넌트를 커스터마이징할 수 있습니다.

컴포넌트의 스타일은 전역적으로 변경하거나 지역적으로 변경할 수 있습니다.

<!-- 변수값을 조정하여 스타일을 재정의하는 방법에는 다음 두 가지가 있습니다.

2-1. 컴포넌트 스타일을 전역적으로 바꾸기 <br>
2-2. 특정 영역 내의 컴포넌트 스타일 바꾸기 -->

**기본 스타일**

<ExampleSection>
  <div class="n-progress w:5p" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</ExampleSection>

```css
.n-progress {
  --progress-height: 6px;
  --progress-border-radius: 999px;
  --progress-background-color: rgba(var(--rgb-base-6), 0.2);
}
```

**커스텀 스타일**

<ExampleSection>
  <div class="n-progress w:5p custom-progress" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</ExampleSection>

```css
/* root.css */
.n-progress {
  --progress-height: 50px;
  --progress-border-radius: 0px;
  --progress-background-color: rgb(var(--rgb-base-1));
}
```

컴포넌트의 스타일을 전역적으로 변경하려면 해당 컴포넌트의 클래스명을 선택자로 지정하여 스타일을 재정의합니다.

```css
/* MyProgressPage.css */
.my-progress .n-progress {
  --progress-height: 50px;
  --progress-border-radius: 0px;
  --progress-background-color: rgb(var(--rgb-base-1));
}
```

특정 영역 내의 컴포넌트의 스타일을 변경하려면 해당 컴포넌트의 상위 요소를 선택자로 지정하여 스타일을 재정의합니다.

<Link :text="'CSS 변수 자세하게 알아보기'" :link="'./css-variable-list'" />

<br>

::: info
컴포넌트의 오버라이딩이 가능한 변수는 부분적으로 제공하고 있습니다.

추가 아이디어가 있다면 [깃허브를 통해 이슈로 제출](https://github.com/newlecture-corp/newtil-css/issues/new?assignees=&labels=feature&projects=&template=%EA%B8%B0%EB%8A%A5-%EC%9A%94%EC%B2%AD.md&title=[ComponentName]%3A+)해 주시기 바랍니다.
:::

<style scoped>
  .custom-progress {
  --progress-height: 50px;
  --progress-border-radius: 0px;
  --progress-background-color: rgb(var(--rgb-base-1));
  }
</style>
