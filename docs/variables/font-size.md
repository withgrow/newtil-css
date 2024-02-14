<script setup>
import ExampleSection from "../components/ExampleSection.vue"
const fontSizes = [12, 14, 16, 18, 20, 22, 26, 32, 56]
const overridedSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28]
</script>

# font-size

변수 `var(--font-size)`는 폰트의 기본 크기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [font-size](../utility/font/font-size.md)

## Default

아홉 단계의 폰트 크기가 기본 제공됩니다.

<ExampleSection>
<div class="w:100p">
    <p class="mt:0">이 문장은 폰트 크기 <code>16px</code>로 작성되었습니다.</p>
    <div v-for="size, index of fontSizes"
        :class="`font-size:${index+1}`">
        {{ index+1 }} - Hello World! ({{ size }}px)
    </div>
</div>
</ExampleSection>

```html
<p class="font-size:1">Hello World!</p>
<p class="font-size:2">Hello World!</p>
<p class="font-size:3">Hello World!</p>
<!-- ... -->
<p class="font-size:9">Hello World!</p>
```

```css
:root {
    --font-size-1: 12px;
    --font-size-2: 14px;
    --font-size-3: 16px;
    --font-size-4: 18px;
    --font-size-5: 20px;
    --font-size-6: 22px;
    --font-size-7: 26px;
    --font-size-8: 32px;
    --font-size-9: 56px;
}
```

## Overriding

다음과 같이 기본 폰트 크기를 재정의할 수 있습니다.

<ExampleSection>
<div class="w:100p">
    <p class="mt:0">이 문장은 폰트 크기 <code>16px</code>로 작성되었습니다.</p>
    <div v-for="size, index of overridedSizes"
        :style="`font-size:${size}px`">
        {{ index+1 }} - Hello World! ({{ size }}px)
    </div>
</div>
</ExampleSection>

```html
<p class="font-size:1">Hello World!</p>
<p class="font-size:2">Hello World!</p>
<p class="font-size:3">Hello World!</p>
<!-- ... -->
<p class="font-size:9">Hello World!</p>
```

```css
:root {
    --font-size-1: 12px;
    --font-size-2: 14px;
    --font-size-3: 16px;
    --font-size-4: 18px;
    --font-size-5: 20px;
    --font-size-6: 22px;
    --font-size-7: 26px; /* [!code --] */
    --font-size-8: 32px; /* [!code --] */
    --font-size-9: 56px; /* [!code --] */
    --font-size-7: 24px; /* [!code ++] */
    --font-size-8: 26px; /* [!code ++] */
    --font-size-9: 28px; /* [!code ++] */
}
```
