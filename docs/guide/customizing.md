<script setup>
import ExampleSection from "../components/demo/ExampleSection.vue"
</script>

# 테마 커스터마이징
`Newtil CSS`는 [CSS 변수](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 재정의를 통해 여러분의 프로젝트에 맞는 테마를 적용할 수 있습니다. <br/>
이제 커스터마이징하는 방법을 알아봅시다. 🚀

## 커스터마이징 방법

`Newtil CSS`에서는 기본적으로 아래와 같은 메인 테마 색상을 제공하며, 해당 변수를 사용하는 모든  컴포넌트와 유틸리티에 자동으로 적용됩니다.

```css
:root {
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;
}
```

<ExampleSection class="d:flex ai:center gap:4">
  <button type="button" class="n-btn">Button</button>
  <input type="checkbox" class="n-toggle" checked/>
  <input type="radio" class="n-toggle n-toggle:dot" checked/>
</ExampleSection>

그런데 만약 여러분의 프로젝트 메인 컬러가 파란색 계열이라면, 이를 오버라이딩할 필요가 있습니다.

<ExampleSection class="d:flex ai:center gap:4">
  <button type="button" class="n-btn example">Button</button>
  <input type="checkbox" class="n-toggle example" checked/>
  <input type="radio" class="n-toggle n-toggle:dot example" checked/>
</ExampleSection>

### CSS 사용자 정의하기 {#overriding}

프로젝트에 맞게 스타일을 커스터마이징하려면, 다음과 같이 `root.css` 파일을 생성하고 추가합니다.

:::warning TIP
파일명은 사용자의 편의에 따라 자유롭게 변경할 수 있습니다.
:::

```css
/* css/root.css */
:root {
  /* main 테마 색상을 원하는 색상으로 설정했습니다 */
  --color-main-1: #3b5bdb;
  --color-main-2: #4263eb;
  --color-main-3: #4c6ef5;

  /* 추가로 필요한 스타일을 선언하세요 */
}
```

그리고 HTML 문서의 head 섹션에 `root.css`를 다음과 같이 추가합니다.

```html {11}
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/nutil-css@latest/dist/style.css" />
    <link href="css/root.css" type="text/css" rel="stylesheet" />
  </head>
</html>
```

이제 `root.css` 파일에 원하는 스타일을 추가하여 `Newtil CSS` 라이브러리를 프로젝트에 맞게 맞춤 설정할 수 있습니다.


<style>
.n-btn.example{
  background-color: #4263eb;
}

.n-toggle.example{
  background-color: #4263eb;
}

.n-toggle.n-toggle\:dot.example{
  background-color: #ffff;
  border-color: #4263eb;
}

.n-toggle.n-toggle\:dot.example::before{
  background-color: #4263eb;
}
</style>