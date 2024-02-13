<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-width

변수 `border-width`는 테두리의 너비를 정의하는 데 사용되며, 다음의 유틸리티에서 사용되고 있습니다.

-   [border-width](../utility/border/border-width.md)

## Default

`1px` 간격으로 세 단계의 너비가 기본 제공됩니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div v-for="i in 3" class="h:10 w:10 p:7 d:flex ai:center jc:center c:base-10 bg-color:base-1 border border-rd:2 border-color:main-1" :class="`border-w:${i}`" > {{ i }} </div>
    </div>
</ExampleSection>

```html{2,5,8}
<div class="d:flex gap:3">
    <div class="border border-rd:2 border-color:main-1 border-w:1 ...">
        1
    </div>
    <div class="border border-rd:2 border-color:main-1 border-w:2 ...">
        2
    </div>
    <div class="border border-rd:2 border-color:main-1 border-w:3 ...">
        3
    </div>
</div>
```

```css
:root {
    --border-width-1: 1px;
    --border-width-2: 2px;
    --border-width-3: 3px;
}
```

## Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div 
            v-for="i in 3" 
            class="h:10 w:10 p:7 d:flex ai:center jc:center c:base-10 border-rd:2 bg-color:base-1" 
            :style="`border:solid ${i+3}px #99c842`" >
            {{ i + 3 }} 
        </div>
    </div>
</ExampleSection>

```html{2,5,8}
<div class="d:flex gap:3">
    <div class="border border-rd:2 border-color:main-1 border-w:4 ...">
        4
    </div>
    <div class="border border-rd:2 border-color:main-1 border-w:5 ...">
        5
    </div>
    <div class="border border-rd:2 border-color:main-1 border-w:6 ...">
        6
    </div>
</div>
```

```css
:root {
    /* ... */
    --border-width-4: 4px; /* [!code ++] */
    --border-width-5: 5px; /* [!code ++] */
    --border-width-6: 6px; /* [!code ++] */
}
```
