import { useState, useEffect } from 'react'

/* fetch('https://statsapi.web.nhl.com/api/v1/game/2023020063/boxscore') */
/* https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-20 */
// yyyy-mm-dd

interface GamePks {
    totalGames: number,
    gamePks: Array<number>
}

interface ReturnedApiObject {
    copyright: string,
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalMatches: number,
    metaData: object,
    wait: number,
    dates: {
        totalGames: number,
        games: {
            gamePk: number
        }[]
    }[]
}

type ApiResponse = ReturnedApiObject | null


function GameFetcher(): GamePks {
    const [games, setGames] = useState<ApiResponse>(null)
    // gets the current day in YYYY-MM-DD format
    const currentDay: string = new Date().toISOString().slice(0,10)
    console.log('currentDay: ', currentDay)
    
    // get list of games from nhl api
    useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-20`)
        /* fetch(`https://statsapi.web.nhl.com/api/v1/schedule?date=${currentDay}`) */
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])
    
    let gamesArr;
    
    console.log(games)
    const pkList: Array<number> = [];
    let fetchedGamePks = {
        totalGames: 0,
        gamePks: pkList
    };

    if (games == null) {
        console.log('games var null')
    } else {
        console.log(games.dates[0].games)
        gamesArr = games.dates[0].games

        gamesArr.forEach(i => pkList.push(i.gamePk))

        fetchedGamePks = {
            totalGames: games.dates[0].totalGames,
            gamePks: pkList
        }
    }

    console.log('fetchedGamePks: ', fetchedGamePks)
    return fetchedGamePks
}

export default GameFetcher