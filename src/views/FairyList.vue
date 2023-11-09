<script>
import sidebar from '../components/sidebar.vue'
import fairyGrid from '../components/fairyGrid.vue'

export default {
    components: {
        sidebar,
        fairyGrid
    },
}
</script>
<template>
    <sidebar />
    <div class="fairylist-wrapper">
        <div class="fairylist">
            <h1>Fairy List Search</h1>
        <p>Discover the best formations for every Fairy in The Legend of Neverland.</p>
    <fairyGrid />    
    </div>
    </div>
</template>
<style lang="scss">
    @import '../assets/styles/fairylist.scss';
</style>
