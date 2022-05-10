function superbowlWin(record) {
    let winObject = record.find((object) => object.result === 'W' )
    if(winObject === undefined) {
        return undefined
    }
    else return winObject.year
}

