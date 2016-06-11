import {observable, computed, action} from 'mobx';
import {Router} from 'director';

export default class Director {
    constructor(deps) {
        this.user = deps.user;
        this.router.init('/');
    }
    router = Router({
        '/': () => { this.user.setName('admin') },
        '/:name': (props) => { this.user.setName(props.name) }
    });
}
