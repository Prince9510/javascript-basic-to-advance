// Make an object with a property id that is read-only using a getter.
// If someone tries to change id, it should not update.

const user = {
  _id: 12345,

  get id() {
    return `Do not change Id ${this._id}`;
  },
};

user.id = 67890;
console.log(user.id);
