var app = new Vue(
    {
        el: '#root',
        data: {
            albums:[]

        },

        methods:{

        },

        mounted(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response)=> {
                //console.log(response);
                const result = response.data;
                //console.log(result);
                this.albums = result.response;
                //console.log(this.albums);
            })

        }
    }
)