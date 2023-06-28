<template>
   <div>
     <CountPage/>
     <hr/>
     <PersonPage/>
   </div>
</template>

<script>
import CountPage from "@/components/CountPage";
import PersonPage from "@/components/PersonPage";
export default {
  name: "App",
  components:{
    CountPage,
    PersonPage
  },
  mounted() {
    console.log('App', this);
  }
}
</script>
<style lang="css" scoped>

</style>



