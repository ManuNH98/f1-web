<template>
    <div class="text-center">
        <p>{{ constructorDetail.constructorId }}</p>
        <p>{{ constructorDetail.name}}</p>
        <p>{{ constructorDetail.url}}</p>
        <p>{{ constructorDetail.nationality}}</p>
    </div>
</template>

<script>
import API_CONSTRUCTOR from '../logic/constructor'

export default{
    name: 'ConstructorDetails',
    props: ['id'],
    data(){
        return {
            constructorDetail:{},
            constructor: this.id,
        }
    },
    
    beforeMount(){
        this.getConstructorDetail()
    },
    methods: {
        getConstructorDetail(){
            API_CONSTRUCTOR.getConstructor(this.constructor)
            .then(res => {
                this.constructorDetail = res.data.MRData.ConstructorTable.Constructors[0]
                console.log(this.constructorDetail)
            })
        },
    }
}
</script>