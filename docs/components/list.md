<script setup>
import ExampleSection from "./demo/ExampleSection.vue";
import ListOverview from "./demo/ListOverview.vue";
import Link from "./demo/Link.vue"
</script>

# 리스트 (List)

리스트 컴포넌트는 여러개의 아이템을 효율적으로 나타내주는 컴포넌트로, 사용자에게 목록 형태의 정보를 제공합니다.

::: raw

<ul class="d:flex ai:center gap:6 mt:6">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[List]%20'" :newtab="true"/></li>
</ul>

:::

## Overview

리스트 레이아웃과 리스트 아이템 스타일 조정, 모서리 둥글기, 패딩 조절 등 다양한 옵션을 지원합니다,

:::raw
<ClientOnly>
<ListOverview />
</ClientOnly>
:::

## Usage

리스트 컴포넌트는 `ul` 요소에 `n-list` 클래스를 적용하고, 각 아이템은 `li` 요소로 표현합니다. 이 구조를 통해 리스트를 구현할 수 있습니다.

:::raw
<ExampleSection>
<template #h>사용법</template>

  <ul class="n-list">
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

## Layout {#layout}

리스트 컴포넌트는 여러 레이아웃 옵션을 제공합니다. `n-list` 클래스와 함께 `n-레이아웃-list` 클래스를 사용하여 다양한 레이아웃을 적용할 수 있습니다.

### n-bar-list

가로 방향으로 배열된 리스트입니다.

:::raw
<ExampleSection>
<template #h>사용법</template>

  <ul class="n-list n-bar-list">
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list n-bar-list">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

### n-card-list

카드 형태의 리스트로, 반응형 디자인에 따라 레이아웃이 조정됩니다.
:::raw
<ExampleSection>
<template #h>사용법</template>

  <ul class="n-list n-card-list">
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list n-card-list">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

