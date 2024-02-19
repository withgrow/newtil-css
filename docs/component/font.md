<script setup>
import ExampleSection from "../components/ExampleSection.vue";
</script>

# 폰트

폰트 컴포넌트는 제목을 나타낼 수 있는 컴포넌트입니다.

## 사용법

폰트 컴포넌트는 요소에 `n-font:타입` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <div class="n-font:title">Title</div>
</ExampleSection>

```html
<div class="n-font:title">Title</div>
```

## 타입

<ExampleSection class="fl-dir:column">
  <div class="n-font:title">Title</div>
  <div class="n-font:subtitle">Sub title</div>
  <div class="n-font:h1">Heading 1</div>
  <div class="n-font:h2">Heading 2</div>
  <div class="n-font:h3">Heading 3</div>
</ExampleSection>

| 타입      | 클래스             | 약어 클래스                  |
| --------- | ------------------ | ---------------------------- |
| title     | `n-font:title`     | -                            |
| subtitle  | `n-font:subtitle`  | -                            |
| heading-1 | `n-font:heading-1` | `n-font:heading` `n-font:h1` |
| heading-2 | `n-font:heading-2` | `n-font:h2`                  |
| heading-3 | `n-font:heading-3` | `n-font:h3`                  |
