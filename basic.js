const calculateBMI = (weight, height) => {
    return weight / height**2
}

const compareBodyMassIndex = () => {
    const people = [
        { name: 'Udin', weight: 95, height: 1.88 },
        { name: 'Nanang', weight: 85, height: 1.76 }
    ]
    const udinBMI = calculateBMI(people[0].weight, people[0].height)
    const nanangBMI = calculateBMI(people[1].weight, people[1].height)
    const isUdinBigger = udinBMI > nanangBMI

    console.log(`\nBMI ${people[0].name} dengan (berat badan ${people[0].weight} kg, tinggi badan ${people[0].height} m) yaitu (${udinBMI} kg/m2)`)
    console.log(`${isUdinBigger ? 'LEBIH TINGGI' : 'LEBIH RENDAH'} dari`)
    console.log(`BMI ${people[1].name} dengan (berat badan ${people[1].weight} kg, tinggi badan ${people[1].height} m) yaitu (${nanangBMI} kg/m2)\n`)
}

compareBodyMassIndex()