# 테마 색상

`newtil-css`는 ─ [`main`](#main), [`sub`](#sub), [`accent`](#accent), [`base`](#base) ─ 네 가지 테마 색상를 제공하며 다음의 속성에서 사용되고 있습니다:

-   [`background-color`](../utility/background/background-color.md)
-   [`border-color`](../utility/border/border-color.md)
-   [`font-color`](../utility/font/font-color.md)

## Default

### main

주요 색을 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:main-${item}`" > {{ item }} </div>
</div>

```html
<div class="d:flex">
    <div class="bg-color:main-1 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        1
    </div>
    <div class="bg-color:main-2 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        2
    </div>
    <div class="bg-color:main-3 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        3
    </div>
</div>
```

```css
:root {
    --color-main-1: #99c842;
    --color-main-2: #85b132;
    --color-main-3: #759d2a;

    --rgb-main-1: rgb(153, 200, 66);
    --rgb-main-2: rgb(133, 177, 50);
    --rgb-main-3: rgb(117, 157, 42);
}
```

### sub

주요 색을 보조하는 색을 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:sub-${item}`" > {{ item }} </div>
</div>

```css
:root {
    --color-sub-1: #339af0;
    --color-sub-2: #228be6;
    --color-sub-3: #1c7ed6;

    --rgb-sub-1: 51, 154, 240;
    --rgb-sub-2: 34, 139, 230;
    --rgb-sub-3: 28, 126, 214;
}
```

### accent

경고, 오류 등 강조를 나타냅니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:accent-${item}`" > {{ item }} </div>
</div>

```css
:root {
    --color-accent-1: #ff6b6b;
    --color-accent-2: #fa5252;
    --color-accent-3: #f03e3e;

    --rgb-accent-1: 255, 107, 107;
    --rgb-accent-2: 250, 82, 82;
    --rgb-accent-3: 240, 62, 62;
}
```

### base

중립적인 색입니다.

<div class="d:flex">
  <div v-for="item of Array.from({length: 10}, (v, i) => i + 1)" class="h:10 w:10" :class="`d:flex ai:center jc:center c:base-1 bg-color:base-${item}`" > {{ item }} </div>
</div>

```css
:root {
    --color-base-1: #ffffff;
    --color-base-2: #e4e7ea;
    --color-base-3: #dee2e6;
    --color-base-4: #ced4da;
    --color-base-5: #adb5bd;
    --color-base-6: #868e96;
    --color-base-7: #495057;
    --color-base-8: #343a40;
    --color-base-9: #1a1c20;
    --color-base-10: #000000;

    --rgb-base-1: 255, 255, 255;
    --rgb-base-2: 228, 231, 234;
    --rgb-base-3: 222, 226, 230;
    --rgb-base-4: 206, 212, 218;
    --rgb-base-5: 173, 181, 189;
    --rgb-base-6: 134, 142, 150;
    --rgb-base-7: 73, 80, 87;
    --rgb-base-8: 52, 58, 64;
    --rgb-base-9: 26, 28, 32;
    --rgb-base-10: 0, 0, 0;
}
```

## Overriding

테마 색상을 재정의할 수 있습니다. 다음은 `main` 색상을 녹색에서 노란색으로 재정의하는 예시입니다. 사용한 클래스에는 변화가 없지만 `--color-main`과 `--rgb-main`의 값을 수정함으로써 박스의 배경 색상이 변경되었습니다.

<div class="d:flex">
  <div class="h:10 w:10 d:flex ai:center jc:center c:base-1" style="background-color: #FFDD54">
    1
  </div>
  <div class="h:10 w:10 d:flex ai:center jc:center c:base-1" style="background-color: #FFD322">
    2
  </div>
  <div class="h:10 w:10 d:flex ai:center jc:center c:base-1" style="background-color: #F0C000">
    3
  </div>
</div>

```html
<div class="d:flex">
    <div class="bg-color:main-1 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        1
    </div>
    <div class="bg-color:main-2 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        2
    </div>
    <div class="bg-color:main-3 h:10 w:10 d:flex ai:center jc:center c:base-1 ">
        3
    </div>
</div>
```

```css
:root {
    --color-main-1: #ffdd54;
    --color-main-2: #ffd322;
    --color-main-3: #f0c000;

    --rgb-main-1: rgb(255, 221, 84);
    --rgb-main-2: rgb(255, 211, 34);
    --rgb-main-3: rgb(240, 192, 0);
}
```
