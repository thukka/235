import { useState, useEffect } from 'react'

/* type ApiObject = object | null */

/* https://statsapi.web.nhl.com/api/v1/game/2023020063/boxscore */
function PlayerFetcher() {
    /* const [playerdata, setPlayerdata] = useState(null) */
    /* const [nhldata, setNhldata] = useState<ApiObject>(null) */
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/game/2023020135/boxscore`)
            .then(res => res.json())
            .then(data => {
                if (data !== null) {
                    const homeTeamPlayers = Object.values(data?.teams.home.players)
                    const awayTeamPlayers = Object.values(data?.teams.away.players)
                    const allPlayers = [...homeTeamPlayers, ...awayTeamPlayers]
                    const filteredPlayers = allPlayers.filter(x => x.person.nationality === 'FIN')
            
                    setPlayers(filteredPlayers)
                }
            })

    }, [])

    console.log('finnsArray: ', players)
}

export default PlayerFetcher