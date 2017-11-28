<template>
    <pre :data-src="src">
        <code>
           <slot></slot>
        </code>
    </pre>
</template>

<script>

    import Prism from 'prismjs';

    export default {

        props: {
            src: {
                type: String
            }
        },

        mounted() {
            Prism.highlightAll();
        },

    };
</script>

<style lang="scss">
    pre[class*="language-"] {
        display: flex;
    }
    pre {
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: #727688;
        }
        .token.punctuation {
            color: #727688;
        }
        .namespace {
            opacity: .7;
        }
        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: #727688;
        }
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: #346980;
        }
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
            color: #c1685d;
            background: hsla(0, 0%, 100%, .5);
        }
        .token.atrule,
        .token.attr-value,
        .token.keyword {
            color: #3a98a1;
        }
        .token.function {
            color: #c1685d;
        }
        .token.regex,
        .token.important,
        .token.variable {
            color: #d2c696;
        }
        .token.important,
        .token.bold {
            font-weight: bold;
        }
        .token.italic {
            font-style: italic;
        }
        .token.entity {
            cursor: help;
        }
    }
</style>