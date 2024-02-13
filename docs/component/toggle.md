<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# 토글

토글은 온/오프 상태를 가지는 작은 컴포넌트입니다.

## 사용법

토글 컴포넌트는 input 요소에 `.n-toggle` 또는 `.n-toggle-type:타입명` 클래스를 적용하여 사용할 수 있습니다.

::: raw

<div class="vp-raw">
    <ExampleSection>
        <div class="w:full d:flex jc:center">
            <input type="checkbox" class="n-toggle"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle"/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle`||

## 타입

`.n-toggle-type:타입명` 또는 `n-toggle:타입명` 약어 클래스를 통해 다양한 토글 타입을 적용할 수 있습니다.

### 슬라이드

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center">
            <input type="checkbox" class="n-toggle"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle n-toggle:slide"/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle`||
|`n-toggle n-toggle-type:slide`|`n-toggle n-toggle:slide`||


### 체크

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <input type="checkbox" class="n-toggle n-toggle:check"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle n-toggle:check"/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:check`|`n-toggle n-toggle:check`||

### 도트
<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <input type="checkbox" class="n-toggle n-toggle:dot"/>
        </div>
    </ExampleSection>
</div>

```html
<input type="checkbox" class="n-toggle n-toggle:dot"/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:dot`|`n-toggle n-toggle:dot`||

### 아웃라인 박스

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <label class="n-toggle n-toggle:outline">
                Outline
                <input type="checkbox" class="d:none"/>
            </label>
        </div>
    </ExampleSection>
</div>
:::

```html
<label class="n-toggle n-toggle:outline">
    Outline
    <input type="radio" class="d:none"/>
</label>
```
|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:outline-box`|`n-toggle n-toggle:outline-box`||
|`n-toggle n-toggle-type:outline`|`n-toggle n-toggle:outline`||

## 사이즈

`toggle-size:값` 또는 `toggle:값` 약어 클래스를 통해 토글 사이즈를 변경할 수 있습니다.

### 슬라이드 

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full">
            <ul class="d:flex jc:center ai:end gap:4">
                <label class="font-size:2">
                    Small
                    <input type="checkbox" class="n-toggle n-toggle:sm"/>
                </label>
                <label>
                    Medium
                    <input type="checkbox" class="n-toggle n-toggle:md"/>
                </label>
                <label class="font-size:4">
                    Large
                    <input type="checkbox" class="n-toggle n-toggle:lg"/>
                </label>
            </ul>
        </div>
    </ExampleSection>
</div>
:::

```html
<label>
    Small
    <input type="checkbox" class="n-toggle n-toggle:sm"/>
</label>
<label>
    Medium
    <input type="checkbox" class="n-toggle n-toggle:md"/>
</label>
<label>
    Large
    <input type="checkbox" class="n-toggle n-toggle:lg"/>
</label>
```

|클래스|약어클래스||
|---|---|---|
|`n-toggle n-toggle-size:1`|`n-toggle n-toggle:1`||
|`n-toggle n-toggle-size:2`|`n-toggle n-toggle:2`|default|
|`n-toggle n-toggle-size:3`|`n-toggle n-toggle:3`|| 
|`n-toggle n-toggle-size:sm`|`n-toggle n-toggle:sm`||
|`n-toggle n-toggle-size:md`|`n-toggle n-toggle:md`|default|
|`n-toggle n-toggle-size:lg`|`n-toggle n-toggle:lg`||

### 체크

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full">
            <ul class="d:flex jc:center ai:end gap:4">
                <label class="font-size:2">
                    Small
                    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:sm"/>
                </label>
                <label>
                    Medium
                    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:md"/>
                </label>
                <label class="font-size:4">
                    Large
                    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:lg"/>
                </label>
            </ul>
        </div>
    </ExampleSection>
</div>
:::

```html
<label>
    Small
    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:sm"/>
</label>
<label>
    Medium
    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:md"/>
