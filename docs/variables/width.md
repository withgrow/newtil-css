# width

변수 `width`, `width-percent`는 요소의 너비를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:
- [width](../utility/width/width)
- [max-width](../utility/width/max-width)
- [min-width](../utility/width/min-width)

## Default
열 단계의 고정 크기와 퍼센트가 기본 제공됩니다.
```css
:root {
    --width-0: 0px;
    --width-1: 50px;
    --width-2: 100px;
    --width-3: 150px;
    --width-4: 200px;
    --width-5: 250px;
    --width-6: 300px;
    --width-7: 350px;
    --width-8: 400px;
    --width-9: 450px;
    --width-10: 500px;
    --width-percent-1: 10%;
    --width-percent-2: 20%;
    --width-percent-3: 30%;
    --width-percent-4: 40%;
    --width-percent-5: 50%;
    --width-percent-6: 60%;
    --width-percent-7: 70%;
    --width-percent-8: 80%;
    --width-percent-9: 90%;
    --width-percent-10: 100%;
}
```

## Overriding

다음과 같이 크기를 재정의할 수 있습니다.

```css
:root {
    --width-0: 0px;   /* [!code --] */
    --width-1: 50px;  /* [!code --] */
    --width-2: 100px; /* [!code --] */
    --width-0: 32px;   /* [!code ++] */
    --width-1: 48x;  /* [!code ++] */
    --width-2: 64px; /* [!code ++] */
}
```
