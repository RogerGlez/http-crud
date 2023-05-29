export class User {
    /**
     * 
     * @param {Like<User>} userData 
     */
    constructor({ avatar, balance, firstName, gender, id, isActive, lastName }) {
        this.avatar = avatar;
        this.balance = balance;
        this.firstName = firstName;
        this.gender = gender;
        this.lastName = lastName;
        this.id = id;
        this.isActive = isActive;
    }
};