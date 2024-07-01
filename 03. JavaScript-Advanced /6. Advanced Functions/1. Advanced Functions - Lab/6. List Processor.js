function listProcessor(x) {
    let collection = [];

    let list = {

        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter(item => item !== str),
        print: () => console.log(collection.join(',')),
    };
    x.forEach ((line) => {
        let [command, string] = line.split(' ');
        list[command](string);
    })
   
    };
    listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']); 
