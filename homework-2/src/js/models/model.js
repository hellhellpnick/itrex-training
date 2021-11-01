let users = JSON.parse(localStorage.getItem('users')) || [];
class Model {
  addUser(objData) {
    users.push(objData);
    localStorage.setItem('users', JSON.stringify(users));
  }

  checkUser(user) {
    let counter;
    users.map((item, index) => {
      if (item.emailName === user.emailName && item.passwordName === user.passwordName) {
        counter = index;
      }
    });

    return counter;
  }
}

export default Model;
