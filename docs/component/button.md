<script setup>
import ExampleSection from "../components/ExampleSection.vue";
</script>


# 버튼
버튼 컴포넌트는 사용자와의 상호작용을 위한 컴포넌트입니다. 주로 사용자의 액션을 나타낼 때 사용됩니다.

## 사용법
버튼 컴포넌트는 요소에 `n-btn` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <button type="button" class="n-btn">Label</button>
</ExampleSection>

```html
<button type="button" class="n-btn">Label</button>
```

|클래스|약어클래스|
|---|---|
|`n-btn`||

## 타입
`.n-btn-type:타입명` 또는 `n-btn:타입명` 약어 클래스를 통해 다양한 버튼 타입을 적용할 수 있습니다.

### filled
`filled`는 주로 사용자 액션을 나타내는 타입입니다.
<ExampleSection>
  <button type="button" class="n-btn n-btn-type:filled">Label</button>
</ExampleSection>

```html
<button type="button" class="n-btn n-btn-type:filled">Label</button>
```

|클래스|약어클래스|
|---|---|
|`n-btn`||
|`n-btn n-btn-type:filled`|`n-btn n-btn:filled`||

### outline-box
`outline-box`는 `filled`보다 덜 중요한 액션을 나타내는 데 사용됩니다.
<ExampleSection>
  <button type="button" class="n-btn n-btn-type:outline-box">Label</button>
</ExampleSection>

```html
<button type="button" class="n-btn n-btn-type:outline-box">Label</button>
```

|클래스|약어클래스|
|---|---|
|`n-btn n-btn-type:outline-box`| `n-btn n-btn:outline-box`|
|`n-btn n-btn-type:outline`| `n-btn n-btn:outline`|


### void
`void`는 가장 덜 중요한 액션을 나타내는 데 사용됩니다.
<ExampleSection>
  <button type="button" class="n-btn n-btn-type:void">Label</button>
</ExampleSection>

```html
<button type="button" class="n-btn n-btn-type:void">Label</button>
```

|클래스|약어클래스|
|---|---|
|`n-btn n-btn-type:void`| `n-btn n-btn:void`|


## 사이즈
`n-btn-size:값` 또는 `n-btn:값` 약어 클래스를 통해 버튼 사이즈를 변경할 수 있습니다.
|클래스|약어클래스||
|---|---|---|
|`n-btn n-btn-size:1`| `n-btn n-btn:1`| |
|`n-btn n-btn-size:2`| `n-btn n-btn:2`|default|
|`n-btn n-btn-size:3`| `n-btn n-btn:3`| |
|`n-btn n-btn-size:sm`| `n-btn n-btn:sm`| |
|`n-btn n-btn-size:md`| `n-btn n-btn:md`|default|
|`n-btn n-btn-size:lg`| `n-btn n-btn:lg`| |
:::raw
<ExampleSection>
  <ul class="d:flex flex-d:column gap:4">
    <ul class="d:flex ai:flex-end gap:4">
      <li> 
        <button type="button" class="n-btn n-btn-size:1">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn-size:2">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn-size:3">Label</button>
      </li>
    </ul>
    <ul class="d:flex ai:flex-end gap:4">
      <li> 
        <button type="button" class="n-btn n-btn:outline n-btn-size:sm">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn:outline n-btn-size:md">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn:outline n-btn-size:lg">Label</button>
      </li>
    </ul>
    <ul class="d:flex ai:flex-end gap:4">
      <li> 
        <button type="button" class="n-btn n-btn:void n-btn-size:1">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn:void n-btn-size:2">Label</button>
      </li>
      <li> 
        <button type="button" class="n-btn n-btn:void n-btn-size:3">Label</button>
      </li>
    </ul>
  </ul>
</ExampleSection>
:::

```html
  <button type="button" class="n-btn n-btn-size:1">Label</button>
  <button type="button" class="n-btn n-btn-size:2">Label</button>
  <button type="button" class="n-btn n-btn-size:3">Label</button>
  <button type="button" class="n-btn n-btn-size:sm n-btn-type:outline">Label</button>
  <button type="button" class="n-btn n-btn-size:md n-btn-type:outline">Label</button>
  <button type="button" class="n-btn n-btn-size:lg n-btn-type:outline">Label</button>
  <button type="button" class="n-btn n-btn-size:sm n-btn-type:void">Label</button>
  <button type="button" class="n-btn n-btn-size:md n-btn-type:void">Label</button>
  <button type="button" class="n-btn n-btn-size:lg n-btn-type:void">Label</button>
```


## 색상
`n-btn-color:값` 또는 `n-btn:값` 약어 클래스를 통해 버튼의 색을 변경할 수 있습니다.

:::raw
<ExampleSection>
  <ul class="d:flex gap:4">
    <li>
      <button type="button" class="n-btn n-btn-color:main">
        Label
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:sub">
        Label
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:accent">
        Label
      </button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn-color:base">
        Label
      </button>
    </li>
  </ul>
</ExampleSection>
:::

```html
<button type="button" class="n-btn n-btn-color:main">Label</button>
<button type="button" class="n-btn n-btn-color:sub">Label</button>
<button type="button" class="n-btn n-btn-color:accent">Label</button>
<button type="button" class="n-btn n-btn-color:base">Label</button>
```

|클래스|약어클래스|
|---|---|
|`n-btn n-btn-color:main`| `n-btn n-btn:main`|
|`n-btn n-btn-color:sub`| `n-btn n-btn:sub`|
|`n-btn n-btn-color:accent`| `n-btn n-btn:accent`|
|`n-btn n-btn-color:base`| `n-btn n-btn:base`|

## 비활성화
`n-btn` 클래스와 함께 `disabled` 속성을 추가하거나 클래스 `disabled`를 추가하여 버튼 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.


:::raw
<ExampleSection>
  <ul class="d:flex gap:4">
    <li>
      <button type="button" class="n-btn" disabled>filled</button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn:outline disabled">outline-box</button>
    </li>
    <li>
      <button type="button" class="n-btn n-btn:void" disabled>void</button>
    </li>
  </ul>
</ExampleSection>
:::

```html
  <button type="button" class="n-btn" disabled>filled</button>
  <button type="button" class="n-btn n-btn:outline disabled">outline-box</button>
  <button type="button" class="n-btn n-btn:void" disabled>void</button>
```

## 활용 예시

<ExampleSection class="mb:4">
  <div class="d:flex gap:2">
    <button type="role" class="n-btn n-btn:void">취소</button>
    <button type="role" class="n-btn">확인</button>
  </div>
</ExampleSection>

<ExampleSection class="mb:4">
  <div class="d:flex gap:2">
    <button type="role" class="n-btn n-btn:outline">닫기</button>
    <button type="role" class="n-btn n-btn:accent">삭제</button>
  </div>
</ExampleSection class="mb:4">

<ExampleSection class="mb:4">
    <button type="role" class="n-btn n-btn:outline w:2 h:2 p:0">
      <span class="icon icon:share_fat_fill icon:base-7 icon:3">공유</span>
    </button>
</ExampleSection>

<ExampleSection>
    <button type="role" class="n-btn n-btn:outline ">
      <span class="deco deco:right deco:3 icon:trash icon:base-7">삭제</span>
    </button>
</ExampleSection>