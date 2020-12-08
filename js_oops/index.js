let user = {
    name: String,
    email: String,
    rollNo: Number
};

user.name = 'Gourab';
user.email = 'gourab@gmail.com';
user.rollNo = 1;

alert(`Username: ${user.name}, email ${user.email}, rollNo ${user.rollNo}`);

delete user.name;
console.log(user);
