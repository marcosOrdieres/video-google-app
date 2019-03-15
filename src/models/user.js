export default class User {
    static instance = this.instance == null ? new User() : this.instance;
    static userId;

    getUserId() {
      return this.userId;
    }

    setUserId(value) {
      this.userId = value;
    }

    getUserObject() {
      const user = {
        userId: parseInt(this.userId),
      };

      return user;
    }

    reset(){
      this.userId = undefined;
    }
}
