<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import appConfig from "@/app.config";
import { notificationMethods } from "@/state/helpers";

let backend_url = "https://warm-thicket-75753-5d43d26eb2ed.herokuapp.com"
if(process.env.NODE_ENV == "production"){
  backend_url = ""
}

export const url = backend_url;
export default {
  name: "app",
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
  methods: {
    clearNotification: notificationMethods.clear,
  },
  watch: {
    /**
     * Clear the alert message on route change
     */
    $route() {
      // clear alert on location change
      this.clearNotification();
    },
  },
  mounted() {
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  }
};
</script>
