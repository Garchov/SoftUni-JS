function carManager() {
    const cars = {};

    return {
        create(name) {
            cars[name] = {};
        },
        createInherit(name, parentName) {
            cars[name] = Object.create(cars[parentName]);
        },
        set(name, key, value) {
            cars[name][key] = value;
        },
        print(name) {
            const result = [];
            for (let key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }
            console.log(result.join(','));
        }
    };
}

function executeCommands(commands) {
    const manager = carManager();

    commands.forEach(command => {
        const parts = command.split(' ');
        const action = parts[0];
        if (action === 'create') {
            if (parts.length === 2) {
                manager.create(parts[1]);
            } else if (parts.length === 4 && parts[2] === 'inherit') {
                manager.createInherit(parts[1], parts[3]);
            }
        } else if (action === 'set') {
            manager.set(parts[1], parts[2], parts[3]);
        } else if (action === 'print') {
            manager.print(parts[1]);
        }
    });
}

const commands = [
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
];

executeCommands(commands);
