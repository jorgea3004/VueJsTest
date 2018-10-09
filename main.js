Vue.component('peliculas', {
	template: '<div>'
		+'<h1>COMPONENTE {{titulo}}</h1>'
		+'<h2>Ajax listado</h2>'
			+'<ul v-if="posts">'
				+'<li v-for="(post,index) in posts">'
					+'{{post.title}}'
				+'</li>'
			+'</ul>'
			+'<span v-else>CARGANDO LISTADO ...</span>'
		+'</div>',
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta) => {
				this.posts = respuesta.data;
			});
	},
	data(){
		return {
			titulo: 'Peliculas',
			posts: null
		}
	}
});
Vue.component('frutas', {
	props: ['objeto'],
	template: '<div>'
		+'<h2>COMPONENTE FRUTAS</h2>'
		+'<h3>{{objeto.nombre}}</h3>'
	+'</div>'
});

Vue.component('padre', {
	props: ['objeto'],
	template: '<div>'
		+'<h2>COMPONENTE PADRE</h2>'
		+'<hijo></hijo>'
	+'</div>'
});

Vue.component('hijo', {
	props: ['objeto'],
	template: '<div>'
		+'<h2>COMPONENTE HIJO</h2>'
		+'<p style="background:yellow">Soy un parrafo</p>'
	+'</div>'
});

Vue.filter();
new Vue ({
	el:'main',
	mounted(){
	},
	data: {
		elegido: 'padre',
		posts: null,
		texto:'Hola Munde',
		nombre: 'Nombre por defecto',
		apellido: 'Gonzalez',
		nota: 5,
		peliculas: ['Dark Knight','Suicide Squad','Batman','Gotham'],
		frutas:[
			{nombre:'manzana', temporada:'invierno', precio:'bajo'},
			{nombre:'naranja', temporada:'primavera', precio:'bajo'},
			{nombre:'banana', temporada:'invierno', precio:'bajo'},
			{nombre:'ciruela', temporada:'primavera', precio:'bajo'},
			{nombre:'Uva', temporada:'Otono', precio:'bajo'},
			{nombre:'Sandia', temporada:'invierno', precio:'bajo'},
			{nombre:'Jicama', temporada:'primavera', precio:'bajo'}
		],
		superfruta: {nombre:'Jicama', temporada:'primavera', precio:'bajo'},
		peliculaNueva: null,
		busqueda: null
	},
	methods: {
		crearPelicula(){
			//alert(this.peliculaNueva)
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva=null;
		},
		borrarPelicula(index){
			//alert('Borrando')
			this.peliculas.splice(index,1);
		}
	},
	computed: {
		nombreYapellidos(){
			return this.nombre + " " + this.apellido + " -> " + this.nota;
		},
		ordenarPeliculas(){
			return this.peliculas.sort();
		},
		buscarFruta(){
			return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
		}
	}
});

const vue2 = new Vue({
	el: 'app',
	data: {
		texto: 'Segunda Instancia VUE'
	}
});