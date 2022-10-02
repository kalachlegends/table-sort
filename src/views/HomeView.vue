<template>
 <div class="input-block d-flex gap-20">
  <input class="input" v-model="searchQuery" @change="searchQuery" type="text">

  <select class="select"  @change="updateCurretKey">
    <option value="title">Название</option>
    <option value="quantity">Количество</option>
    <option value="distance">Растояние</option>
  </select>
  
  <select class="select" v-model="sortValue"  >
    <option value="contains">Cодержит</option>
    <option value="more">Больше</option>
    <option value="less">Меньше</option>
    <option value="equally">Равно</option>
  </select>
 </div>
<Vtable :theads="theads">
 
  <tr v-for="column in sortTableAndSearch(searchQuery,sortValue)">
    <td> {{column.createdAt }}</td>
    <td> {{column.title }}</td>
    <td> {{column.quantity }}</td>
    <td> {{column.distance
    }}</td>
  </tr>
</Vtable>

<MyPagination @changePage="changePage" v-model="page" :pageNumber="1" :totalPage="totalPage" />

</template>

<script>
// @ is an alias to /src
import Vtable from '@/components/Table.vue'
import MyPagination from '@/components/MyPagination.vue'
import {mapGetters ,mapMutations} from 'vuex'

export default {
  name: 'HomeView',
  computed: 
    mapGetters(['allTables','page','limit','totalPage','searchQueryTable','sortTableAndSearch'])
  ,
  components: {
    Vtable,
    MyPagination
  },
 async mounted()  {
  this.$store.dispatch("fetchTable")
 },
  data() {
    return {
      searchQuery: "",
      sortValue: "contains",
      theads: ["Дата","Название","Количество","Растояние"]
    }
  },
  methods: {
    ...mapMutations(['updatePage','updateCurretKeySearch']),
    changePage(page) {
      console.log(page)

      console.log()
      this.updatePage(page)
      this.$store.dispatch("fetchTable")
    },
    updateCurretKey(event){
      console.log(event.target.value)
      this.updateCurretKeySearch(event.target.value)
    }
  }
}
</script>
<style scoped lang="scss">
  .select {
    padding: 10px;
    font-size: 15px;
    border: 1px solid #009879;;
    filter: drop-shadow(0px 0px 10px rgb(0, 152, 121, 0.2));
    outline:none;
  }
  .input{
    padding: 10px;
    font-size: 15px;
    border: 1px solid #009879;;
    outline:none;
    &:focus{
      border: 1px solid #009879;
      filter: drop-shadow(0px 0px 10px rgb(0, 152, 121, 0.2));
    }
   
  }
.d-flex{
  display: flex;
}
.gap-20{
  gap: 20px;
}
.input-block {
  align-items: center;
  justify-content: center;
}
</style>