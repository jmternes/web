// Array of image URLs representing the objects
var imageUrls = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/800px-Charlotte_Hornets_%282014%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png",
    "https://www.cleveland.com/resizer/BZlusBah1PXRlb8mOUiHa4DOHXI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/F2W3KQL3B5FT3DNU7RZJD44C3E.jpg",
    "https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/640px-Denver_Nuggets.svg.png",
    "https://logos-world.net/wp-content/uploads/2020/05/Detroit-Pistons-logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/640px-Golden_State_Warriors_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
    "https://gray-wmctv-prod.cdn.arcpublishing.com/resizer/fCEPiDlhHz2jD8qmPqE2nOsJ7uA=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ZX4ANCQTIFHYPB2VXF3EQNLNYI.jpg",
    "https://1000logos.net/wp-content/uploads/2021/04/Miami-Heat-logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2018/06/Oklahoma-City-Thunder-Logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/640px-Orlando_Magic_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Philadelphia-76ers-Logo-1977-1996.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/800px-SacramentoKings.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/800px-Toronto_Raptors_logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2018/05/Utah_Jazz_Logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/640px-Washington_Wizards_logo.svg.png"
  ];
  
  function generateImage() {
    // Get a random image URL from the array
    var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
    // Update the image source
    var randomImage = document.getElementById("random-image");
    randomImage.src = randomImageUrl;
  }
  