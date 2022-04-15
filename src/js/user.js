class User {
    constructor(name, regDate) {
        this.name = name;
        this.regDate = regDate;
    }
}

User.prototype.getInfo = function() {
    return {
        'name': this.name,
        'regDate': this.regDate
    };
};

class Admin extends User {
    constructor(name, regDate, superAdmin) {
        super(name, regDate);
        this.superAdmin = superAdmin;
    }

    getInfo() { 
        return {
            'name': this.name,
            'regDate': this.regDate,
            'superAdmin': this.superAdmin
        };
    }
}

class Guest extends User {
    _validDate = new Date(this.regDate.setDate(this.regDate.getDate() + 7));

    constructor(name, regDate) {
        super(name, regDate);
    }

    get waterAmount() {
        return this._validDate;
    }

    getInfo() {
        return {
            'name': this.name,
            'regDate': this.regDate,
            'validDate': this._validDate
        };
    }

}

export { User, Admin, Guest };