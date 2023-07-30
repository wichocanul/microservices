const db = {
    'user': [
        { id: 1, name: 'Wicho' },
    ],
};

function list(table) {
    return db[table];
}

function get(table, id) {
    let colection = list(table);
    return colection.filter(item => item.id === id)[0] || null;
}

function upsert(table, data) {
    db[collection].push(data);
}

function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
};