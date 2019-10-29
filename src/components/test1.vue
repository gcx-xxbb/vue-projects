<template>
    <div class="page">
        <ul>
            <li v-for="book in books" :key="book.name">{{ book.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            books:[
                {name:"《JavaScript高级程序设计》"},
                {name:"《JavaScript语言精粹》"},
                {name:"《JavaScript经典实例》"}
            ]
        };
    }
}
</script>

<style scoped>

</style>>