# height

변수 `height`, `height-percent`는 요소의 높이를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:
- [height](../utility/height/height)
- [max-height](../utility/height/max-height)
- [min-height](../utility/height/min-height)

## Default
열 단계의 고정 크기와 퍼센트가 기본 제공됩니다.
```css
:root {
    --height-0: 0px;
    --height-1: 50px;
    --height-2: 100px;
    --height-3: 150px;
    --height-4: 200px;
    --height-5: 250px;
    --height-6: 300px;
    --height-7: 350px;
    --height-8: 400px;
    --height-9: 450px;
    --height-10: 500px;
    --height-percent-1: 10%;
    --height-percent-2: 20%;
    --height-percent-3: 30%;
    --height-percent-4: 40%;
    --height-percent-5: 50%;
    --height-percent-6: 60%;
    --height-percent-7: 70%;
    --height-percent-8: 80%;
    --height-percent-9: 90%;
    --height-percent-10: 100%;
}
```

## Overriding

다음과 같이 크기를 재정의할 수 있습니다.

```css
:root {
    --height-0: 0px;   /* [!code --] */
    --height-1: 50px;  /* [!code --] */
    --height-2: 100px; /* [!code --] */
    --height-0: 32px;   /* [!code ++] */
    --height-1: 48x;  /* [!code ++] */
    --height-2: 64px; /* [!code ++] */
}
```
