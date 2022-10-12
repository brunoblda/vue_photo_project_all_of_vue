<template>
  <layout>
    <template v-slot:header>
      Header
    </template>

    <template v-slot:sidebar>
      <album-component
        v-for="album in albums"
        :key="album.id"
        :album="album"
      >
      
      {{album.title}}

      </album-component>

    </template>

    <template v-slot:content>
        <router-view></router-view>
    </template>
  </layout>
</template>

<script lang="ts">
import { defineComponent, ref , onMounted, computed} from 'vue'
import Layout from '@/components/LayoutComponent.vue'
import { useStore} from 'vuex'
import AlbumComponent from '@/components/AlbumComponent.vue'

export default defineComponent({
  name: "PhotoApp",
  components: {
    Layout,
    AlbumComponent
},

  setup(){

    const store = useStore()

    onMounted(async () =>{
      store.dispatch('albums/fetch')  
    })

    const albums = computed(()=> {
      return store.state.albums.all
    })

    const photos = computed(() => {
      return store.state.photos.all
    })

    return{
      albums,
      photos
    }
  }
    
})
</script>


<style>
* {
  box-sizing: border-box;
}

body{
  margin: 0
}
</style>
