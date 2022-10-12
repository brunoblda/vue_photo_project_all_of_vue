export const albums = {
    namespaced: true,

    state(){
        return{
            all: []
        }
    }, 

    mutations: {

        setAlbums(state: any, albums: any){
            state.all = albums
        }

    },

    actions: {

        async fetch(ctx: any){
            const res = await window.fetch('https://jsonplaceholder.typicode.com/albums')
            const json = await res.json()
            ctx.commit('setAlbums', json)
        }

    }
}