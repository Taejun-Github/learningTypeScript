var score = 33;
score = 'test';
score = 11;
var taejun = {
    name: 'taejun',
    id: 1234
};
taejun = { username: 'changed', id: 1234 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id + 3;
    }
    return id;
}
// array
var data = [1, 2, 3, "4"];
var data2 = [1, 2, 3, "4"];