</label>
<label>
    Large
    <input type="checkbox" class="n-toggle n-toggle:check n-toggle:lg"/>
</label>
```

|클래스|약어클래스||
|---|---|---|
|`n-toggle n-toggle:check n-toggle-size:1`|`n-toggle n-toggle:check n-toggle:1`||
|`n-toggle n-toggle:check n-toggle-size:2`|`n-toggle n-toggle:check n-toggle:2`|default|
|`n-toggle n-toggle:check n-toggle-size:3`|`n-toggle n-toggle:check n-toggle:3`|| 
|`n-toggle n-toggle:check n-toggle-size:sm`|`n-toggle n-toggle:check n-toggle:sm`||
|`n-toggle n-toggle:check n-toggle-size:md`|`n-toggle n-toggle:check n-toggle:md`|default|
|`n-toggle n-toggle:check n-toggle-size:lg`|`n-toggle n-toggle:check n-toggle:lg`||

### 도트

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full">
            <ul class="d:flex jc:center ai:end gap:4">
                <label class="font-size:2">
                    Small
                    <input type="radio" class="n-toggle n-toggle:dot n-toggle:sm" name="size"/>
                </label>
                <label>
                    Medium
                    <input type="radio" class="n-toggle n-toggle:dot n-toggle:md" name="size"/>
                </label>
                <label class="font-size:4">
                    Large
                    <input type="radio" class="n-toggle n-toggle:dot n-toggle:lg" name="size"/>
                </label>
            </ul>
        </div>
    </ExampleSection>
</div>
:::

```html
<label>
    Small
    <input type="radio" class="n-toggle n-toggle:dot n-toggle:sm"/>
</label>
<label>
    Medium
    <input type="radio" class="n-toggle n-toggle:dot n-toggle:md"/>
</label>
<label>
    Large
    <input type="radio" class="n-toggle n-toggle:dot n-toggle:lg"/>
</label>
```

|클래스|약어클래스||
|---|---|---|
|`n-toggle n-toggle:dot n-toggle-size:1`|`n-toggle n-toggle:dot n-toggle:1`||
|`n-toggle n-toggle:dot n-toggle-size:2`|`n-toggle n-toggle:dot n-toggle:2`|default|
|`n-toggle n-toggle:dot n-toggle-size:3`|`n-toggle n-toggle:dot n-toggle:3`|| 
|`n-toggle n-toggle:dot n-toggle-size:sm`|`n-toggle n-toggle:dot n-toggle:sm`||
|`n-toggle n-toggle:dot n-toggle-size:md`|`n-toggle n-toggle:dot n-toggle:md`|default|
|`n-toggle n-toggle:dot n-toggle-size:lg`|`n-toggle n-toggle:dot n-toggle:lg`||

### 아웃라인 박스   

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full">
            <ul class="d:flex jc:center ai:end gap:4">
                <label class="n-toggle n-toggle:outline n-toggle:sm">
                    Small
                    <input type="radio" class="d:none" name="outline"/>
                </label>
                <label class="n-toggle n-toggle:outline n-toggle:md">
                    Medium
                    <input type="radio" class="d:none" name="outline"/>
                </label>
                <label class="n-toggle n-toggle:outline n-toggle:lg">
                    Large
                    <input type="radio" class="d:none" name="outline"/>
                </label>
            </ul>
        </div>
    </ExampleSection>
</div>
:::

```html
<label class="n-toggle n-toggle:outline n-toggle:sm">
    Small
    <input type="checkbox" class="d:none"/>
</label>
<label class="n-toggle n-toggle:outline n-toggle:md">
    Medium
    <input type="checkbox" class="d:none"/>
</label>
<label class="n-toggle n-toggle:outline n-toggle:lg">
    Large
    <input type="checkbox" class="d:none"/>
