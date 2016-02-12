/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/players              ->  index
 */

'use strict';

// Gets a list of Players
export function index(req, res) {
  res.json(
    { "players" : {
      "player": [
        {
          "firstName": "Lionel",
          "lastName": "Messi",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/27.jpg",
          "jerseyNumber": "3",
          "availability": "Not Available",
          "squad": "First Team Squad",
          "group": "Midfielders"
        },
        {
          "firstName": "Cristiano",
          "lastName": "Ronaldo",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/1.jpg",
          "jerseyNumber": "9",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Midfielders"
        },
        {
          "firstName": "David",
          "lastName": "Beckham",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/2.jpg",
          "jerseyNumber": "23",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Midfielders"
        },
        {
          "firstName": "Wayne",
          "lastName": "Rooney",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/3.jpg",
          "jerseyNumber": "13",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Forward"
        },
        {
          "firstName": "Diego",
          "lastName": "Maradona",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/4.jpg",
          "jerseyNumber": "25",
          "availability": "Modified",
          "squad": "First Team Squad",
          "group": "Forward"
        },
        {
          "firstName": "Neymar",
          "lastName": "Junior",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/5.jpg",
          "jerseyNumber": "7",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Forward"
        },
        {
          "firstName": "Zinedine",
          "lastName": "Zidane",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/6.jpg",
          "jerseyNumber": "15",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Forward"
        },
        {
          "firstName": "Ronaldinho",
          "lastName": "Guacho",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/7.jpg",
          "jerseyNumber": "10",
          "availability": "Modified",
          "squad": "First Team Squad",
          "group": "Midfielders"
        },
        {
          "firstName": "Roberto",
          "lastName": "Carlos",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/8.jpg",
          "jerseyNumber": "16",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Defense"
        },
        {
          "firstName": "Robin",
          "lastName": "van Persie",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/9.jpg",
          "jerseyNumber": "35",
          "availability": "Not Available",
          "squad": "First Team Squad",
          "group": "Defense"
        },
        {
          "firstName": "Mesut",
          "lastName": "Ozil",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/10.jpg",
          "jerseyNumber": "36",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Defense"
        },
        {
          "firstName": "George",
          "lastName": "Best",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/11.jpg",
          "jerseyNumber": "37",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Defense"
        },
        {
          "firstName": "Andres",
          "lastName": "Iniesta",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/12.jpg",
          "jerseyNumber": "38",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Goalkeepers"
        },
        {
          "firstName": "Thierry",
          "lastName": "Henry",
          "profilePicUrl": "https://randomuser.me/api/portraits/med/men/13.jpg",
          "jerseyNumber": "39",
          "availability": "Available",
          "squad": "First Team Squad",
          "group": "Goalkeepers"
        }
      ]
    }
  }
  );
}
