class UserAPI {
    constructor() {
        this.users = [
            { number: 1, name: 'QUALY', position: 'G' },
            { number: 2, name: 'VIC', position: 'M' },
            { number: 3, name: 'SPI', position: 'D' },
        ];
    }

    all() {
        return this.users;
    }

    get(id) {
        const isUser = p => p.number === id;
        return this.users.find(isUser);
    }
}

export default UserAPI;