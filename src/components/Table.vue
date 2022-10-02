<template lang="">
  <table class="styled-table">
    <thead>
      <tr>
        <th v-for="thead in theads">{{ thead }}</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
        theads: {
            type: Array,
            default: () => []
        }
    },
}
</script>
<style scoped lang="scss">
  td{
    text-align: left;
  }
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-size: 20px;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  
  text-align: center;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>