import {observable, computed, action} from 'mobx';

export default class Cubes {
    constructor(config) {
        this.transporter = config.transporter;
        this.gdriveURL = config.gdriveURL;
    }
    @observable _cubes = [];
    @computed get get() {
        return this._cubes.map((c) => {
            return {
                id: c.ID,
                title: c.Title,
                url: this.gdriveURL + c.Suffix
            }
        });
    };
    fetch(username) {
        this.transporter('get', { username: username })
        .then(resp => {
            if (resp.status === 'success') {
                this.populate(resp.data);
            }
        });
    };
    @action populate = (data) => {
        this._cubes = data;
    };
    @action delete(username, cubeID) {
        this.transporter('del', { username: username, id: cubeID , token: '' })
        .then(resp => {
            if (resp.status === 'success') {
                this.fetch();
            }
        });
    }
};
