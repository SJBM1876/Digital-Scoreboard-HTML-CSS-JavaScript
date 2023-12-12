let homeScore = 0;
let awayScore = 0;
let matchDuration = 90 * 60;
let countdownInterval;

function startCountdown() {
    if (!countdownInterval) {
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}


function updateCountdown() {
    if (matchDuration > 0) {
        const minutes = Math.floor(matchDuration / 60);
        const seconds = matchDuration % 60;
        document.getElementById('countdown-clock').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        matchDuration--;
    } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        document.getElementById('countdown-clock').textContent = "00:00"
        alert("Full time!");
    }
}

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



    