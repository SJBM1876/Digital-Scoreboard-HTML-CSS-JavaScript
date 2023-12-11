let homeScore = 0;
let awayScore = 0;

function incrementScore(team) {
    if (team === 'home') {
        homeScore ++;
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'away') {
        awayScore ++;
        document.getElementById('away-team').textContent = awayScore;
    }
}

function updateTeamName(team) {
    const newTeamName = prompt('Enter team name for ${team.toUpperCase()}');
    if (newTeamName !== null && newTeamName.trim() !== "") {
        if (team === 'home') {
            document.getElementById('home-team-name').textContent = newTeamName;
        } else if (team === 'away') {
            document.getElementById('away-team-name').textContent = newTeamName;
        }
    } else {
        alert("Pleaseenter a valid team name")
    }
}



    