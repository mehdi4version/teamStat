const team = {
  _players : [{
    firstName: 'Saeed',
    lastName: 'Anwar',
    age: 30,
  }, {
    firstName: 'Babar',
    lastName: 'Azam',
    age: 30,
  },
  {
    firstName: 'Zaheer',
    lastName: 'Abbas',
    age: 30
  } ],
  _games  : [
    {
      opponent: 'India',
      teamPoints: 45,
      opponentPoints: 27,
    },
    {
      opponent: 'England',
      teamPoints: 100,
      opponentPoints: 45,

    },
    {
      opponent: 'Australia',
      teamPoints: 120,
      opponentPoints: 70,

    }
  ],

  get players (){
    return this._players;
  },
  get games (){
    return this._games;
  },

  addPlayer(first,last,age){
    const player = {
      firstName : first,
      lastName : last,
      age : age
    };
    this._players.push(player);
  },

  addGame(opponent,teamPoint,opponentPoint){
    const game = {
      opponenet: opponent,
      teamPonts: teamPoint,
      opponentPoint: opponentPoint,
    }

    this._games.push(game)

  }

};

team.addPlayer('Steph', 'Curry',44);
team.addPlayer('Lisa', 'Leslie',46);
team.addPlayer('Bugs', 'Bunny',76);
console.log(team.players);


team.addGame('Sri Lanka',45,33);
team.addGame('Bangla Desh', 33,50);

console.log(team.games)





