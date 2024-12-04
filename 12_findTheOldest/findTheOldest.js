const findTheOldest = function(people) {
    people.forEach(person => {
        if('yearOfDeath' in person){
            person.age = (person.yearOfDeath - person.yearOfBirth);
        }
        else{
            person.age = (new Date().getFullYear() - person.yearOfBirth);
        }
        
    });
    people.sort((a, b) => {
        return b.age - a.age;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
