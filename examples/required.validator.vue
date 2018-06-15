<template>
    <section>
        <h2>Required</h2>
        <div v-text="errs"></div>
    </section>
</template>
<script>
import { Validator, Model } from '@'

class Book extends Model {
    get attributes() {
        return [
            'name',
        ]
    }

    get rules() {
        return [
            ['required', 'name'],
        ]
    }
}

export default {
    data() {
        return {
            errs: null,
        }
    },
    mounted() {

        let book = new Book();

        book.validate().then(console.log).catch(console.log)


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
            ['number', 'c', { min: 1 }],
            ['number', 'c', { min: 1 }],
        ];

        Validator.validate(form, rules, labels)
            .then(() => {
                console.log('yes');
            })
            .catch((err) => {
                console.log('catch', err);
            })
    },
}
</script>
