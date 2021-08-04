const app = Vue.createApp({
    data() {
        return{
            counter:0,
            name:'',
            confirmedName:''
        };
    },
    watch:{
        counter(value){
            if(value > 50){
                this.counter = 0;
            }
        }
    },
    methods:{
        confirmInput(){
            this.confirmedName = this.name
        },
        submitForm(){
            alert('Submitted')
        },
        setName(event){
            this.name = event.target.value;
        },
        add(num){
            this.counter = this.counter + num;
        },
        reduce(num){
            this.counter = this.counter - num;
        },
        resetInput(){
            this.name=''
        },
    }
});

app.mount('#events');