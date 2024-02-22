<script setup>
import ExampleSection from "./demo/ExampleSection.vue";
import Link from "./demo/Link.vue"
</script>

# 폰트 (Font)

폰트 컴포넌트는 제목을 나타낼 수 있는 컴포넌트입니다.

::: raw

<ul class="d:flex ai:center gap:6 mt:6">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[Font]%20'" :newtab="true"/></li>
</ul>

:::

## Usage

폰트 컴포넌트는 요소에 `n-font:타입` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <div class="n-font:title">Title</div>
</ExampleSection>

```html
<div class="n-font:title">Title</div>
```

## Type

<ExampleSection class="fl-dir:column">
  <div class="n-font:title">Title</div>
  <div class="n-font:subtitle">Sub title</div>
  <div class="n-font:h1">Heading 1</div>
  <div class="n-font:h2">Heading 2</div>
  <div class="n-font:h3">Heading 3</div>
</ExampleSection>

<table>
  <thead>
    <tr>
      <th scope="col">타입</th>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">title</th>
      <td>
        <code>n-font:title</code>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">subtitle</th>
      <td>
        <code>n-font:subtitle</code>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">heading-1</th>
      <td>
        <code>n-font:heading-1</code>
      </td>
      <td>
        <code>n-font:heading</code>
        <br />
        <code>n-font:h1</code>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-2</th>
      <td>
        <code>n-font:heading-2</code>
      </td>
      <td>
        <code>n-font:h2</code>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-3</th>
      <td>
        <code>n-font:heading-3</code>
      </td>
      <td>
        <code>n-font:h3</code>
      </td>
    </tr>
  </tbody>
</table>

::: raw

<ul class="d:flex ai:center gap:6 mt:10">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[Font]%20'" :newtab="true"/></li>
</ul>

:::
