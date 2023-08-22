const reverseNumberPattern = (number) => {
    for (let counter = number; counter > 0; counter--) {
        let row = ''
        for (let index = counter; index > 0; index--) {
            row += `${index} `
        }
        console.log(row)
    }
}

reverseNumberPattern(5)