</label>
```

|클래스|약어클래스||
|---|---|---|
|`n-toggle n-toggle:outline n-toggle-size:1`|`n-toggle n-toggle:outline n-toggle:1`||
|`n-toggle n-toggle:outline n-toggle-size:2`|`n-toggle n-toggle:outline n-toggle:2`|default|
|`n-toggle n-toggle:outline n-toggle-size:3`|`n-toggle n-toggle:outline n-toggle:3`|| 
|`n-toggle n-toggle:outline n-toggle-size:sm`|`n-toggle n-toggle:outline n-toggle:sm`||
|`n-toggle n-toggle:outline n-toggle-size:md`|`n-toggle n-toggle:outline n-toggle:md`|default|
|`n-toggle n-toggle:outline n-toggle-size:lg`|`n-toggle n-toggle:outline n-toggle:lg`||

## 비활성화

input 태그에 `disabled` 속성을 추가하거나 `.n-toggle-status:disabled` 클래스 사용하여 비활성화 스타일을 적용할 수 있습니다.

### 슬라이드

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center">
            <input type="checkbox" class="n-toggle" disabled/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle" disabled/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-status:disabled`|`n-toggle disabled`|
|`n-toggle n-toggle-type:slide n-toggle-status:disabled`|`n-toggle n-toggle:slide disabled`||


### 체크

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <input type="checkbox" class="n-toggle n-toggle:check" disabled/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle n-toggle:check" disabled/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:check n-toggle-status:disabled`|`n-toggle n-toggle:check disabled`||

### 도트

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <input type="checkbox" class="n-toggle n-toggle:dot" disabled/>
        </div>
    </ExampleSection>
</div>

```html
<input type="checkbox" class="n-toggle n-toggle:dot" disabled/>
```

|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:dot n-toggle-status:disabled`|`n-toggle n-toggle:dot disabled`||

### 아웃라인 박스

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center gap:4">
            <label class="n-toggle n-toggle:outline">
                Outline
                <input type="checkbox" class="d:none" disabled/>
            </label>
        </div>
    </ExampleSection>
</div>
:::

```html
<label class="n-toggle n-toggle:outline">
    Outline
    <input type="radio" class="d:none" disabled/>
</label>
```
|클래스|약어클래스|
|---|---|
|`n-toggle n-toggle-type:outline-box n-toggle-status:disabled`|`n-toggle n-toggle:outline-box disabled`||
|`n-toggle n-toggle-type:outline n-toggle-status:disabled`|`n-toggle n-toggle:outline disabled`||


## 라벨

슬라이드, 체크, 도트 토글은 라벨을 다양한 위치에 스타일링할 수 있는 옵션을 제공합니다.<br>
`.n-toggle-label:값` 클래스를 적용하여 위치를 변경할 수 있습니다.

### 슬라이드

::: raw

<div class="vp-raw">
    <div class="my:9">
        <ExampleSection class="w:full d:flex ai:center jc:space-around">
            <label class="font-weight:2">
                Top
                <input type="checkbox" class="n-toggle n-toggle-label:top"/>
            </label>
            <label class="font-weight:2">
                Bottom
                <input type="checkbox" class="n-toggle n-toggle-label:bottom"/>
            </label>
        </ExampleSection>
    </div>
</div>
:::

```html
<label>
    Top
    <input type="checkbox" class="n-toggle n-toggle-label:top"/>
</label>
<label>
    Bottom
    <input type="checkbox" class="n-toggle n-toggle-label:bottom"/>
</label>
```

|클래스|위치|
|---|---|
|`n-toggle n-toggle-label:top`|top|
|`n-toggle n-toggle-label:bottom`|bottom|

### 체크

::: raw

<div class="vp-raw">
    <div class="my:9">
        <ExampleSection class="w:full d:flex ai:center jc:space-around">
            <label class="font-weight:2">
                Top
                <input type="checkbox" class="n-toggle n-toggle:check n-toggle-label:top"/>
            </label>
             <label class="font-weight:2">
                Bottom
                <input type="checkbox" class="n-toggle n-toggle:check n-toggle-label:bottom"/>
            </label>
        </ExampleSection>
    </div>
</div>
:::

```html
<label>
    Top
    <input type="checkbox" class="n-toggle n-toggle:check n-toggle-label:top"/>
