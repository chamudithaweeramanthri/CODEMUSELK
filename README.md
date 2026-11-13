# CODEMUSELK

## Contact form configuration

Copy `.env.example` to `.env.local` and fill in the service ID, template ID,
and public key from your EmailJS account. Restart the Vite development server
after changing environment values. For deployment, add the same three variables
to the hosting project's environment settings and rebuild/redeploy.

The EmailJS template must use `user_name`, `user_email`, `user_subject`, and
`message`. Configure its recipient as `codemuselk.info@gmail.com` and its
reply-to field as `{{user_email}}`. Use only the public key in browser configuration.

Missing configuration and send failures show `/error`, with a return-to-form
action preserving the entered message and an option to open the visitor's email
app. The error page does not imply delivery. Unknown URLs show a 404 page.
