import {
	createWebHistory,
	createRouter
} from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";

const routes = [{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});