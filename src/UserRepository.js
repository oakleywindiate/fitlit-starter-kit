
class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  identifyUser(id) {
    return this.userData.find((user) => user.id === id)
  }
}


export default UserRepository;
