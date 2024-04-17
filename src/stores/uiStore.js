import {defineStore} from 'pinia'
import _ from 'lodash';

window._ = _;

export const useUiStore = defineStore('ui', {
    state: () => ({
        menuOpen: false,

    }),
    actions: {
        async setMenu(value) {
            this.menuOpen = value;
        }
    }
});