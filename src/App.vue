<template>
  <div id="app">
    <header>
      <router-link to="/home">关注</router-link> 
      <router-link to="/about">发现</router-link>
       <router-link to="/my">同城</router-link> 
    </header>
    <main>
       <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  header{
    height:50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      text-decoration: none;
      color:black;
    }
  }
  main{
    flex:1;
    overflow: auto;
  }
  footer{
    height:50px;
  }
}
</style>
