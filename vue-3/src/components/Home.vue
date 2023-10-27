<script>
 
export default {
  data() {
    return {
      data:{
        backendData:''
      }
    }
  },
  methods:{
    getdata(){
      // step 1: get data using base url one way
      // this.axios.get(`${window.baseurl}/user`).then((res)=>{
      //   this.data.backendData = res.data;
      // });

      // step 2: get data using second ways
      this.axios.get(`/user`).then((res)=>{
        this.data.backendData = res.data;
      });
    }
  },
  mounted(){
    this.getdata();
  }
}

</script>

<template>
  <div class="greetings">
    
    <h3>{{ data.backendData }}</h3>
  </div>
</template>

