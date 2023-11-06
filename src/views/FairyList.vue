<script>
import sidebar from '../components/sidebar.vue'

export default {
    components: {
        sidebar
    },
}
</script>
<template>
    <sidebar />
    <div class="fairylist-wrapper">
        <div class="fairylist">
            <h1>Fairy List Search</h1>
        <p>Discover the best formations for every Fairy in The Legend of Neverland.</p>
        </div>
    </div>
</template>
<style lang="scss">
    @import '../assets/styles/fairylist.scss';
</style>
