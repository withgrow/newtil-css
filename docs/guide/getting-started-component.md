<script setup>
import ExampleSection from "../components/ExampleSection.vue"
</script>

# 컴포넌트 시작하기

## 소개

newtil-css는 간편한 웹 문서 스타일링을 지원하기 위해 [다양한 컴포넌트](../component/overview)를 제공합니다.

이 컴포넌트들을 사용하면 `button`, `list`, `form`, `table` 등 다양한 컨텐츠를 빠르고 간편하게 스타일링할 수 있습니다.

예를 들어, 다음 HTML 코드를 통해 손쉽게 버튼 컴포넌트를 생성할 수 있습니다.

```html{2}
<!-- 이 버튼 요소에 기본 스타일이 적용됩니다! -->
<button class="n-btn">Button</button>
```
<ExampleSection>
    <template #h>버튼 사용하기</template>
    <button class="n-btn">Button</button>
</ExampleSection>

또한, `newtil-css`의 컴포넌트는 다양한 크기와 스타일, 레이아웃을 유연하게 적용할 수 있는 클래스 목록을 함께 제공합니다. 다음은 `List` 컴포넌트의 사용 예시입니다.

### List 기본 스타일
```html{1}
    <ul class="n-list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>consectetur adipiscing elit</li>
        <li>Morbi sed facilisis augue</li>
    </ul>
```

::: raw
<ExampleSection>
    <template #h>리스트 사용하기</template>
    <ul class="n-list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>consectetur adipiscing elit</li>
        <li>Morbi sed facilisis augue</li>
    </ul>
</ExampleSection>
:::

### List 변형
```html{1}
    <ul class="n-list n-tile-list">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <!-- ... -->
    </ul>
```

::: raw
<ExampleSection>
    <template #h>타일 리스트 사용하기</template>
    <ul class="n-list n-tile-list">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>Sit</li>
        <li>Amet</li>
        <li>Consecte</li>
        <li>Elit</li>
        <li>Morbi</li>
    </ul>
</ExampleSection>
:::

위의 예시에서 볼 수 있듯이, 기본 컴포넌트에 자주 사용되는 스타일과 레이아웃을 간편하게 적용하기 위해 몇 가지 추가 클래스를 제공하고 있습니다.

::: info
컴포넌트에 적용되는 클래스는 자주 사용되는 형태를 위주로 제공하고 있습니다.

추가 제안을 희망하는 경우, [깃허브를 통해 이슈로 제출](https://github.com/newlecture-corp/newtil-css/issues)해 주시기 바랍니다.
:::

## 컴포넌트 커스터마이징하기

`newtil-css`에서 제공하는 유틸리티 클래스를 통해 컴포넌트를 커스터마이징할 수 있습니다.

<table
class="n-table n-bbs-table n-table-hover n-table-border-bottom n-cell-width:1"
>
<thead>
    <tr>
        <th scope="col" class="lg:d:table-cell">
            <span>ID</span>
        </th>
        <th scope="col">
            <span>제목</span>
        </th>
        <th scope="col" class="d:none lg:d:table-cell">
            <span>종류</span>
        </th>
        <th scope="col" class="d:none lg:d:table-cell">
            <span>공개상태</span>
        </th>
        <th scope="col" class="d:none lg:d:table-cell">
            <span>마지막 업데이트</span>
        </th>
        <th scope="col" class="d:none lg:d:table-cell">
            <span class="d:none">PC 액션</span>
        </th>
    </tr>
</thead>
<tbody>
    <!-- 공지 목록 -->
    <tr>
    <td>1</td>
    <td class="d:flex ai:center">
        <RouterLink
        class="hover:underline"
        >
        제목
        </RouterLink>
    </td>
    <td class="d:none lg:d:table-cell">
        <span>카테고리</span>
    </td>
    <td class="d:none lg:d:table-cell">
        <span>
        공개
        </span>
    </td>
    <td class="d:none lg:d:table-cell">
        날짜
    </td>
    <td class="d:none lg:d:table-cell">
        <RouterLink
        data-tooltip="수정"
        class="n-btn n-btn:void h:2 w:2 p:0 tooltip tooltip:bottom tooltip:7"
        >
        <span class="icon icon:pencil_simple icon:3 icon:base-7">
            수정
        </span>
        </RouterLink>
        <button
        type="button"
        data-tooltip="삭제"
        class="n-btn n-btn:void h:2 w:2 p:0 tooltip tooltip:bottom tooltip:7"
        >
        <span class="icon icon:trash icon:3 icon:base-7">삭제</span>
        </button>
    </td>
    <td>
        <div
        class="n-dropdown"
        >
        <button
            class="n-btn n-btn:void h:2 w:2 p:0 va:middle"
        >
            <span
            class="icon icon:dots_three_outline_vertical_fill icon:3 icon:base-6"
            >
            더보기
            </span>
        </button>
        </div>
    </td>
    </tr>
    <!-- 공지 목록 끝 -->
</tbody>
</table>