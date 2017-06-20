<script>
    export default {

        bind: function (el, binding) {
            var className = binding.value ? binding.value : 'active';
            el.addEventListener('click', (e) => {
                e.preventDefault();
                if(e.target.tagName != 'BUTTON' && e.target.tagName != 'I' && e.target.className != 'button' || e.target.className == 'fa fa-undo')
                    el.classList.toggle(className);

            })
        }

    }
</script>