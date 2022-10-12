
export const photos = {
    namespaced: true,

    state(){
        return{
            all: [],
            cache: {
                
            }

        }
    }, 

    mutations: {
        setPhotosForCurrentAlbum(state: any, {photos , albumId }){
            state.all = photos
            state.cache[albumId] = photos
        }

    },

    actions: {

        async getByAlbum(ctx: any, {albumId}: any){
            console.log(albumId)
            if(ctx.state.cache[albumId]){
                ctx.commit('setPhotosForCurrentAlbum', {photos: ctx.state.cache[albumId], albumId})
                return
            }
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            const json = await res.json()
            ctx.commit('setPhotosForCurrentAlbum', {photos: json, albumId})
        }

    }
}