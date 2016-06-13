import {observable, computed, action} from 'mobx';

export default class UI {
    constructor() {}
    @observable activePreview = '';
    @action setActivePreview(src) {
        this.activePreview = src;
    }
};
