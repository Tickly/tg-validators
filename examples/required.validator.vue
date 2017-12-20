<template>
    <section>
        <h2>Required</h2>
        <div v-text="errs"></div>
    </section>
</template>
<script>
import { Validator } from '@'

export default {
    data() {
        return {
            errs: null,
        }
    },
    mounted() {
        const form = {
            a: '',
            b: null,
            c: 0,
            d: [],
            e: false,
        }, labels = {
            a: 'A',
        }, rules = [
            ['required', 'a,b,c,d,e'],
        ];

        Validator
            .validate(form, rules, labels)
            .then(() => {

            })
            .catch(([err, errs]) => {
                this.errs = errs;
            });
    },
}
</script>
