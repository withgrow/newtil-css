<script setup>
import ExampleSection from "../components/ExampleSection.vue";
import DropdownDomExample from "../components/DropdownDomExample.vue";
</script>

# 드롭다운

드롭다운 컴포넌트는 사용자에게 목록을 오버레이 해주는 컴포넌트입니다.

## 사용법

드롭다운 버튼과 드롭다운 목록(`ul` + `li`)을 `n-dropdown` 클래스를 가진 다른 요소로 감싸서 사용합니다. `ul` 요소에 `acitve` 클래스를 추가하여 드롭다운 목록을 나타낼 수 있습니다.

:::raw
<ExampleSection>
<template #h>드롭다운 사용법 1</template>

<div class="n-dropdown">
  <button aria-expanded="true" class="n-btn n-btn:outline">
    open
  </button>
  <ul class="active position:relative z-index:1">
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
  </ul>
</div>
</ExampleSection>
:::

```html
<div class="n-dropdown">
  <button aria-expanded="true" class="n-btn n-btn:outline">open</button>
  <ul class="active">
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
  </ul>
</div>
```

`n-dropdown-list`와 `n-dropdown-item` 클래스를 사용하여 드롭다운 목록을 `ul`, `li` 요소로 구성하지 않고 다른 요소를 사용하는 방법도 있습니다.

:::raw
<ExampleSection>
<template #h>드롭다운 사용법 2</template>

<div class="n-dropdown">
<button aria-expanded="true" class="n-btn n-btn:outline">open</button>
  <div class="n-dropdown-list active position:relative z-index:1">
    <div class="n-dropdown-item">item-1</div>
    <div class="n-dropdown-item">item-2</div>
    <div class="n-dropdown-item">item-3</div>
  </div>
</div>
</ExampleSection>
:::

```html
<div class="n-dropdown">
  <button aria-expanded="true" class="n-btn n-btn:outline">open</button>
  <div class="n-dropdown-list active">
    <div class="n-dropdown-item">item-1</div>
    <div class="n-dropdown-item">item-2</div>
    <div class="n-dropdown-item">item-3</div>
  </div>
</div>
```

## 인터랙티브 드롭다운 예시

JavaScript DOM을 활용하여 인터랙티브한 드롭다운 컴포넌트를 만들 수 있습니다. 다음은 간단한 예시입니다:

:::raw
<ExampleSection>
<template #h>인터랙티브 드롭다운 예시</template>
<DropdownDomExample/>
</ExampleSection>
:::

:::details code

```html
<!-- HTML -->
<div class="n-dropdown">
  <button id="dropdown-btn" type="button" class="n-btn">버튼</button>
  <ul id="dropdown-list">
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
  </ul>
</div>
```

```javascript
// JavaScript
window.addEventListener("load", function () {
  const dropdownButton = document.getElementById("dropdown-btn");
  const dropdownList = document.getElementById("dropdown-list");

  dropdownButton.addEventListener("click", function () {
    dropdownList.classList.toggle("active");
  });
});
```

:::

## 스타일 재정의

드롭다운 컴포넌트의 변수는 다음과 같습니다:

```css
.n-dropdown {
  --dropdown-min-width: 160px;
  --dropdown-padding: 4px;
  --dropdown-border-radius: 8px;
  --dropdown-border: 1px solid var(--color-base-3);
  --dropdown-z-index: 1000;

  --dropdown-offset: 6px; /* 드롭다운과 드롭다운 버튼(트리거)의 떨어진 정도 */

  --dropdown-item-padding: 6px 8px;
  --dropdown-item-border-radius: 4px;
}
```

### 스타일 재정의 예시

:::raw
<ExampleSection>
<template #h>스타일 재정의 예시</template>

  <div class="n-dropdown example">
    <button aria-expanded="true" class="n-btn n-btn:outline bd-radius:0">
      open
    </button>
    <ul class="active position:relative z-index:1">
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
    </ul>
  </div>
</ExampleSection>
:::

```html
<div class="n-dropdown">
  <button aria-expanded="true" class="n-btn n-btn:outline bd-radius:0">
    open
  </button>
  <ul class="active">
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
  </ul>
</div>
```

```css
.n-dropdown {
  --dropdown-min-width: 240px;
  --dropdown-border-radius: 0;
  --dropdown-padding: 0;
  --dropdown-item-border-radius: 0;
}
```

<style>
.n-dropdown.example {
  --dropdown-min-width: 240px;
  --dropdown-border-radius: 0;
  --dropdown-padding: 0;
  --dropdown-item-border-radius: 0;
}
</style>

:::tip
컴포넌트 스타일 재정의에 대한 자세한 내용은 [스타일 재정의하기](/guide/customizing)에서 확인하실 수 있습니다.
:::
