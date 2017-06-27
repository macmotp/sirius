<script>
    export default {

        bind: function (el, binding) {
            var className = binding.arg ? binding.arg : 'active';
            el.addEventListener('click', (e) => {
                e.preventDefault();
                var target = binding.value ? e.target.closest(String('.' + binding.value)) : el;
                target.classList.toggle(className);
            })
        }

    }
</script>