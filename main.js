function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, - 1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    const queue = [[start]]
    const visited = new Set()
    visited.add(start.toString())

    while (queue.length) {
        const path = queue.shift()
        const [x, y] = path[path.length - 1]

        if (x === end[0] && y === end[1]) {
            printShortestPath(path)
            return
        }

        moves.forEach(([dx, dy]) => {
            const move = [x + dx, y + dy]
            if (!visited.has(move.toString()) &&
                checkLegalMove(x + dx, y + dy)) {

                visited.add(move.toString())
                queue.push([...path, move])
            }
        })
    }
}

function printShortestPath(answer){
    console.log(`You made it in ${answer.length - 1} moves! Here's your path:`)
    answer.forEach(move => {
        console.log(move)
    })
}

function checkLegalMove(x, y){
    return (x > -1 && x < 8 && y > -1 && y < 8)
}

knightMoves([3,3], [4,3])
knightMoves([0,0],[1,2])
knightMoves([0,0],[3,3])
knightMoves([3,3],[0,0])
knightMoves([0,0],[7,7])