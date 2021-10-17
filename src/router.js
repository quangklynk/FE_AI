import Vue from "vue";
import Router from "vue-router";

import  Menu  from "./components/Menu.vue";

import  Test  from "./components/Test/Index.vue";
import  Train  from "./components/Train/Index.vue";

// import  Test  from "./components/Test/Index.vue";
import  Train_MLP  from "./components/Train/MLP.vue";

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
        { path: "/test/mlp", component: Test },
        { path: "/train/mlp", component: Train_MLP },
      ],
    },
  ],
});

export default router;
