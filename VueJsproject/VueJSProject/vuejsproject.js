
      var vm = new Vue({
    el: '#app',
        data: function(){
          return{
            img:null,fact:null
          }

        }, 
        methods:{
          APIcall: async function(){
            axios
              .get('https://cat-fact.herokuapp.com/facts/random')
              .then(response => (this.fact = response.data.text))
            axios
              .get('https://aws.random.cat/meow?ref=apilist.fun')
              .then(response => (this.img = response.data.file))
          }
        }   
})  


