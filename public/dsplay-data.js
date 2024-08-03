var dsplay_config = {
    // config parameters
    locale: 'pt_br',
    orientation: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
    // Android SDK version
    osVersion: 19,
    // DSPLAY App version code
    appVersion: 99,
};

var dsplay_media = {
    duration: 30000,

    // for json service based media
    result: { "validity": "2018-08-13T18:22:55.238Z", "showOutdated": true, "data": {} },

    // custom media parameters
    customMediaParam: "value",

    // for json service based media
    result: {
        "validity": "2020-12-13T18:22:55.238Z", "showOutdated": true, "data":
        {
          //Weather media parameters
          lang: "pt",
          weather: {
            city: "São José do Vale do Rio Preto",
            country: "BR",
            current: {
              code: 800,
              description: "Thunderstorm with heavy drizzle",
              icon: "t04",
              humidity: 78,
              wind: 4.58,
              date: "2020-07-27",
              value: 23.00,
              temp: 23.00,
              min: 12.00,
              max: 27.00,
              sunrise: "05:00",
              sunset: "18:00"
            },
            forecast: [
              {
                code: 300,
                description: "clear sky",
                icon: "c01",
                humidity: 56,
                wind: 3.99,
                date: "2020-04-09",
                value: 29.21,
                min: 29.21,
                max: 33.21
              },
              {
                code: 300,
                description: "Few clouds",
                icon: "c02",
                humidity: 60,
                wind: 5.77,
                date: "2020-04-10",
                value: 29.52,
                min: 25.52,
                max: 31.52
              },
              {
                code: 800,
                description: "Unknown Precipitation",
                icon: "u00",
                humidity: 63,
                wind: 5.64,
                date: "2020-04-11",
                value: 28.11,
                min: 23.11,
                max: 28.11
              }
            ]
          }
    
        }
    
      },
};

var dsplay_template = {
    latitude: '-8.0421584',
    longitude: '-35.0086754',
    city: 'São José do Vale do Rio Preto',
    // Logo
    logo: '../test-assets/senac.png',
    // Global background and font color
    background_color: "#282828",
    // Images
    image_01: "../test-assets/room-01.jpg",
    image_02: "../test-assets/room-02.jpg",
    image_03: "../test-assets/room-03.jpg",
    //Cards and text colors
    primary_card_color: "#d8d4c9",
    primary_card_font_color: "#2a2220",
    secondary_card_color: "#587e91",
    secondary_card_font_color: "#FFFFFF",
    //Rooms and prices
    room_01: "Master Room",
    room_01_price: "R$ 650,00",
    room_01_desc: "Cofre/Safe",
    room_02: "Standard Rooms",
    room_02_price: "R$ 380,00",
    room_02_desc: "Ar-condicionado/Air Conditioning",
    room_03: "Luxury Suite",
    room_03_price: "R$ 950,00",
    room_03_desc: "Café da manhã/Breakfast",
    room_04: "Family Room",
    room_04_price: "R$ 1.200,00",
    room_04_desc: "Piscina/Pool",
    room_05: "Single Room",
    room_05_price: "R$ 250,00",
    room_05_desc: "Wi-fi",
    //Exchange rates
    exchange_card_title: "Exchange Rates",
    exchange_rate_usd: "5.20 BRL",
    exchange_rate_eur: "6.20 BRL",
    // Title
    counter_title: 'Atendimento a direta',
    //Directional arrows [arrow_left: 1, arrow_right: 2, arrow_up: 3, arrow_down: 4,]
    arrow_direction: "right",
};