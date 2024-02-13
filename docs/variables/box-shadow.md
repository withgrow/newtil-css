<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# box-shadow

변수 `box-shadow`는 박스의 기본 그림자 스타일를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

-   [box-shadow](../utility/box-shadow.md)

## Default

일곱 종류의 그림자 스타일이 기본 제공됩니다.

<ExampleSection>
	<div class="d:flex flex-wrap:wrap gap:10">
		<div 
			v-for="i in 7"
			class="h:7 w:7 border border-color:main-1 border-radius:2 bg-color:base-1 d:flex ai:center jc:center"
			:class="`box-shadow:${i}`">
			{{ i }}
		</div>
	</div>
</ExampleSection>

```html{2,5,8,12}
<div class="d:flex flex-wrap:wrap gap:10">
	<div class="box-shadow:1 ...">
		1
	</div>
	<div class="box-shadow:2 ...">
		2
	</div>
	<div class="box-shadow:3 ...">
		3
	</div>
	<!-- ... -->
	<div class="box-shadow:7 ...">
		7
	</div>
</div>
```

```css
:root {
    --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
    --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.01);
    --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.01);
    --box-shadow-4: 0px 6px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 3px -2px rgba(0, 0, 0, 0.01);
    --box-shadow-5: 0px 8px 12px -2px rgba(0, 0, 0, 0.08), 0px 3px 4px -3px rgba(0, 0, 0, 0.01);
    --box-shadow-6: 0px 16px 20px -4px rgba(0, 0, 0, 0.08), 0px 6px 8px -5px
            rgba(0, 0, 0, 0.01);
    --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17);
}
```

## Overriding

다음과 같이 기본 그림자 스타일을 재정의할 수 있습니다.

<ExampleSection>
	<div class="d:flex flex-wrap:wrap gap:10">
		<div 
			v-for="i in 7"
			class="h:7 w:7 border border-color:main-1 border-radius:2 bg-color:base-1 d:flex ai:center jc:center"
			:style="`box-shadow:${i}px ${i + 1}px ${i + 2}px 0.1px rgba(0, 0, 0, ${i * 0.1})`">
			{{ i }}
		</div>
	</div>
</ExampleSection>

```html{2,5,8,12}
<div class="d:flex flex-wrap:wrap gap:10">
	<div class="box-shadow:1 ...">
		1
	</div>
	<div class="box-shadow:2 ...">
		2
	</div>
	<div class="box-shadow:3 ...">
		3
	</div>
	<!-- ... -->
	<div class="box-shadow:7 ...">
		7
	</div>
</div>
```

```css
/* root.css */
:root {
    --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05); /* [!code --] */
    --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.01); /* [!code --] */
    --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.01); /* [!code --] */
    --box-shadow-4: 0px 6px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 3px -2px rgba(0, 0, 0, 0.01); /* [!code --] */
    --box-shadow-5: 0px 8px 12px -2px rgba(0, 0, 0, 0.08), 0px 3px 4px -3px rgba(0, 0, 0, 0.01); /* [!code --] */
    --box-shadow-6: 0px 16px 20px -4px rgba(0, 0, 0, 0.08), 0px 6px 8px -5px rgba(0, 0, 0, 0.01); /* [!code --] */
    --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17); /* [!code --] */
    --box-shadow-1: 1px 2px 3px 0.1px rgba(0, 0, 0, 0.1); /* [!code ++] */
    --box-shadow-2: 2px 3px 4px 0.1px rgba(0, 0, 0, 0.2); /* [!code ++] */
    --box-shadow-3: 3px 4px 5px 0.1px rgba(0, 0, 0, 0.3); /* [!code ++] */
    --box-shadow-4: 4px 5px 6px 0.1px rgba(0, 0, 0, 0.4); /* [!code ++] */
    --box-shadow-5: 5px 6px 7px 0.1px rgba(0, 0, 0, 0.5); /* [!code ++] */
    --box-shadow-6: 6px 7px 8px 0.1px rgba(0, 0, 0, 0.6); /* [!code ++] */
    --box-shadow-7: 7px 8px 9px 0.1px rgba(0, 0, 0, 0.7); /* [!code ++] */
}
```
