const axios = require('axios');

const host = 'http://localhost:3000';

const rootUrl = async () => {
    let response = await axios.get(host);
    return response.data;
}

const whatIsMyBrowserUrl = async () => {
    let config = {
        headers: {
            'User-Agent': 'testing'
        }
    }
    let response = await axios.get(`${host}/whatismybrowser`, config);
    return response.data;
}

const uppercaseUrl = async () => {
    let config = {
        params: {
            text: 'zain alwan'
        }
    };
    let response = await axios.get(`${host}/uppercase`, config);
    return response.data;
}

const cubeVolumeUrl = async () => {
    let data = {
        edge_length: 8
    };
    let response = await axios.post(`${host}/cube_volume`, data);
    return response.data;
}

test('Accessing root URL', async () => {
    expect(await rootUrl()).toStrictEqual({
        description: "This is basic REST API server."
    });
});

test('Accessing what is my browser URL', async () => {
    expect(await whatIsMyBrowserUrl()).toStrictEqual({
        browser: 'testing',
        status: "Ok"
    });
});

test('Accessing uppercase URL', async () => {
    expect(await uppercaseUrl()).toStrictEqual({
        text: 'ZAIN ALWAN',
        status: "Ok"
    });
});

test('Accessing cube volume URL', async () => {
    expect(await cubeVolumeUrl()).toStrictEqual({
        edge_length: 8,
        volume: Math.pow(8, 3),
        status: "Ok"
    });
});