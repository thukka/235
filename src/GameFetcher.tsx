import { useState, useEffect } from 'react'

/* fetch('https://statsapi.web.nhl.com/api/v1/game/2023020063/boxscore') */
/* https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-20 */
// yyyy-mm-dd


function GameFetcher(): void {
    const [games, setGames] = useState(null)

    // gets the current day in YYYY-MM-DD format
    const currentDay: string = new Date().toISOString().slice(0,10)
    console.log('currentDay: ', currentDay)

    // gamePK is needed from here
    // dates (array) -> games (array) -> index.gamePK
    // dates.totalGames useful too
    useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-20`)
        /* fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${currentDay}`) */
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    let gamesArr;
    const pkList = [];

    if (games == null) {
        console.log('games var null')
    } else {
        console.log(games.dates[0].games)
        gamesArr = games.dates[0].games

        gamesArr.forEach(i => pkList.push(i.gamePk))
    }

    console.log('pkList: ', pkList)

}

export default GameFetcher