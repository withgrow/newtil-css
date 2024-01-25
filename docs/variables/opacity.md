<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# opacity

변수 `var(--opacity)`는 요소의 불투명도를 정의하는 데 사용되며, 다음의 속성에서 활용되고 있습니다:

-   [opacity](../utility/opacity.md)

## Default

열 단계의 불투명도가 기본 제공됩니다.

<ExampleSection>
<div class="w:full d:flex flex-wrap:wrap gap:2">
    <div v-for="i in 10"
        class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center"
        :class="`opacity:${i}`">
        {{ i }}
    </div>
</div>
</ExampleSection>

```html{3,8,13,21}
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:1">
    1
</div>
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:2">
    2
</div>
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:3">
    3
</div>

<!-- .. -->

<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:10">
    10
</div>
```

```css
:root {
    --opacity-0: 0;
    --opacity-1: 0.1;
    --opacity-2: 0.18;
    --opacity-3: 0.3;
    --opacity-4: 0.45;
    --opacity-5: 0.5;
    --opacity-6: 0.57;
    --opacity-7: 0.7;
    --opacity-8: 0.8;
    --opacity-9: 0.9;
    --opacity-10: 1;
}
```

## Overriding

다음과 같이 기본 불투명도 설정을 재정의할 수 있습니다.

<ExampleSection>
<div class="w:full d:flex flex-wrap:wrap gap:2">
    <div v-for="i in 10"
        class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center"
        :style="`opacity:${0.5 + i * 0.05}`">
        {{ i }}
    </div>
</div>
</ExampleSection>

```html{3,8,13,21}
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:1">
    1
</div>
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:2">
    2
</div>
<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:3">
    3
</div>

<!-- .. -->

<div
    class="c:base-1 font-w:3 border-rd:4 bg-color:main-2 w:10 h:10 p:7 d:flex ai:center jc:center
           opacity:10">
    10
</div>
```

```css
:root {
    --opacity-0: 0.5; /* [!code --] */
    --opacity-1: 0.55; /* [!code --] */
    --opacity-2: 0.6; /* [!code --] */
    --opacity-3: 0.65; /* [!code --] */
    --opacity-4: 0.7; /* [!code --] */
    --opacity-5: 0.75; /* [!code --] */
    --opacity-6: 0.8; /* [!code --] */
    --opacity-7: 0.85; /* [!code --] */
    --opacity-8: 0.9; /* [!code --] */
    --opacity-9: 0.95; /* [!code --] */
    --opacity-0: 0.5; /* [!code ++] */
    --opacity-1: 0.55; /* [!code ++] */
    --opacity-2: 0.6; /* [!code ++] */
    --opacity-3: 0.65; /* [!code ++] */
    --opacity-4: 0.7; /* [!code ++] */
    --opacity-5: 0.75; /* [!code ++] */
    --opacity-6: 0.8; /* [!code ++] */
    --opacity-7: 0.85; /* [!code ++] */
    --opacity-8: 0.9; /* [!code ++] */
    --opacity-9: 0.95; /* [!code ++] */
    --opacity-10: 1;
}
```
