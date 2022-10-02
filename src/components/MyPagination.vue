<template lang="">
    <div class="pages"> 
    <div 
    v-for="page in totalPage" 
    :key="optionPage"
    :class="{
     'current-page': modelValue == page
    }"
    class="page-one"
     @click="changePage(page)"
 
    >
     {{ page }}
    </div></div>
 </template>
 <script>
 export default {
     data() {
         return {
             page: 1
 
         }
     },
     name: "my-pagination",
     props: {
         modelValue: {
             type: Number,
             default: 0
         },
         pageNumber: {
             type: Number
         },
         totalPage: {
             type: Number
         },
     },
     methods: {
         changePage(page) {
             this.$emit("update:modelValue", page)
             this.$emit('changePage', page)
         }
 
     },
 
 
 }
 </script>
 <style scoped >
 .pages {
     display: flex;
     justify-content: space-between;
 }
 
 .page-one {
     border: 1px solid black;
     padding: 20px;
 }
 
 .current-page {
     border: 1px solid rgb(141, 0, 0);
 }
 </style>