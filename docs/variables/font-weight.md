<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# font-weight

변수 `var(--font-weight)`는 폰트의 기본 두께를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [font-weight](../utility/font/font-weight.md)

## Default

세 단계의 폰트 두께가 기본 제공됩니다.

<ExampleSection>
<div class="w:full">
    <div v-for="weight, index of [400, 500, 700]"
        :class="`font-weight:${index+1}`">
        {{ index+1 }} - Hello World! ({{ weight }})
    </div>
</div>
</ExampleSection>

```html
<div class="font-weight:1">Hello World!</div>
<div class="font-weight:2">Hello World!</div>
<div class="font-weight:3">Hello World!</div>
```

```css
:root {
    --font-weight-1: 400;
    --font-weight-2: 500;
    --font-weight-3: 700;
}
```

## Overriding

다음과 같이 기본 폰트 두께를 재정의할 수 있습니다.

<ExampleSection>
<div class="w:full">
    <div v-for="weight, index of [300, 500, 700]"
        :style="`font-weight:${weight}`">
        {{ index+1 }} - Hello World! ({{ weight }})
    </div>
</div>
</ExampleSection>

```html
<div class="font-weight:1">Hello World!</div>
<div class="font-weight:2">Hello World!</div>
<div class="font-weight:3">Hello World!</div>
```

```css
:root {
    --font-weight-1: 400; /* [!code --] */
    --font-weight-1: 300; /* [!code ++] */
    --font-weight-2: 500;
    --font-weight-3: 700;
}
```
