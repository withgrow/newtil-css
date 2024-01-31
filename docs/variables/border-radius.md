<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-radius

변수 `border-radius`는 테두리의 둥글기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [border-radius](../utility/border/border-radius.md)

## Default

`2px` 간격으로 여섯 단계의 둥글기와 원 모양의 둥글기가 기본 제공됩니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div 
            v-for="i in 6" 
            class="c:base-1 bg-color:main-2 h:10 w:10 p:7 d:flex ai:center jc:center " 
            :class="`border-rd:${i-1}`" > 
                {{ i-1 }} 
        </div>
        <div class="c:base-1 bg-color:main-2 border-rd:full h:10 w:10 p:7 d:flex ai:center jc:center">
            full
        </div>
    </div>
</ExampleSection>

```html{2,5,8,12}
<div class="d:flex gap:3">
    <div class="border-rd:0 ...">
        0
    </div>
    <div class="border-rd:1 ...">
        1
    </div>
    <div class="border-rd:2 ...">
        2
    </div>
    <!-- ... -->
    <div class="border-rd:full ...">
        full
    </div>
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
        <div 
            v-for="i in 5" 
            class="c:base-1 bg-color:main-2 h:10 w:10 p:7 d:flex ai:center jc:center " 
            :style="`border-radius:${2 * i + 10}px`" > 
                {{ i + 5 }} 
        </div>
    </div>
</ExampleSection>

```html{2,5,9}
<div class="d:flex gap:3">
    <div class="border-rd:6 ...">
        6
    </div>
    <div class="border-rd:7 ...">
        7
    </div>
    <!-- ... -->
    <div class="border-rd:10 ...">
        10
    </div>
</div>
```

```css
/* root.css */
:root {
    /* ... */
    --border-radius-6: 12px; /* [!code ++] */
    --border-radius-7: 14px; /* [!code ++] */
    --border-radius-8: 16px; /* [!code ++] */
    --border-radius-9: 18px; /* [!code ++] */
    --border-radius-10: 20px; /* [!code ++] */
}
```
