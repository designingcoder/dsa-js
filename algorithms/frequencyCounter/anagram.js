const isAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false
    }
    const lookup = {}
    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        lookup[letter] = (lookup[letter] || 0) + 1
    }
    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if(!lookup[letter]) {
            return false
        }
        else {
            lookup[letter] -= 1
        }
    }
    return true
}

const str1 = "live"
const str2 = "evil"

console.log(isAnagram(str1, str2))
