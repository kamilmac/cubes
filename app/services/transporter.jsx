import 'whatwg-fetch';

export default function TransporterFactory(obj) {
    let cfg = {
        url: obj.url
    };
    return (action, payload) => {
        return fetch(cfg.url+action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((resp) => resp.json());
    }
}
