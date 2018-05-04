{% if cookiecutter.use_sentry == 'y' -%}
/**
 * raven configuration for error handlers
 */

export const DSN = 'https://<key>:<secret>@sentry.io/<project>'
{%- endif %}
