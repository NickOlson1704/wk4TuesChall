function decoder(str) {
    let resultArr = []
    let shift = +str[0]
    let newStr = str.toLowerCase()

    for (let i = 1; i < newStr.length; i++) {
        let asciiCode = newStr.charCodeAt(i) + shift
        while (asciiCode > 122) {
            asciiCode = (asiiCode - 122) + 96
        }
        resultArr.push(String.fromCharCode(asciiCode))
    }
    return resultArr.join('')
}

console.log(decoder('2fcjjm'))