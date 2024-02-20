<script setup>
import ExampleSection from "../components/demo/ExampleSection.vue";
</script>

# 컨테이너

컨테이너 컴포넌트는 최대 넓이를 제한함으로써 컨텐츠가 퍼지지 않도록 방지하고 중앙 집중식의 레이아웃을 제공합니다.

## 사용법

컨테이너 컴포넌트는 요소에 `n-container` 클래스를 적용하여 사용할 수 있습니다.

```html
<section class="n-container">
  <h1 class="n-font:title">안녕하세요!</h1>
</section>
```

## 스타일 재정의

컨테이너 컴포넌트의 기본 최대 넓이를 조절할 수 있는 변수를 제공합니다. 해당 변수를 오버라이딩하여 컨테이너 컴포넌트의 최대 넓이를 자유롭게 재정의 할 수 있습니다.

```css
/* container.css */
.n-container {
  --container-max-width: 1440px;
}

.n-container {
  width: 100%;
  max-width: var(--container-max-width);
}
```

다음과 같이 컴포넌트의 최대 넓이를 재정의할 수 있습니다.

```css
/* root.css */
.n-container {
  --container-max-width: 1440px; /* [!code --] */
  --container-max-width: 1280px; /* [!code ++] */
}
```

:::tip
컴포넌트 커스터마이징은 [컴포넌트 커스터마이징](/guide/getting-started-component.html#컴포넌트-커스터마이징하기)에서 확인하실 수 있습니다.
:::
