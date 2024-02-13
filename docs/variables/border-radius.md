<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# border-radius

변수 `border-radius`는 테두리의 둥글기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [border-radius](../utility/border/border-radius.md)

## Default

`4px` 간격으로 다섯 단계의 둥글기와 원 모양의 둥글기가 기본 제공됩니다.

<ExampleSection>
    <div class="d:flex flex-wrap:wrap gap:3">
        <div 
            v-for="i in 5" 
            class="color:base-1 bg-color:main-1 h:10 w:10 p:10 d:flex ai:center jc:center " 
            :class="`border-radius:${i-1}`" > 
                {{ i-1 }} 
        </div>
        <div class="color:base-1 bg-color:main-1 border-radius:full h:10 w:10 p:10 d:flex ai:center jc:center">
            full
        </div>
    </div>
</ExampleSection>

```html
<div class="border-radius:0 ...">0</div>
<div class="border-radius:1 ...">1</div>
<div class="border-radius:2 ...">2</div>
<div class="border-radius:3 ...">3</div>
<div class="border-radius:4 ...">4</div>
<div class="border-radius:full ...">full</div>
```

```css
:root {
    --border-radius-0: 0;
    --border-radius-1: 4px;
    --border-radius-2: 8px;
    --border-radius-3: 12px;
    --border-radius-4: 16px;
    --border-radius-full: 9999px;
}
```

## Overriding

다음과 같이 둥글기의 단계를 재정의할 수 있습니다.

<ExampleSection>
    <div class="d:flex flex-wrap:wrap gap:3">
        <div 
            v-for="i in 5" 
            class="color:base-1 bg-color:main-1 h:10 w:10 p:10 d:flex ai:center jc:center " 
            :style="`border-radius:${2 * i}px`" > 
                {{ i-1 }} 
        </div>
    </div>
</ExampleSection>

```html
<div class="border-radius:0 ...">0</div>
<div class="border-radius:1 ...">1</div>
<div class="border-radius:2 ...">2</div>
<div class="border-radius:3 ...">3</div>
<div class="border-radius:4 ...">4</div>
```

```css
:root {
    --border-radius-0: 0;
    --border-radius-1: 4px; /* [!code --] */
    --border-radius-2: 8px; /* [!code --] */
    --border-radius-3: 12px; /* [!code --] */
    --border-radius-4: 16px; /* [!code --] */
    --border-radius-1: 2px; /* [!code ++] */
    --border-radius-2: 4px; /* [!code ++] */
    --border-radius-3: 6px; /* [!code ++] */
    --border-radius-4: 8px; /* [!code ++] */
    --border-radius-full: 9999px;
}
```
