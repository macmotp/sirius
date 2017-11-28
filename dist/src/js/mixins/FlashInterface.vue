<script>
    export default {
        created() {
            window.flash = function(message, level) {
                if (message === undefined) {
                    console.warn('Flash Warning: you must specify a message')
                }
                window.events.$emit('flash', {message, level});
            };
        },
        methods: {
            flash(message = 'Message', level = 'default') {
                flash(message, level);
            },
            flashSuccess(message = 'Success') {
                this.flash(message, 'success')
            },
            flashWarning(message = 'Warning') {
                this.flash(message, 'warning')
            },
            flashError(message = 'Error') {
                this.flash(message, 'error')
            }
        }
    }
</script>