</label>
    <label>
    Bottom
    <input type="checkbox" class="n-toggle n-toggle:check n-toggle-label:bottom"/>
</label>
```

|클래스|위치|
|---|---|
|`n-toggle n-toggle:check n-toggle-label:top`|top|
|`n-toggle n-toggle:check n-toggle-label:bottom`|bottom|

### 도트

::: raw

<div class="vp-raw">
    <div class="my:9">
        <ExampleSection class="w:full d:flex ai:center jc:space-around">
            <label class="font-weight:2">
                Top
                <input type="checkbox" class="n-toggle n-toggle:dot n-toggle-label:top"/>
            </label>
            <label class="font-weight:2">
                Bottom
                <input type="checkbox" class="n-toggle n-toggle:dot n-toggle-label:bottom"/>
            </label>
        </ExampleSection>
    </div>
</div>
:::

```html
<label>
    Top
    <input type="checkbox" class="n-toggle n-toggle:dot n-toggle-label:top"/>
</label>
<label>
    Bottom
    <input type="checkbox" class="n-toggle n-toggle:dot n-toggle-label:bottom"/>
</label>
```

|클래스|위치|
|---|---|
|`n-toggle n-toggle:dot n-toggle-label:top`|top|
|`n-toggle n-toggle:dot n-toggle-label:bottom`|bottom|

## 활용 예시

토글 컴포넌트를 활용한 다양한 예시입니다.

### 슬라이드

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <label class="font-size:2 font-weight:1">
            푸쉬알림
            <input type="checkbox" class="n-toggle n-toggle:sm n-toggle-label:left"/>
        </label>
    </ExampleSection>
</div>

### 체크

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <ul class="d:flex fl-dir:column gap:2">
            <li>
                <label>
                    <input type="checkbox" class="n-toggle n-toggle:check"/>
                    <span class="font-size:2 font-weight:2 d:flex gap:1">
                        <span>(필수)</span>
                        <span>서비스 이용약관에 동의합니다.</span>
                    </span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" class="n-toggle n-toggle:check"/>
                    <span span class="font-size:2 font-weight:2 d:flex gap:1">
                        <span class="color:base-5">(선택)</span>
                        <span>마케팅 정보 수신에 동의합니다.</span>
                    </span>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>

### 도트

<div class="vp-raw">
    <ExampleSection class="d:flex fl-dir:column ai:center gap:4 mt:4">
        <p class="font-weight:2">가장 좋아하는 동물을 선택해주세요!</p>
        <ul class="w:full d:flex jc:center gap:4">
            <li>
                <label class="font-size:2 font-weight:1">
                    고양이 🐱
                    <input type="radio" class="n-toggle n-toggle:dot" name="amimal"/>
                </label>
            </li>
            <li>
                <label class="font-size:2 font-weight:1">
                    강아지 🐶
                    <input type="radio" class="n-toggle n-toggle:dot" name="amimal"/>
                </label>
            </li>
            <li>
                <label class="font-size:2 font-weight:1">
                    여우 🦊
                    <input type="radio" class="n-toggle n-toggle:dot" name="amimal"/>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>

### 아웃라인 박스

<div class="vp-raw">
    <ExampleSection class="d:flex fl-dir:column ai:center gap:4 mt:4">
        <p class="n-font:h2">✨ 베스트 강의</p>
        <ul class="w:full d:flex jc:center gap:2">
            <li>
                <label class="n-toggle n-toggle:outline">
                    실시간
                    <input type="radio" class="d:none" name="category" checked/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle:outline">
                    일간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle:outline">
                    월간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle:outline">
                    주간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>