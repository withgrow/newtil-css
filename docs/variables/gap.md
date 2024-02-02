<script setup>
import ExampleSection from "../components/ExampleSection.vue"
const fontSizes = [12, 14, 16, 18, 20, 22, 26, 32, 56]
const overridedSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28]
</script>

# gap

변수 `var(--gap)`은 간격 및 크기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

| gap-\*                                                                      | width-\*                                                                    | height-\*                                                                      | margin-\*                                                                            | padding-\*                                                                              | position-\*                                                              | text-\*                                                                        |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| <span class="white-s:nowrap">[gap](../utility/gap/gap)</span>               | <span class="white-s:nowrap">[width](../utility/width/width)</span>         | <span class="white-s:nowrap">[height](../utility/height/height)</span>         | <span class="white-s:nowrap">[margin](../utility/margin/margin)</span>               | <span class="white-s:nowrap">[padding](../utility/padding/padding)</span>               | <span class="white-s:nowrap">[top](../utility/position/top)</span>       | <span class="white-s:nowrap">[text-indent](../utility/text/text-indent)</span> |
| <span class="white-s:nowrap">[column-gap](../utility/gap/column-gap)</span> | <span class="white-s:nowrap">[min-width](../utility/width/min-width)</span> | <span class="white-s:nowrap">[min-height](../utility/height/min-height)</span> | <span class="white-s:nowrap">[margin-top](../utility/margin/margin-top)</span>       | <span class="white-s:nowrap">[padding-top](../utility/padding/padding-top)</span>       | <span class="white-s:nowrap">[right](../utility/position/right)</span>   |                                                                                |
| <span class="white-s:nowrap">[row-gap](../utility/gap/row-gap)</span>       | <span class="white-s:nowrap">[max-width](../utility/width/max-width)</span> | <span class="white-s:nowrap">[max-height](../utility/height/max-height)</span> | <span class="white-s:nowrap">[margin-right](../utility/margin/margin-right)</span>   | <span class="white-s:nowrap">[padding-right](../utility/padding/padding-right)</span>   | <span class="white-s:nowrap">[bottom](../utility/position/bottom)</span> |                                                                                |
|                                                                             |                                                                             |                                                                                | <span class="white-s:nowrap">[margin-bottom](../utility/margin/margin-bottom)</span> | <span class="white-s:nowrap">[padding-bottom](../utility/padding/padding-bottom)</span> | <span class="white-s:nowrap">[left](../utility/position/left)</span>     |                                                                                |
|                                                                             |                                                                             |                                                                                | <span class="white-s:nowrap">[margin-left](../utility/margin/margin-left)</span>     | <span class="white-s:nowrap">[padding-left](../utility/padding/padding-left)</span>     |                                                                          |                                                                                |
|                                                                             |                                                                             |                                                                                | <span class="white-s:nowrap">[margin-x](../utility/margin/margin-x)</span>           | <span class="white-s:nowrap">[padding-x](../utility/padding/padding-x)</span>           |                                                                          |                                                                                |
|                                                                             |                                                                             |                                                                                | <span class="white-s:nowrap">[margin-y](../utility/margin/margin-y)</span>           | <span class="white-s:nowrap">[padding-y](../utility/padding/padding-y)</span>           |                                                                          |                                                                                |

<span class="white-s:nowrap"></span>

## Default

열 단계의 간격이 기본 제공됩니다.

<ExampleSection>
<div class="w:full">
    <div v-for="i in 10" 
        class="d:flex mt:2">
        <div :class="`d:flex gap:${i} bg bg-color:base-1 border-rd:2 c:base-1`">
            <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center">{{i}}</div>
            <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
        </div>
    </div>
</div>
</ExampleSection>

```html{1,5,9,14}
<div class="d:flex gap:1">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:2">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:3">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<!-- ... -->
<div class="d:flex gap:10">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
```

```css
:root {
    --gap-0: 0rem; /* 0px */
    --gap-1: 0.25rem; /* 4px */
    --gap-2: 0.5rem; /* 8px */
    --gap-3: 0.75rem; /* 12px */
    --gap-4: 1rem; /* 16px */
    --gap-5: 1.25rem; /* 20px */
    --gap-6: 1.5rem; /* 24px */
    --gap-7: 1.75rem; /* 28px */
    --gap-8: 2rem; /* 32px */
    --gap-9: 2.25rem; /* 36px */
    --gap-10: 2.5rem; /* 40px */
    --gap-full: 9999px;
}
```

## Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
<div class="w:full">
    <div v-for="i in 10" 
        class="d:flex mt:2">
        <div class="c:base-1 bg bg-color:base-1 border-rd:2 d:flex"
            :style="`gap: ${4 * i + 40}px`">
            <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center">{{i + 10}}</div>
            <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
        </div>
    </div>
</div>
</ExampleSection>

```html{1,5,9,14}
<div class="d:flex gap:11">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:12">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:13">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
<!-- ... -->
<div class="d:flex gap:20">
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-rd:2 w:10 h:10 p:7 d:flex ai:center jc:center"></div>
</div>
```

```css
:root {
    /* ... */
    --gap-11: 2.75rem; /* 44px */ /* [!code ++] */
    --gap-12: 3rem; /* 48px */ /* [!code ++] */
    --gap-13: 3.25rem; /* 52px */ /* [!code ++] */
    --gap-14: 3.5rem; /* 56px */ /* [!code ++] */
    --gap-15: 3.75rem; /* 60px */ /* [!code ++] */
    --gap-16: 4rem; /* 64px */ /* [!code ++] */
    --gap-17: 4.25rem; /* 68px */ /* [!code ++] */
    --gap-18: 4.5rem; /* 72px */ /* [!code ++] */
    --gap-19: 4.75rem; /* 76px */ /* [!code ++] */
    --gap-20: 5rem; /* 80px */ /* [!code ++] */
}
```

<style scoped>
    .bg {
        background: repeating-linear-gradient(135deg, var(--vp-c-brand-1) 0, var(--vp-c-brand-1) 10%, transparent 0, transparent 50%);
        background-size: 7.1px 7.1px;
    }
</style>
