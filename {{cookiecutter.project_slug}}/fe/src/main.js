// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
{% if cookiecutter.use_sentry == 'y' -%}
import raven from '@/utils/raven'
{%- endif %}

Vue.config.productionTip = false

{% if cookiecutter.use_sentry == 'y' -%}
raven.install(Vue)
raven.info('app started')
{%- endif %}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
