<script setup>
import ExampleSection from "./demo/ExampleSection.vue";
</script>

# 폼

폼 컴포넌트는 사용자의 데이터를 응답받기 위한 컴포넌트입니다.

## 모아보기

### 타입

`outline-box`, `shadow`, `underline`, `outline-none` 타입이 제공됩니다. 자세한 내용을 보려면 [여기](#type)를 클릭하세요.

#### outline-box

<form class="n-form my:4">
  <div>
    <label>
      <span>이름</span>
      <input type="text" placeholder="이름을 입력해주세요"/>
    </label>
  </div>
</form>

#### shadow

<form class="n-form n-form-type:shadow my:4">
  <div>
    <label>
      <span>이름</span>
      <input type="text" placeholder="이름을 입력해주세요"/>
    </label>
  </div>
</form>

#### underline

<form class="n-form n-form-type:underline my:4">
  <div>
    <label>
      <span>이름</span>
      <input type="text" placeholder="이름을 입력해주세요"/>
    </label>
  </div>
</form>

#### outline-none

<form class="n-form n-form-type:outline-none my:4">
  <div>
    <label>
      <span>이름</span>
      <input type="text" placeholder="이름을 입력해주세요"/>
    </label>
  </div>
</form>

### 레이아웃

필드의 `label`의 위치를 조정할 수 있습니다.

## 타입 {#type}

## 레이아웃 {#layout}
