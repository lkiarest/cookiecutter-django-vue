{% if cookiecutter.use_sentry == 'y' -%}
/**
 * encapsulate raven-js for easy usage.
 * @see @{@link https://docs.sentry.io/clients/javascript/integrations/vue/}
 */

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import {DSN} from '@/conf/raven.conf'

let installed = false

const install = (Vue) => {
  if (installed) {
    return
  }

  try {
    Raven.config(DSN, {
      release: '1.0.0' // don't fetch from git header
    }).addPlugin(RavenVue, Vue).install()
    installed = true
  } catch (e) {
    console.error(e)
    console.info('raven install failed, please check it in {{cookiecutter.project_slug}}/settings.py and fe/src/conf/raven.conf.js')
  }

  // global error handler
  window.onerror = e => {
    raise(e)
  }
}

export const raise = (e) => {
  return installed && Raven.captureException(e)
}

export const capture = (msg, extra) => {
  return installed && Raven.captureMessage(msg, extra)
}

export const info = (msg) => {
  return capture(msg, {level: 'info'})
}

export const warning = (msg) => {
  return capture(msg, {level: 'warning'})
}

export const error = (msg) => {
  return capture(msg, {level: 'error'})
}

export const context = (fn) => {
  return installed && Raven.context(fn)
}

export default {
  install,
  info,
  warning,
  error,
  raise,
  context
}
{%- endif %}
