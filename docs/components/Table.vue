<script setup lang="ts">
</script>

<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
      <th scope="col">속성</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>display:block</td>
      <td>
          d:block
      </td>
      <td>{ display: block !important; }</td>
    </tr>
    <tr>
      <td>display:inline-block</td>
      <td>
          d:inline-block
      </td>
      <td>{ display: inline-block !important; }</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
.table {
  --table-border-color: var(--color-base-3);

  /*
   * table:1, table:sm
   */
  --table-cell-py-sm: 0.375rem; /* 6px */
  --table-cell-px-sm: 0.75rem; /* 12px */

  /*
   * table:2, table:md
   */
  --table-cell-py-md: 0.625rem; /* 10px */
  --table-cell-px-md: 1rem; /* 16px */

  /*
   * table:3, table:lg
   */
  --table-cell-py-lg: 0.875rem; /* 14px */
  --table-cell-px-lg: 1.25rem; /* 20px */

  /*
   * table:striped
   */
  --table-striped-bg: rgba(var(--rgb-base-6), 0.1);

  /*
   * table:hover
   */
  --table-hover-bg: rgba(var(--rgb-base-6), 0.15);

  /*
   * table-caption
   */
  --table-caption-gap: 0.5rem; /* 8px */
}

.table {
  width: 100%;
  border-collapse: collapse; /* border가 겹치지 않도록 설정. border가 두꺼워지는 스타일을 막음 */
  vertical-align: middle;
  caption-side: bottom;
}

.table > tbody {
  vertical-align: inherit;
}

.table tr {
  border-bottom: 1px solid var(--table-border-color);
}

.table > :not(caption) > * > * {
  padding: var(--table-cell-py-md) var(--table-cell-px-md);
  vertical-align: inherit;
  transition: background-color 0.12s;
}

/* table:size ---------------------------------------------------------------------------- */
.table\:1 > :not(caption) > * > *,
.table\:sm > :not(caption) > * > * {
  padding: var(--table-cell-py-sm) var(--table-cell-px-sm);
}

.table\:2 > :not(caption) > * > *,
.table\:md > :not(caption) > * > * {
  padding: var(--table-cell-py-md) var(--table-cell-px-md);
}

.table\:3 > :not(caption) > * > *,
.table\:lg > :not(caption) > * > * {
  padding: var(--table-cell-py-lg) var(--table-cell-px-lg);
}

/* table:striped -------------------------------------- */
.table\:striped > tbody > tr:nth-of-type(odd) > * {
  background-color: var(--table-striped-bg);
}

/* table:hover -------------------------------------- */
.table\:hover > tbody > tr:hover > * {
  background-color: var(--table-hover-bg);
}

/* table-caption -------------------------------------- */
.table > caption {
  margin-top: var(--table-caption-gap);
  text-align: center;
}

.table-caption\:top {
  caption-side: top;
}
.table-caption\:top > caption {
  margin-top: 0;
  margin-bottom: var(--table-caption-gap);
}

.table-caption\:bottom {
  caption-side: bottom;
}
</style>