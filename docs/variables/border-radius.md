<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-radius

변수 `border-radius`는 테두리의 둥글기를 정의하는 데 사용되며, 다음의 속성에서 활용되고 있습니다:

-   [`border-radius`](../utility/border/border-radius.md)

## Default

`2px` 간격으로 여섯 단계의 둥글기와 원 모양의 둥글기가 제공됩니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div v-for="item of Array.from({length: 6}, (v, i) => i + 0)" class="h:10 w:10" :class="`d:flex ai:center jc:center bg-color:base-1 border border-c:main-3 border-rd:${item}`" > {{ item }} </div>
        <div class="h:10 w:10 d:flex ai:center jc:center bg-color:base-1 border border-c:main-3 border-rd:full">
            full
        </div>
    </div>
</ExampleSection>

```html{1,4,7,10,13,16,19}
<div class="border border-c:main-3 border-rd:0">
  0
</div>
<div class="border border-c:main-3 border-rd:1">
  1
</div>
<div class="border border-c:main-3 border-rd:2">
  2
</div>
<div class="border border-c:main-3 border-rd:3">
  3
</div>
<div class="border border-c:main-3 border-rd:4">
  4
</div>
<div class="border border-c:main-3 border-rd:5">
  5
</div>
<div class="border border-c:main-3 border-rd:full">
  full
</div>
```

```css
:root {
    --border-radius-0: 0;
    --border-radius-1: 2px;
    --border-radius-2: 4px;
    --border-radius-3: 6px;
    --border-radius-4: 8px;
    --border-radius-5: 10px;
    --border-radius-full: 9999px;
}
```

## Overriding

다음과 같이 둥글기의 단계를 추가할 수 있습니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div v-for="rad, index of Array.from({length: 5}, (v, i) => 2 * i + 12)" 
        class="h:10 w:10 d:flex ai:center jc:center bg-color:base-1 border border-c:main-3" 
        :style="`border-radius:${rad}px`"> {{ index + 6 }} </div>
    </div>
</ExampleSection>

```html{1,4,7,10,13,16,19}
<div class="border border-c:main-3 border-rd:6">
  6
</div>
<div class="border border-c:main-3 border-rd:7">
  7
</div>
<div class="border border-c:main-3 border-rd:8">
  8
</div>
<div class="border border-c:main-3 border-rd:9">
  9
</div>
<div class="border border-c:main-3 border-rd:10">
  10
</div>
```

```css
/* root.css */
:root {
    /* .. */
    --border-radius-6: 12px;
    --border-radius-7: 14px;
    --border-radius-8: 16px;
    --border-radius-9: 18px;
    --border-radius-10: 20px;
}
```
