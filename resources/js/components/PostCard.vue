<template>
    <div class="card post rounded-lg border border-white/30 overflow-hidden">
        <img src="https://picsum.photos/450/250" class="w-full object-cover" alt="">
        <div class="car__body p-6">
            <h4 class="post__title mb-4 text-lg">{{ post.title }}</h4>
            <p class="text-orange-400 text-sm mb-2" v-if="post.category">{{ post.category.name }}</p>
            <ul class="tags flex flex-wrap gap-2 items-center">
                <li class="tag bg-white/30 rounded-full text-xs block px-4" v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>