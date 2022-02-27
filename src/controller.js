const index = (req, res) => {
    let data = {
        description: "This is basic REST API server."
    }
    res.json(data);
}

const determineBrowser = (req, res) => {
    let data = {
        browser: req.get('User-Agent'),
        status: "Ok"
    }
    res.send(data);
}

const createUppercase = (req, res) => {
    let text;
    let data;

    if(req.query.text) {
        text = req.query.text.toUpperCase();
    } else {
        text = null;
    }
    data = {
        text,
        status: "Ok"
    }
    res.send(data);
}

const calculateCubeVolume = (req, res) => {
    let edge_length = req.body.edge_length;
    let data;

    if(edge_length === undefined) {
        edge_length = 0;
    }

    data = {
        edge_length,
        volume: Math.pow(edge_length, 3),
        status: "Ok"
    }
    res.send(data);
}

module.exports = {
    index, determineBrowser, createUppercase, calculateCubeVolume
};