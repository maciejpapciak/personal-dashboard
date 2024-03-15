
    const date = new Date()
    const daysAsString = date.toLocaleString('en', {day: '2-digit'})
    const monthAsString = date.toLocaleString('en', {month: 'long'})

    const current = `${monthAsString} ${daysAsString}`

    export default current
