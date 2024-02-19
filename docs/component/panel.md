<script setup>
import ExampleSection from "../components/ExampleSection.vue";
</script>

# 패널

패널 컴포넌트는 구조를 정의하는데 사용되는 레이아웃 요소입니다. `top`, `side`, `main`, `menu`와 같은 패널을 포함합니다.

## 예시

패널 컴포넌트를 사용하여 구성된 예시는 다음 링크를 통해 확인할 수 있습니다.

<a href="/newtil-css/panel.html" target="_blank" class="n-btn color:base-1 txt-deco-ln:none w:100p">
  <span class="deco deco-pos:right deco-color:base-1  deco-size:2 icon:arrow_right">
    패널 예시 페이지 열기
  </span>
</a>

::: details code

```html
<header class="n-panel n-top-panel">
  <div class="n-container px:4 mx:auto">
    <h1>Header</h1>
  </div>
</header>

<aside class="n-panel n-side-panel">
  <nav class="n-panel n-menu-panel">
    <h1 class="text-align:center mb:4">Nav</h1>
    <ul class="of:hidden">
      <li class="bg-color:base-2 bd-radius:1">
        <button
          class="deco deco-mr:3 deco-color:base-7 icon:squares_four_fill d:flex ai:center p:2 pl:3 font-size:2 font-weight:2 cursor:pointer white-space:nowrap"
        >
          <span class="d:none lg:d:inline">Dashboard</span>
        </button>
      </li>
      <li>
        <button
          class="deco deco-mr:3 deco-color:base-7 icon:house_fill d:flex ai:center p:2 pl:3 font-size:2 font-weight:2 cursor:pointer white-space:nowrap"
        >
          <span class="d:none lg:d:inline">Home</span>
        </button>
      </li>
    </ul>
  </nav>
</aside>

<main class="n-panel n-main-panel">
  <div class="n-container px:4 lg:px:10">
    <h1>Main</h1>
  </div>
</main>
```

:::

## 사용법

패널 컴포넌트는 화면의 주요 영역을 구분하는데 사용됩니다. `n-panel` 클래스와 함께 특정 패널 타입을 지정하는 클래스(`n-top-panel`, `n-side-panel`, `n-menu-panel`, `n-main-panel`)를 사용하여 각 영역을 정의합니다.

### 기본 구성

```html
<header class="n-panel n-top-panel"></header>

<aside class="n-panel n-side-panel">
  <nav class="n-panel n-menu-panel"></nav>
</aside>

<main class="n-panel n-main-panel"></main>
```

### 사이드 패널 없이 구성

```html
<header class="n-panel n-top-panel"></header>

<main class="n-panel n-main-panel"></main>
```

## 스타일 재정의

패널 컴포넌트는 `top-panel`과 `side-panel`에 대한 변수를 제공합니다.

```css
.n-panel {
  --top-panel-height: 64px; /* top-panel의 높이 */
  --top-panel-z-index: 1000; /* top-panel의 z-index */

  --side-panel-width-md: 64px; /* 태블릿에서의 side-panel 너비 */
  --side-panel-width-lg: 260px; /* PC에서의 side-panel 너비 */
}
```

### 스타일 재정의 예시

```css
/* root.css */
.n-panel {
  --top-panel-height: 100px; /* top-panel의 높이를 재정의 */
}
```

:::tip
컴포넌트 스타일 재정의에 대한 자세한 내용은 [스타일 재정의하기](/guide/customizing)에서 확인하실 수 있습니다.
:::
