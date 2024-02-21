<script setup>
import ExampleSection from "./demo/ExampleSection.vue";
import Link from "./demo/Link.vue"
</script>

# 페이지네이션 (Pagination)

페이지네이션 컴포넌트는 페이지 정보를 탐색하는데 사용되는 컴포넌트입니다.

::: raw

<ul class="d:flex ai:center gap:6 mt:6">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[Pagination]%20'" :newtab="true"/></li>
</ul>

:::

## 사용법

페이지네이션 컴포넌트는 `ul` 요소에 `n-pagination` 클래스를 적용하고, 활성화된 페이지를 `li` 요소에 `active` 클래스를 추가하여 나타냅니다. 페이지 번호는 내부 `<button>` 또는 `<a> `요소로 나타낼 수 있습니다.

:::raw
<ExampleSection>

<ul class="n-pagination">
  <li class="active"><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
</ul>
</ExampleSection>
:::

```html
<ul class="n-pagination">
  <li class="active"><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
</ul>
```

`n-pagination`와 함께 `n-page` 클래스를 사용하여 페이지네이션을 `ul`, `li` 요소로 구성하지 않고 다른 요소를 사용하는 방법도 있습니다.

:::raw
<ExampleSection>

<div class="n-pagination">
  <button class="n-page active">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
</ExampleSection>
:::

```html
<div class="n-pagination">
  <button class="n-page active">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
```

## 비활성화

`li` 요소 또는 `n-page` 클래스에 `disabled` 클래스를 추가하여 페이지네이션 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column align-items:center gap:4">

<ul class="n-pagination">
  <li class="disabled">
    <a>1</a>
  </li>
  <li>
    <a>2</a>
  </li>
  <li>
    <a>3</a>
  </li>
</ul>

<div class="n-pagination">
  <button class="n-page disabled">
    1
  </button>
  <button class="n-page">
    2
  </button>
  <button class="n-page">
    3
  </button>
</div>
</ExampleSection>
:::

```html
<ul class="n-pagination">
  <li class="disabled">
    <a>1</a>
  </li>
  <li>
    <a>2</a>
  </li>
  <li>
    <a>3</a>
  </li>
</ul>

<div class="n-pagination">
  <button class="n-page disabled">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
```

::: raw

<ul class="d:flex ai:center gap:6 mt:10">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[Pagination]%20'" :newtab="true"/></li>
</ul>

:::
