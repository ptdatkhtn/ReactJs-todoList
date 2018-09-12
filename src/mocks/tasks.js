const uuidv4 = require('uuid/v4');

let tasks = [
    {
        id : uuidv4(),
        name : "Abc111111111111111111111111",
        level : 0 // 0 small, 1 medium, 2 high
    },
    {
        id : uuidv4(),
        name : "Def222222222222222222222",
        level : 1 // 0 small, 1 medium, 2 high
    },
    {
        id : uuidv4(),
        name : "Ghj333333333333333333333",
        level : 2 // 0 small, 1 medium, 2 high
    }
]

export default tasks;