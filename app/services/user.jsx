import {observable, action, computed, autorun} from 'mobx';

export default class User {
    @observable _user = {};
    constructor(deps) {
        this.cubes = deps.cubes;
        this.setName(deps.username);
        autorun(()=>{
            if(this._user.name) {
                this.cubes.fetch(this._user.name);
            }
        })
    }
    @computed get get() {
        return this._user;
    }
    @action setName = (name) => {
        this._user.name = name;
    };
};
