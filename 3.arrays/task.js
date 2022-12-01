function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length){
        return arr1.every((number, index) => number === arr2[index]);
    } else {
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
   return users
     .filter((user) => user.gender === gender)
     .map((user) => user.age)
     .reduce((acc, item, index, array) => acc + item / array.length, 0)
}