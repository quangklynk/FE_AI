import Vue from "vue";
import Router from "vue-router";

import  Menu  from "./components/Menu.vue";

import  Test  from "./components/Test/Index.vue";
import  Train  from "./components/Train/Index.vue";

import  Test_MLP  from "./components/Test/MLP.vue";
import  Train_MLP  from "./components/Train/MLP.vue";

import  Computer  from "./components/Computer/Index.vue";

import  Data  from "./components/Data/Index.vue";
import  CPU  from "./components/Data/CPU.vue";
import  Brand  from "./components/Data/Brand.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Menu,
      children: [
        { path: "/test/j48", component: Test },
        { path: "/train/j48", component: Train },
        { path: "/test/mlp", component: Test_MLP },
        { path: "/train/mlp", component: Train_MLP },
        { path: "/computer", component: Computer },
        { path: "/data", component: Data },
        { path: "/cpu", component: CPU },
        { path: "/brand", component: Brand },
      ],
    },
  ],
});

export default router;
