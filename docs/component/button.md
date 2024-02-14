<script setup>
import ExampleSection from "../components/ExampleSection.vue";
</script>


# 버튼
버튼 컴포넌트는 사용자와의 상호작용을 위한 컴포넌트입니다. 주로 사용자의 액션을 나타낼 때 사용됩니다.


## 모아보기

### 타입
`filled`, `outline-box`, `void` 타입이 제공됩니다. 자세한 내용을 보려면 [여기](#type)를 클릭하세요.
<div class="n-item d:flex jc:center gap:2 mt:4">
  <button class="n-btn">Button</button>
  <button class="n-btn n-btn:outline-box">Button</button>
  <button class="n-btn n-btn:void">Button</button>
</div>

### 사이즈
`small`, `medium`, `large` 사이즈가 제공됩니다. 자세한 내용을 보려면 [여기](#size)를 클릭하세요.
<div class="n-item d:flex jc:center gap:2 ai:end mt:4">
  <button type="button" class="n-btn n-btn-size:1">Button</button>
  <button type="button" class="n-btn n-btn-size:2">Button</button>
  <button type="button" class="n-btn n-btn-size:3">Button</button>
</div>

### 색상
`main`, `sub`, `accent`, `base` 색상이 제공됩니다. 자세한 내용을 보려면 [여기](#color)를 클릭하세요.
<div class="n-item d:flex jc:center gap:2 mt:4">
  <button type="button" class="n-btn n-btn-color:main">Button</button>
  <button type="button" class="n-btn n-btn-color:sub">Button</button>
  <button type="button" class="n-btn n-btn-color:accent">Button</button>
  <button type="button" class="n-btn n-btn-color:base">Button</button>
</div>

### 상태
`disabled` 상태가 제공됩니다. 자세한 내용을 보려면 [여기](#disabled)를 클릭하세요.
<div class="n-item d:flex jc:center gap:2 mt:4">
  <button type="button" class="n-btn" disabled>Button</button>
</div>

<br>

- [타입 변경하기](#type)
- [크기 변경하기](#size)
- [색상 변경하기](#color)
- [상태 변경하기](#disabled)
- [버튼 활용하기](#examples)

## 사용법
버튼 컴포넌트는 요소에 `n-btn` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <button type="button" class="n-btn">Button</button>
</ExampleSection>

```html
<button type="button" class="n-btn">Button</button>
```

::: details CSS details
```css
.n-btn {
  /* ... */
  color: var(--color-base-1);
  border: 1px solid transparent;
  background-color: var(--color-main-2);

  height: 36px;
  padding-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  /* ... */
}
```
:::

## 타입 {#type}
`n-btn-type:타입` 또는 `n-btn:타입` 약어 클래스를 통해 다양한 버튼 타입을 적용할 수 있습니다.

<ExampleSection>
  <template #h>버튼 타입</template>
  <div class="d:flex gap:2 jc:center">
    <button class="n-btn">filled</button>
    <button class="n-btn n-btn:outline-box">outline</button>
    <button class="n-btn n-btn:void">void</button>
  </div>
</ExampleSection>

```html
  <button type="button" class="n-btn n-btn-type:filled">filled</button>
  <button type="button" class="n-btn n-btn-type:outline">outline</button>
  <button type="button" class="n-btn n-btn-type:void">void</button>
```

|타입|클래스|약어클래스||
|---|---|---|---|
|filled|`n-btn-type:filled`|`n-btn:filled`|default|
|<span class="white-space:nowrap">outline-box</span>|`n-btn-type:outline-box`<br>`n-btn-type:outline`| `n-btn:outline-box`<br>`n-btn:outline`||
|void|`n-btn-type:void`| `n-btn:void`||

## 사이즈 {#size}
`n-btn-size:사이즈` 또는 `n-btn:사이즈` 약어 클래스를 통해 버튼 사이즈를 변경할 수 있습니다.

<ExampleSection>
  <template #h>버튼 사이즈</template>
  <div class="d:flex gap:2 jc:center ai:end">
    <button class="n-btn n-btn-size:1">Button</button>
    <button class="n-btn n-btn-size:2">Button</button>
    <button class="n-btn n-btn-size:3">Button</button>
  </div>
</ExampleSection>

```html
  <button type="button" class="n-btn n-btn-size:1">Button</button>
  <button type="button" class="n-btn n-btn-size:2">Button</button>
  <button type="button" class="n-btn n-btn-size:3">Button</button>
```

|사이즈|클래스|약어클래스||
|---|---|---|---|
|small|`n-btn-size:1`<br>`n-btn-size:sm`| `n-btn:1`<br>`n-btn:sm`| |
|medium|`n-btn-size:2`<br>`n-btn-size:md`| `n-btn:2`<br>`n-btn:md`|default|
|large|`n-btn-size:3`<br>`n-btn-size:lg`| `n-btn:3`<br>`n-btn:lg`| |

## 색상 {#color}
`n-btn-color:색상` 또는 `n-btn:색상` 약어 클래스를 통해 버튼의 색을 변경할 수 있습니다.

:::raw
<ExampleSection>
  <ul class="d:flex gap:4">
    <li>
      <button type="button" class="n-btn n-btn-color:main" style="width: 70px;">
        main
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:sub" style="width: 70px;">
        sub
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:accent" style="width: 70px;">
        accent
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:base" style="width: 70px;">
        base
      </button>
    </li>
  </ul>
</ExampleSection>
:::

```html
<button type="button" class="n-btn n-btn-color:main">main</button>
<button type="button" class="n-btn n-btn-color:sub">sub</button>
<button type="button" class="n-btn n-btn-color:accent">accent</button>
<button type="button" class="n-btn n-btn-color:base">base</button>
```

|색상|클래스|약어클래스||
|---|---|---|---|
|main|`n-btn-color:main`| `n-btn:main`|default|
|sub|`n-btn-color:sub`| `n-btn:sub`||
|accent|`n-btn-color:accent`| `n-btn:accent`||
|base|`n-btn-color:base`| `n-btn:base`||

## 비활성화 {#disabled}
`disabled` 속성을 추가하거나 클래스에 `disabled`를 추가하여 버튼 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.

:::raw
<ExampleSection>
  <ul class="d:flex gap:4">
    <li>
      <button type="button" class="n-btn" disabled>filled</button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn:outline disabled">outline</button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn:void" disabled>void</button>
    </li>
  </ul>
</ExampleSection>
:::

```html
  <button type="button" class="n-btn" disabled>filled</button>
  <button type="button" class="n-btn n-btn:outline disabled">outline</button>
  <button type="button" class="n-btn n-btn:void" disabled>void</button>
```

## 활용 예시 {#examples}

<ExampleSection class="mb:4">
  <div class="d:flex gap:2">
    <button type="button" class="n-btn n-btn:void">취소</button>
    <button type="button" class="n-btn">확인</button>
  </div>
</ExampleSection>

::: details codes
```html
<div class="d:flex gap:2">
  <button type="button" class="n-btn n-btn:void">취소</button>
  <button type="button" class="n-btn">확인</button>
</div>
```
:::

<ExampleSection class="mb:4">
  <div class="d:flex gap:2">
    <button type="button" class="n-btn n-btn:outline">닫기</button>
    <button type="button" class="n-btn n-btn:accent">삭제</button>
  </div>
</ExampleSection class="mb:4">

::: details codes
```html
<div class="d:flex gap:2">
  <button type="button" class="n-btn n-btn:outline">닫기</button>
  <button type="button" class="n-btn n-btn:accent">삭제</button>
</div>
```
:::

<ExampleSection class="mb:4">
  <button type="button" class="n-btn n-btn:outline w:2 h:2 p:0">
    <span class="icon icon:share_fat_fill icon:base-7 icon:3">공유</span>
  </button>
</ExampleSection>

::: details codes
```html
<button type="button" class="n-btn n-btn:outline w:2 h:2 p:0">
  <span class="icon icon:share_fat_fill icon:base-7 icon:3">공유</span>
</button>
```
:::

<ExampleSection>
  <button type="button" class="n-btn n-btn:outline ">
    <span class="deco deco:right deco:3 icon:trash icon:base-7">삭제</span>
  </button>
</ExampleSection>

::: details codes
```html
<button type="button" class="n-btn n-btn:outline ">
  <span class="deco deco:right deco:3 icon:trash icon:base-7">삭제</span>
</button>
```
:::