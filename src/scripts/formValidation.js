import JustValidate from 'just-validate';

import {closeModal, openThanksModal} from './modal'

const validator  = new JustValidate('#form-request');

validator
    .addField('#name', [
        {
            rule: 'required',
        }
    ])
    .addField('#phone', [
        {
            rule: 'required',
        },
        {
            rule: 'maxLength',
            value: 13,
        },
        {
            rule: 'number',
        },
    ])
    .addField('#city', [
        {
            rule: 'required',
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        },
    ])

validator.onSuccess(() => {
    closeModal()
    openThanksModal()
})