`--card-list-column-값` 변수를 재정의하여 반응형에 따라 컬럼 수를 재정의 할 수 있습니다.

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-card-list</code>
      </td>
      <td>
        <span class="code">
          .n-list { <br/>
            --card-list-column-sm: 1; <span class="c:weak">/* 모바일에서 컬럼 수 */</span>
            <br/>
            --card-list-column-md: 2; <span class="c:weak">/* 태블릿에서 컬럼 수 */</span>
            <br/>
            --card-list-column-lg: 3; <span class="c:weak">/* PC에서 컬럼 수 */</span>
            <br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### n-tile-list

타일 형태의 리스트 입니다.

:::raw
<ExampleSection class="flex-direction:column">
<template #h>사용법</template>

  <ul class="n-list n-tile-list">
    <li>content</li>
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list n-tile-list">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

`n-tile-list-column:레벨` 클래스를 사용하여 컬럼 수를 조정할 수 있습니다. 기본 컬럼 수는 4개이며, 변수 `--tile-list-column-값`을 재정의하여 레벨별 개수를 재정의 할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column">
<template #h>사용법</template>

  <ul class="n-list n-tile-list n-tile-list-column:1">
    <li>content</li>
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html{2}
<!-- n-tile-list-column:1을 통하여 컬럼 개수를 3개로 적용했습니다 -->
<ul class="n-list n-tile-list n-tile-list-column:1">
  <li>content</li>
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-tile-list</code>
      </td>
      <td>
        <span class="code">
          .n-list { <br/>
            --tile-list-column-1: 3; <span class="c:weak">/* 컬럼 개수 */</span>
            <br/>
            --tile-list-column-2: 4; 
            <br/>
            --tile-list-column-3: 5; 
            <br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### n-tag-list

태그 형태의 리스트입니다.

:::raw
<ExampleSection>
<template #h>사용법</template>

  <ul class="n-list n-tag-list">
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list n-tag-list">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-tag-list</code>
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

`-n-tag-size-값` 클래스로 태그의 사이즈를 변경할 수 있습니다.

:::raw
<ExampleSection>
<template #h>사용법</template>

  <ul class="n-list n-tag-list n-tag-size:1">
    <li>content</li>
    <li>content</li>
    <li>content</li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-list n-tag-list n-tag-size:1">
  <li>content</li>
  <li>content</li>
  <li>content</li>
</ul>
```

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-tag-list n-tag-size:1</code>
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-tag-list n-tag-size:2</code>
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-tag-list n-tag-size:3</code>
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

## Item Type {#item-type}

리스트 아이템에 반복적으로 스타일을 적용하는 것은 번거로울 수 있습니다. 이를 간소화하기 위해, 다양한 아이템 타입 클래스를 제공하여 쉽게 스타일을 변경할 수 있습니다.

각 아이템별 스타일은 [아이템 타입](/components/item#타입)에서도 확인하실 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column md:flex-direction:row gap:8">
<template #h>사용법</template>

  <ul class="n-list n-list-item-type:outline-box">
    <li>outline-box</li>
    <li>outline-box</li>
    <li>outline-box</li>
  </ul>

  <ul class="n-list n-list-item-type:outline-none">
    <li>outline-none</li>
    <li>outline-none</li>
    <li>outline-none</li>
  </ul>

  <ul class="n-list n-list-item-type:shadow">
    <li>shadow</li>
    <li>shadow</li>
    <li>shadow</li>
  </ul>

  <ul class="n-list n-list-item-type:underline gap:0">
    <li>underline</li>
    <li>underline</li>
    <li>underline</li>
  </ul>
</ExampleSection>
:::

:::details code

```html
<ul class="n-list n-list-item-type:outline-box">
  <li>outline-box</li>
  <li>outline-box</li>
  <li>outline-box</li>
</ul>

<ul class="n-list n-list-item-type:outline-none">
  <li>outline-none</li>
  <li>outline-none</li>
  <li>outline-none</li>
</ul>

<ul class="n-list n-list-item-type:shadow">
  <li>shadow</li>
  <li>shadow</li>
  <li>shadow</li>
</ul>

<ul class="n-list n-list-item-type:underline gap:0">
  <li>underline</li>
  <li>underline</li>
  <li>underline</li>
</ul>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-list-item-type:outline-box</code>
        <br/>
        <code>n-list n-list-item-type:outline</code>
      </td>
      <td>
        <code>n-list n-list-item:outline-box</code>
        <br/>
        <code>n-list n-list-item:outline</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-type:outline-none</code>
      </td>
      <td>
        <code>n-list n-list-item:outline-none</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-type:shadow</code>
      </td>
      <td>
        <code>n-list n-list-item:shadow</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-type:underline</code>
      </td>
      <td>
        <code>n-list n-list-item:underline</code>
      </td>
    </tr>
  </tbody>
</table>

## Item Border Radius {#item-border-radius}

`n-list-item-border-radius:값` 또는 `n-list-item-bd-radius:값` 약어 클래스를 사용하여, 모든 아이템의 모서리 둥글기를 조절할 수 있습니다. 이를 통해 디자인의 일관성을 유지하면서, 필요에 따라 개별 아이템의 외관을 조정할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column md:flex-direction:row flex-wrap:wrap gap:8">
<template #h>아이템 모서리 둥글기</template>

  <ul class="n-list n-list-item-border-radius:0">
    <li>bd-radius:0</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:1">
    <li>bd-radius:1</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:2">
    <li>bd-radius:2</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:3">
    <li>bd-radius:3</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:4">
    <li>bd-radius:4</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:5">
    <li>bd-radius:5</li>
  </ul>

  <ul class="n-list n-list-item-border-radius:full">
    <li>bd-radius:full</li>
  </ul>
</ExampleSection>
:::

:::details code

```html
<ul class="n-list n-list-item-border-radius:0">
  <li>bd-radius:0</li>
</ul>

<ul class="n-list n-list-item-border-radius:1">
  <li>bd-radius:1</li>
</ul>

<ul class="n-list n-list-item-border-radius:2">
  <li>bd-radius:2</li>
</ul>

<ul class="n-list n-list-item-border-radius:3">
  <li>bd-radius:3</li>
</ul>

<ul class="n-list n-list-item-border-radius:4">
  <li>bd-radius:4</li>
</ul>

<ul class="n-list n-list-item-border-radius:5">
  <li>bd-radius:5</li>
</ul>

<ul class="n-list n-list-item-border-radius:full">
  <li>bd-radius:full</li>
</ul>
```

:::

다음 변수를 재정의하여 목록 아이템의 모서리 둥글기를 변경할 수 있습니다.

```css
.n-list {
  --list-item-border-radius: 16px; /* 기본 */
  --list-item-border-radius-0: 0;
  --list-item-border-radius-1: 4px;
  --list-item-border-radius-2: 8px;
  --list-item-border-radius-3: 12px;
  --list-item-border-radius-4: 16px;
  --list-item-border-radius-5: 20px;
  --list-item-border-radius-full: 9999px;
}
```

## Item Padding {#item-padding}

`n-list-item-padding:값` 또는 `n-list-item-p:값` 약어 클래스를 통해, 모든 아이템의 내부 패딩을 조절할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column md:flex-direction:row flex-wrap:wrap gap:8">
<template #h>아이템 패딩</template>

  <ul class="n-list n-list-item-padding:0">
    <li>padding:0</li>
    <li>padding:0</li>
    <li>padding:0</li>
  </ul>

  <ul class="n-list n-list-item-padding:1">
    <li>padding:1</li>
    <li>padding:1</li>
    <li>padding:1</li>
  </ul>

  <ul class="n-list n-list-item-padding:2">
    <li>padding:2</li>
    <li>padding:2</li>
    <li>padding:2</li>
  </ul>

  <ul class="n-list n-list-item-padding:3">
    <li>padding:3</li>
    <li>padding:3</li>
    <li>padding:3</li>
  </ul>

  <ul class="n-list n-list-item-padding:4">
    <li>padding:4</li>
    <li>padding:4</li>
    <li>padding:4</li>
  </ul>
</ExampleSection>
:::

:::details code

```html
<ul class="n-list n-list-item-padding:0">
  <li>padding:0</li>
  <li>padding:0</li>
  <li>padding:0</li>
</ul>

<ul class="n-list n-list-item-padding:1">
  <li>padding:1</li>
  <li>padding:1</li>
  <li>padding:1</li>
</ul>

<ul class="n-list n-list-item-padding:2">
  <li>padding:2</li>
  <li>padding:2</li>
  <li>padding:2</li>
</ul>

<ul class="n-list n-list-item-padding:3">
  <li>padding:3</li>
  <li>padding:3</li>
  <li>padding:3</li>
</ul>

<ul class="n-list n-list-item-padding:4">
  <li>padding:4</li>
  <li>padding:4</li>
  <li>padding:4</li>
</ul>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>n-list n-list-item-padding:0</code>
      </td>
      <td>
        <code>n-list n-list-item-p:0</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-padding:1</code>
      </td>
      <td>
        <code>n-list n-list-item-p:1</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-padding:2</code>
      </td>
      <td>
        <code>n-list n-list-item-p:2</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-padding:3</code>
      </td>
      <td>
        <code>n-list n-list-item-p:3</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>n-list n-list-item-padding:4</code>
      </td>
      <td>
        <code>n-list n-list-item-p:4</code>
      </td>
    </tr>
  </tbody>
</table>

다음 변수를 재정의하여 목록 아이템의 패딩을 변경할 수 있습니다.

```css
.n-list {
  --list-item-padding: 24px; /* 기본 */
  --list-item-padding-0: 0;
  --list-item-padding-1: 8px;
  --list-item-padding-2: 16px;
  --list-item-padding-3: 24px;
  --list-item-padding-4: 32px;
}
```

## Overriding

:::tip
컴포넌트 스타일 재정의에 대한 자세한 내용은 [스타일 재정의하기](/guide/customizing)에서 확인하실 수 있습니다.
:::

## Eaxmple

::: raw

<ul class="d:flex ai:center gap:6 mt:10">
  <li><Link :text="'전체 컴포넌트'" :link="'../guide/getting-started-component'"/></li>
  <li><Link :text="'이슈 제출하기'" :link="'https://github.com/newlecture-corp/newtil-css/issues/new?title=[List]%20'" :newtab="true"/></li>
</ul>

:::
