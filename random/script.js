// const nbaTeams = [
//   "Atlanta Hawks",
//   "Boston Celtics",
//   "Brooklyn Nets",
//   "Charlotte Hornets",
//   "Chicago Bulls",
//   "Cleveland Cavaliers",
//   "Dallas Mavericks",
//   "Denver Nuggets",
//   "Detroit Pistons",
//   "Golden State Warriors",
//   "Houston Rockets",
//   "Indiana Pacers",
//   "LA Clippers",
//   "Los Angeles Lakers",
//   "Memphis Grizzlies",
//   "Miami Heat",
//   "Milwaukee Bucks",
//   "Minnesota Timberwolves",
//   "New Orleans Pelicans",
//   "New York Knicks",
//   "Oklahoma City Thunder",
//   "Orlando Magic",
//   "Philadelphia 76ers",
//   "Phoenix Suns",
//   "Portland Trail Blazers",
//   "Sacramento Kings",
//   "San Antonio Spurs",
//   "Toronto Raptors",
//   "Utah Jazz",
//   "Washington Wizards"
// ];

const nbaTeamsWithImages = [
  {
    name: "Atlanta Hawks",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png"
  },
  {
    name: "Boston Celtics",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png"
  },
  {
    name: "Brooklyn Nets",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png"
  },
  {
    name: "Charlotte Hornets",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/800px-Charlotte_Hornets_%282014%29.svg.png"
  },
  {
    name: "Chicago Bulls",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png"
  },
  {
    name: "Cleveland Cavaliers",
    imageUrl: "https://www.cleveland.com/resizer/BZlusBah1PXRlb8mOUiHa4DOHXI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/F2W3KQL3B5FT3DNU7RZJD44C3E.jpg"
  },
  {
    name: "Dallas Mavericks",
    imageUrl: "https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png"
  },
  {
    name: "Denver Nuggets",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/640px-Denver_Nuggets.svg.png"
  },
  {
    name: "Detroit Pistons",
    imageUrl: "https://logos-world.net/wp-content/uploads/2020/05/Detroit-Pistons-logo.png"
  },
  {
    name: "Golden State Warriors",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/640px-Golden_State_Warriors_logo.svg.png"
  },
  {
    name: "Houston Rockets",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png"
  },
  {
    name: "Indiana Pacers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png"
  },
  {
    name: "Los Angeles Clippers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png"
  },
  {
    name: "Los Angeles Lakers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png"
  },
  {
    name: "Memphis Grizzlies",
    imageUrl: "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png"
  },
  {
    name: "Miami Heat",
    imageUrl: "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif"
  },
  {
    name: "Milwaukee Bucks",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png"
  },
  {
    name: "Minnesota Timberwolves",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg"
  },
  {
    name: "New Orleans Pelicans",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png"
  },
  {
    name: "New York Knicks",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png"
  },
  {
    name: "Oklahoma City Thunder",
    imageUrl: "https://1000logos.net/wp-content/uploads/2018/06/Oklahoma-City-Thunder-Logo.png"
  },
  {
    name: "Orlando Magic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/640px-Orlando_Magic_logo.svg.png"
  },
  {
    name: "Philadelphia 76ers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Philadelphia-76ers-Logo-1977-1996.png"
  },
  {
    name: "Phoenix Suns",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png"
  },
  {
    name: "Portland Trail Blazers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"
  },
  {
    name: "Sacramento Kings",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/800px-SacramentoKings.svg.png"
  },
  {
    name: "San Antonio Spurs",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png"
  },
  {
    name: "Toronto Raptors",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/800px-Toronto_Raptors_logo.svg.png"
  },
  {
    name: "Utah Jazz",
    imageUrl: "https://1000logos.net/wp-content/uploads/2018/05/Utah_Jazz_Logo.png"
  },
  {
    name: "Washington Wizards",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/640px-Washington_Wizards_logo.svg.png"
  },
];

const teamNameElement = document.getElementById("team-name");

const teamImageElement = document.getElementById("team-image");

const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * nbaTeamsWithImages.length);

  teamNameElement.textContent = nbaTeamsWithImages[randomIndex].name;

  teamImageElement.src = nbaTeamsWithImages[randomIndex].imageUrl;
  
});



