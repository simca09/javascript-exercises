const findTheOldest = function(array) {
return array.reduce((oldAf, newAf) => {
const oldAge =  getAge(oldAf.yearOfDeath, oldAf.yearOfBirth);
const newAge = getAge(newAf.yearOfDeath, newAf.yearOfBirth);

return oldAge > newAge ? oldAf : newAf || oldAge < newAge ? newAf : oldAf;
})
};

const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
