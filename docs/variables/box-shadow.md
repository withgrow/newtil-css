<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# box-shadow

변수 `box-shadow`는 박스의 기본 그림자 스타일를 정의하는 데 사용되며, 다음의 속성에서 활용되고 있습니다:

-   [`box-shadow`](../utility/box-shadow.md)

## Default

기본적으로 일곱 가지 그림자 스타일이 제공됩니다.

<ExampleSection>
	<div class="d:flex flex-wrap:wrap gap:10 w:fit-content">
		<div 
			v-for="item of Array.from({length: 7}, (v, i) => i + 1)"
			class="h:10 w:10 p:10 border border-c:main-3 bg-color:base-1 d:flex ai:center jc:center"
			:class="`box-shadow:${item}`">
			{{ item }}
		</div>
	</div>
</ExampleSection>

```html{2,6,10,14,18,22,26}
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:1">
	1
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:2">
    2
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:3">
    3
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:4">
    4
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:5">
    5
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:6">
    6
</div>
<div class="border border-c:main-3 bg-color:base-1 h:10 w:10 p:10 d:flex ai:center jc:center
			box-shadow:7">
    7
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
	<div class="d:flex flex-wrap:wrap gap:10 w:fit-content">
		<div 
			v-for="item of Array.from({length: 7}, (v, i) => i + 1)"
			class="h:10 w:10 p:10 border border-c:main-3 bg-color:base-1 d:flex ai:center jc:center"
			:style="`box-shadow:${item}px ${ item + 1}px ${item + 2}px ${item * 0.1}px rgba(0, 0, 0, ${item * 0.1})`">
			{{ item }}
		</div>
	</div>
</ExampleSection>

```css
/* root.css */
:root {
    --box-shadow-1: 1px 2px 3px 0.1px rgba(0, 0, 0, 0.1);
    --box-shadow-2: 2px 3px 4px 0.2px rgba(0, 0, 0, 0.2);
    --box-shadow-3: 3px 4px 5px 0.3px rgba(0, 0, 0, 0.3);
    --box-shadow-4: 4px 5px 6px 0.4px rgba(0, 0, 0, 0.4);
    --box-shadow-5: 5px 6px 7px 0.5px rgba(0, 0, 0, 0.5);
    --box-shadow-6: 6px 7px 8px 0.6px rgba(0, 0, 0, 0.6);
    --box-shadow-7: 7px 8px 9px 0.7px rgba(0, 0, 0, 0.7);
}
```
