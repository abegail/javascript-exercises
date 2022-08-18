const findTheOldest = function(people) {
    const ages = people.map(person => {
        if (!('yearOfDeath' in person)) {
            let currentYear = new Date().getFullYear();
            return currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth});

    const oldest = ages.reduce((oldest, person) => {
            return person > oldest ? person : oldest;
        }, 0)

    return people[ages.indexOf(oldest)];
}

// Do not edit below this line
module.exports = findTheOldest;
