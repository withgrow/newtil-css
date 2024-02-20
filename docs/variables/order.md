<script setup>
import ExampleSection from "../components/demo/ExampleSection.vue"
</script>

# order

변수 `var(--order)`는 요소의 배치 순서를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [order](../utility/order.md)

## Default

다섯 단계의 순서값이 기본 제공됩니다.

<ExampleSection>
<div class="d:flex gap:2 of:auto" ref="container">
    <div v-for="o, index of [1,4,2,5,3]"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center"
        :class="`order:${o}`">
        {{ index+1 }}
    </div>
</div>
</ExampleSection>

```html
<div class="order:1 ...">1</div>
<div class="order:4 ...">2</div>
<div class="order:2 ...">3</div>
<div class="order:5 ...">4</div>
<div class="order:3 ...">5</div>
```

```css
:root {
  --order-1: -1;
  --order-2: 2;
  --order-3: 3;
  --order-4: 4;
  --order-5: 5;
}
```

## Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
<div class="d:flex gap:2 of:auto" ref="container">
    <div v-for="o, index of [1, 5, 2, 6, 3, 7, 4, 8]"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center"
        :style="`order:${o}`">
        {{ index+1 }}
    </div>
</div>
</ExampleSection>

```html
<div class="order:1 ...">1</div>
<div class="order:5 ...">2</div>
<div class="order:2 ...">3</div>
<div class="order:6 ...">4</div>
<div class="order:3 ...">5</div>
<div class="order:7 ...">6</div>
<div class="order:4 ...">7</div>
<div class="order:8 ...">8</div>
```

```css
:root {
  /* ... */
  --order-6: 6; /* [!code ++] */
  --order-7: 7; /* [!code ++] */
  --order-8: 8; /* [!code ++] */
}
```
