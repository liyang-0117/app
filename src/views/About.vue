<template>
      <ul>
          <li v-for='(item,index) in list' :key='index'>
              <img :src="item.img" alt="">
              <h4>{{item.title}}</h4>
          </li>
      </ul>
</template>

<script>

import Axios from 'axios'
export default {
    data() {
      return {
        list:[]
      }
    },
    created() {
       Axios.get('/api/list').then(res=>{
         this.list=res.data.data
       })
    },
}
</script>
<style>
    img{
      width:300px;
      height:300px;
    }
</style>
