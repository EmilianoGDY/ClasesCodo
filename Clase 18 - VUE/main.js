// let app = new Vue({
//     el:"#app",
//     data:{
//         valorModel:"Hola",
//         valorBind:"Hola",

//         link:"https://docs.google.com/document/d/1O6-2sG0Lm239LR_eE3p7UV39pPf2vNipGkORwH3mTEQ/edit#heading=h.u2jm18f2s8sl",
//         nombreLink:"Doc de Vue",
//         tecnologias:["html", "css", "javascript"],
//     }
// }
// )


new Vue({
    el:"#formVue",
    data:{
        tareas:[],
        nuevaTarea:"",
    },

    methods:{
        guardarTarea(){
            this.tareas.push(this.nuevaTarea),
            this.nuevaTarea=''
        }
    }







})