const nflTeams = [
  {
      name: "Arizona Cardinals",
      imageURL: "URL_TO_ARIZONA_CARDINALS_LOGO",
  },
  {
      name: "Atlanta Falcons",
      imageURL: "URL_TO_ATLANTA_FALCONS_LOGO",
  },
  {
      name: "Baltimore Ravens",
      imageURL: "URL_TO_BALTIMORE_RAVENS_LOGO",
  },
  {
      name: "Buffalo Bills",
      imageURL: "URL_TO_BUFFALO_BILLS_LOGO",
  },
  {
      name: "Carolina Panthers",
      imageURL: "URL_TO_CAROLINA_PANTHERS_LOGO",
  },
  {
      name: "Chicago Bears",
      imageURL: "URL_TO_CHICAGO_BEARS_LOGO",
  },
  {
      name: "Cincinnati Bengals",
      imageURL: "URL_TO_CINCINNATI_BENGALS_LOGO",
  },
  {
      name: "Cleveland Browns",
      imageURL: "URL_TO_CLEVELAND_BROWNS_LOGO",
  },
  {
      name: "Dallas Cowboys",
      imageURL: "URL_TO_DALLAS_COWBOYS_LOGO",
  },
  {
      name: "Denver Broncos",
      imageURL: "URL_TO_DENVER_BRONCOS_LOGO",
  },
  {
      name: "Detroit Lions",
      imageURL: "URL_TO_DETROIT_LIONS_LOGO",
  },
  {
      name: "Green Bay Packers",
      imageURL: "URL_TO_GREEN_BAY_PACKERS_LOGO",
  },
  {
      name: "Houston Texans",
      imageURL: "URL_TO_HOUSTON_TEXANS_LOGO",
  },
  {
      name: "Indianapolis Colts",
      imageURL: "URL_TO_INDIANAPOLIS_COLTS_LOGO",
  },
  {
      name: "Jacksonville Jaguars",
      imageURL: "URL_TO_JACKSONVILLE_JAGUARS_LOGO",
  },
  {
      name: "Kansas City Chiefs",
      imageURL: "URL_TO_KANSAS_CITY_CHIEFS_LOGO",
  },
  {
      name: "Las Vegas Raiders",
      imageURL: "URL_TO_LAS_VEGAS_RAIDERS_LOGO",
  },
  {
      name: "Los Angeles Chargers",
      imageURL: "URL_TO_LOS_ANGELES_CHARGERS_LOGO",
  },
  {
      name: "Los Angeles Rams",
      imageURL: "URL_TO_LOS_ANGELES_RAMS_LOGO",
  },
  {
      name: "Miami Dolphins",
      imageURL: "URL_TO_MIAMI_DOLPHINS_LOGO",
  },
  {
      name: "Minnesota Vikings",
      imageURL: "URL_TO_MINNESOTA_VIKINGS_LOGO",
  },
  {
      name: "New England Patriots",
      imageURL: "URL_TO_NEW_ENGLAND_PATRIOTS_LOGO",
  },
  {
      name: "New Orleans Saints",
      imageURL: "URL_TO_NEW_ORLEANS_SAINTS_LOGO",
  },
  {
      name: "New York Giants",
      imageURL: "URL_TO_NEW_YORK_GIANTS_LOGO",
  },
  {
      name: "New York Jets",
      imageURL: "URL_TO_NEW_YORK_JETS_LOGO",
  },
  {
      name: "Philadelphia Eagles",
      imageURL: "URL_TO_PHILADELPHIA_EAGLES_LOGO",
  },
  {
      name: "Pittsburgh Steelers",
      imageURL: "URL_TO_PITTSBURGH_STEELERS_LOGO",
  },
  {
      name: "San Francisco 49ers",
      imageURL: "URL_TO_SAN_FRANCISCO_49ERS_LOGO",
  },
  {
      name: "Seattle Seahawks",
      imageURL: "URL_TO_SEATTLE_SEAHAWKS_LOGO",
  },
  {
      name: "Tampa Bay Buccaneers",
      imageURL: "URL_TO_TAMPA_BAY_BUCCANEERS_LOGO",
  },
  {
      name: "Tennessee Titans",
      imageURL: "URL_TO_TENNESSEE_TITANS_LOGO",
  },
  {
      name: "Washington Football Team",
      imageURL: "URL_TO_WASHINGTON_FOOTBALL_TEAM_LOGO",
  },
];

// Example usage:
console.log(nflTeams[0].name); // Prints "Arizona Cardinals"
console.log(nflTeams[0].imageURL); // Prints the URL to the Arizona Cardinals logo





  // function generateImage() {

  //   // Get a random URL from an array

  //   var randomTeam = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  //   // Image source

  //   var randomImage = document.getElementById("random-image");
  //   randomImage.src = randomTeam;
  //}
