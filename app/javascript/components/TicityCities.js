let cityData = [
  {
    name: "Albuquerque",
    href: "https://api.teleport.org/api/urban_areas/slug:albuquerque/scores/",
    housing: 7.2620000000000005,
    costofliving: 6.059,
    startups: 3.7720000000000002,
    capital: 1.4929999999999999,
    travel: 1.4555000000000002,
    commute: 5.05575,
    business: 8.671,
    safety: 1.3435,
    healthcare: 8.508666666666665,
    education: 4.151999999999999,
    environment: 7.3195,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 5.396000000000001,
    leisure: 4.890000000000001,
    tolerance: 7.028499999999999,
    outdoors: 3.5155,
    cityscore: 51.512162162162156,
  },
  {
    name: "Anchorage",
    href: "https://api.teleport.org/api/urban_areas/slug:anchorage/scores/",
    housing: 5.433500000000001,
    costofliving: 3.141,
    startups: 2.7945,
    capital: 0.0,
    travel: 1.7379999999999998,
    commute: 4.715249999999999,
    business: 8.671,
    safety: 3.4704999999999995,
    healthcare: 8.632666666666665,
    education: 3.6245,
    environment: 9.272000000000002,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 4.9645,
    leisure: 3.2660000000000005,
    tolerance: 7.093,
    outdoors: 5.3580000000000005,
    cityscore: 52.02472972972975,
  },
  {
    name: "Asheville",
    href: "https://api.teleport.org/api/urban_areas/slug:asheville/scores/",
    housing: 5.855999999999999,
    costofliving: 5.311,
    startups: 3.5404999999999998,
    capital: 0.0,
    travel: 1.2095,
    commute: 1.358,
    business: 8.671,
    safety: 5.852500000000001,
    healthcare: 8.921333333333333,
    education: 3.6245,
    environment: 8.49325,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 4.7875,
    leisure: 5.063,
    tolerance: 7.7305,
    outdoors: 2.2655,
    cityscore: 50.92864864864867,
  },
  {
    name: "Atlanta",
    href: "https://api.teleport.org/api/urban_areas/slug:atlanta/scores/",
    housing: 4.9755,
    costofliving: 5.241,
    startups: 8.835,
    capital: 7.2570000000000014,
    travel: 5.2915,
    commute: 3.8977500000000003,
    business: 8.671,
    safety: 2.6725,
    healthcare: 8.533999999999999,
    education: 6.456999999999999,
    environment: 5.817749999999999,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 6.4805,
    leisure: 7.765499999999999,
    tolerance: 4.062,
    outdoors: 5.0095,
    cityscore: 58.03756756756757,
  },
  {
    name: "Austin",
    href: "https://api.teleport.org/api/urban_areas/slug:austin/scores/",
    housing: 4.3345,
    costofliving: 5.3549999999999995,
    startups: 9.236,
    capital: 6.939000000000001,
    travel: 1.8515000000000004,
    commute: 4.3305,
    business: 8.671,
    safety: 5.069,
    healthcare: 8.686666666666666,
    education: 5.315000000000001,
    environment: 7.03075,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 9.049,
    leisure: 6.6979999999999995,
    tolerance: 6.7895,
    outdoors: 3.9090000000000003,
    cityscore: 60.5177027027027,
  },
  {
    name: "Baltimore",
    href: "https://api.teleport.org/api/urban_areas/slug:baltimore/scores/",
    housing: 4.829999999999999,
    costofliving: 4.982,
    startups: 0.0,
    capital: 4.3580000000000005,
    travel: 3.6664999999999996,
    commute: 4.93475,
    business: 5.502000000000001,
    safety: 2.373,
    healthcare: 8.944666666666665,
    education: 5.8805,
    environment: 5.784500000000001,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 4.988,
    leisure: 0.0,
    tolerance: 5.755,
    outdoors: 3.9795,
    cityscore: 45.36324324324325,
  },
  {
    name: "Birmingham, AL",
    href: "https://api.teleport.org/api/urban_areas/slug:birmingham-al/scores/",
    housing: 5.9035,
    costofliving: 5.814,
    startups: 4.3575,
    capital: 2.541,
    travel: 5.8450000000000015,
    commute: 5.4935,
    business: 8.991999999999999,
    safety: 6.946500000000001,
    healthcare: 8.319999999999999,
    education: 5.0265,
    environment: 5.7385,
    economy: 5.438,
    taxation: 5.9545,
    internetaccess: 5.940000000000001,
    leisure: 4.4350000000000005,
    tolerance: 6.421,
    outdoors: 1.2675,
    cityscore: 58.58513513513513,
  },
  {
    name: "Boise",
    href: "https://api.teleport.org/api/urban_areas/slug:boise/scores/",
    housing: 6.9635,
    costofliving: 6.578,
    startups: 4.205,
    capital: 2.5960000000000005,
    travel: 1.3235,
    commute: 5.2250000000000005,
    business: 8.671,
    safety: 4.3605,
    healthcare: 8.881,
    education: 3.6245,
    environment: 8.069500000000001,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 3.442,
    leisure: 4.1995,
    tolerance: 6.9275,
    outdoors: 5.221,
    cityscore: 55.63108108108109,
  },
  {
    name: "Boston",
    href: "https://api.teleport.org/api/urban_areas/slug:boston/scores/",
    housing: 1.0,
    costofliving: 4.259,
    startups: 9.565000000000001,
    capital: 10.0,
    travel: 3.215,
    commute: 4.39625,
    business: 8.671,
    safety: 7.742000000000001,
    healthcare: 8.956,
    education: 8.6245,
    environment: 8.1705,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 5.700500000000001,
    leisure: 8.564,
    tolerance: 8.4815,
    outdoors: 5.659999999999999,
    cityscore: 67.32635135135136,
  },
  {
    name: "Boulder",
    href: "https://api.teleport.org/api/urban_areas/slug:boulder/scores/",
    housing: 3.704,
    costofliving: 4.531,
    startups: 5.853000000000001,
    capital: 6.019,
    travel: 4.207,
    commute: 6.138000000000002,
    business: 8.671,
    safety: 7.0735,
    healthcare: 8.891666666666666,
    education: 4.679,
    environment: 9.84375,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 6.2780000000000005,
    leisure: 2.5649999999999995,
    tolerance: 9.274500000000002,
    outdoors: 6.699,
    cityscore: 64.25229729729732,
  },
  {
    name: "Bozeman",
    href: "https://api.teleport.org/api/urban_areas/slug:bozeman/scores/",
    housing: 2.949,
    costofliving: 0.0,
    startups: 3.407,
    capital: 0.0,
    travel: 1.1905000000000001,
    commute: 0.0,
    business: 8.671,
    safety: 6.9145,
    healthcare: 8.885333333333334,
    education: 4.128,
    environment: 9.369,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 5.156000000000001,
    leisure: 1.9069999999999998,
    tolerance: 7.2935,
    outdoors: 6.134,
    cityscore: 48.48432432432433,
  },
  {
    name: "Buffalo",
    href: "https://api.teleport.org/api/urban_areas/slug:buffalo/scores/",
    housing: 7.0765,
    costofliving: 5.228000000000001,
    startups: 3.9470000000000005,
    capital: 2.7150000000000003,
    travel: 1.511,
    commute: 2.154,
    business: 8.671,
    safety: 7.1884999999999994,
    healthcare: 8.498,
    education: 4.212,
    environment: 8.329249999999998,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 6.757999999999999,
    leisure: 4.32,
    tolerance: 7.404000000000001,
    outdoors: 4.6465,
    cityscore: 56.03797297297297,
  },
  {
    name: "Charleston",
    href: "https://api.teleport.org/api/urban_areas/slug:charleston/scores/",
    housing: 4.6370000000000005,
    costofliving: 3.567,
    startups: 4.92,
    capital: 2.011,
    travel: 1.399,
    commute: 4.62075,
    business: 8.671,
    safety: 5.0555,
    healthcare: 8.914333333333332,
    education: 3.6245,
    environment: 7.276,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 6.093,
    leisure: 6.595000000000001,
    tolerance: 5.771000000000001,
    outdoors: 5.0095,
    cityscore: 54.797027027027035,
  },
  {
    name: "Charlotte",
    href: "https://api.teleport.org/api/urban_areas/slug:charlotte/scores/",
    housing: 5.549,
    costofliving: 4.987,
    startups: 6.247999999999999,
    capital: 2.878,
    travel: 3.6790000000000003,
    commute: 4.134,
    business: 8.671,
    safety: 5.347499999999999,
    healthcare: 8.811333333333334,
    education: 3.6245,
    environment: 8.009249999999998,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 6.3870000000000005,
    leisure: 5.606,
    tolerance: 6.7895,
    outdoors: 1.3114999999999999,
    cityscore: 56.057162162162165,
  },
  {
    name: "Chattanooga",
    href: "https://api.teleport.org/api/urban_areas/slug:chattanooga/scores/",
    housing: 6.782,
    costofliving: 6.121,
    startups: 3.9094999999999995,
    capital: 2.228,
    travel: 1.2095,
    commute: 0.7969999999999999,
    business: 8.671,
    safety: 4.468,
    healthcare: 8.458,
    education: 3.6245,
    environment: 7.1515,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 8.365,
    leisure: 4.1625,
    tolerance: 4.7925,
    outdoors: 3.908,
    cityscore: 49.4091891891892,
  },
  {
    name: "Chicago",
    href: "https://api.teleport.org/api/urban_areas/slug:chicago/scores/",
    housing: 3.7020000000000004,
    costofliving: 4.766000000000001,
    startups: 9.513,
    capital: 8.368,
    travel: 5.5075,
    commute: 4.57975,
    business: 8.671,
    safety: 3.8320000000000003,
    healthcare: 8.555,
    education: 7.999,
    environment: 6.8045,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 6.599499999999999,
    leisure: 8.193,
    tolerance: 6.1339999999999995,
    outdoors: 5.4155,
    cityscore: 62.90500000000001,
  },
  {
    name: "Cincinnati",
    href: "https://api.teleport.org/api/urban_areas/slug:cincinnati/scores/",
    housing: 6.6775,
    costofliving: 6.1080000000000005,
    startups: 6.0995,
    capital: 2.7089999999999996,
    travel: 1.9264999999999999,
    commute: 4.743500000000001,
    business: 8.671,
    safety: 4.975,
    healthcare: 8.637999999999998,
    education: 4.2805,
    environment: 7.1095,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 6.512000000000001,
    leisure: 6.118000000000001,
    tolerance: 5.2989999999999995,
    outdoors: 3.6075,
    cityscore: 56.55027027027029,
  },
  {
    name: "Cleveland",
    href: "https://api.teleport.org/api/urban_areas/slug:cleveland/scores/",
    housing: 7.155999999999999,
    costofliving: 5.595,
    startups: 4.961,
    capital: 3.6460000000000004,
    travel: 2.0775000000000006,
    commute: 4.42125,
    business: 8.671,
    safety: 3.6369999999999996,
    healthcare: 8.899000000000001,
    education: 4.6185,
    environment: 7.2505,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 5.476500000000001,
    leisure: 5.696500000000001,
    tolerance: 4.775499999999999,
    outdoors: 4.669,
    cityscore: 54.84851351351354,
  },
  {
    name: "Colorado Springs",
    href:
      "https://api.teleport.org/api/urban_areas/slug:colorado-springs/scores/",
    housing: 6.4995,
    costofliving: 5.375,
    startups: 4.267,
    capital: 2.1470000000000002,
    travel: 1.266,
    commute: 1.7352500000000004,
    business: 8.671,
    safety: 5.3774999999999995,
    healthcare: 8.393666666666666,
    education: 3.6245,
    environment: 8.526500000000002,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 5.9225,
    leisure: 3.8120000000000003,
    tolerance: 9.206,
    outdoors: 7.356499999999999,
    cityscore: 55.11527027027028,
  },
  {
    name: "Columbus",
    href: "https://api.teleport.org/api/urban_areas/slug:columbus/scores/",
    housing: 6.2895,
    costofliving: 5.746000000000001,
    startups: 5.878500000000001,
    capital: 4.973000000000001,
    travel: 1.663,
    commute: 5.02675,
    business: 8.671,
    safety: 5.2815,
    healthcare: 8.688999999999998,
    education: 5.047499999999999,
    environment: 8.166,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 4.5535,
    leisure: 6.465999999999999,
    tolerance: 5.9215,
    outdoors: 4.544999999999999,
    cityscore: 58.759324324324325,
  },
  {
    name: "Dallas",
    href: "https://api.teleport.org/api/urban_areas/slug:dallas/scores/",
    housing: 5.259000000000001,
    costofliving: 6.090999999999999,
    startups: 7.939500000000001,
    capital: 4.9159999999999995,
    travel: 4.746499999999999,
    commute: 4.4704999999999995,
    business: 8.671,
    safety: 4.3389999999999995,
    healthcare: 8.439333333333332,
    education: 4.284,
    environment: 6.693,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 6.4609999999999985,
    leisure: 7.1685,
    tolerance: 5.294,
    outdoors: 4.501999999999999,
    cityscore: 59.02243243243244,
  },
  {
    name: "Denver",
    href: "https://api.teleport.org/api/urban_areas/slug:denver/scores/",
    housing: 3.8375,
    costofliving: 5.102,
    startups: 7.8645,
    capital: 6.117,
    travel: 4.243,
    commute: 4.530000000000001,
    business: 8.671,
    safety: 5.371,
    healthcare: 8.615666666666666,
    education: 3.6245,
    environment: 7.11675,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 5.418500000000001,
    leisure: 6.2235,
    tolerance: 7.860499999999999,
    outdoors: 7.932999999999999,
    cityscore: 61.413243243243265,
  },
  {
    name: "Des Moines",
    href: "https://api.teleport.org/api/urban_areas/slug:des-moines/scores/",
    housing: 6.850999999999999,
    costofliving: 6.327,
    startups: 2.912,
    capital: 1.8179999999999998,
    travel: 1.379,
    commute: 2.0722500000000004,
    business: 8.671,
    safety: 6.984,
    healthcare: 8.841333333333331,
    education: 3.6245,
    environment: 8.68225,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 5.6979999999999995,
    leisure: 6.0665000000000004,
    tolerance: 8.4765,
    outdoors: 3.299500000000001,
    cityscore: 55.92121621621623,
  },
  {
    name: "Detroit",
    href: "https://api.teleport.org/api/urban_areas/slug:detroit/scores/",
    housing: 6.223000000000001,
    costofliving: 6.032,
    startups: 5.4015,
    capital: 5.183999999999999,
    travel: 3.6405,
    commute: 0.9329999999999999,
    business: 8.671,
    safety: 4.4615,
    healthcare: 8.278999999999998,
    education: 5.8185,
    environment: 4.04675,
    economy: 6.5145,
    taxation: 3.7785,
    internetaccess: 6.167000000000002,
    leisure: 7.478,
    tolerance: 3.678,
    outdoors: 5.387499999999999,
    cityscore: 52.3633783783784,
  },
  {
    name: "Eugene",
    href: "https://api.teleport.org/api/urban_areas/slug:eugene/scores/",
    housing: 6.713,
    costofliving: 5.021,
    startups: 3.0865000000000005,
    capital: 1.9640000000000002,
    travel: 1.192,
    commute: 5.627000000000001,
    business: 8.671,
    safety: 6.171500000000001,
    healthcare: 8.826666666666666,
    education: 4.1735,
    environment: 8.231,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 4.756000000000001,
    leisure: 2.9560000000000004,
    tolerance: 8.9695,
    outdoors: 3.533,
    cityscore: 56.758648648648645,
  },
  {
    name: "Fort Collins",
    href: "https://api.teleport.org/api/urban_areas/slug:fort-collins/scores/",
    housing: 2.744500000000001,
    costofliving: 0.0,
    startups: 4.0435,
    capital: 0.0,
    travel: 1.1019999999999999,
    commute: 2.0075000000000003,
    business: 8.671,
    safety: 6.935499999999999,
    healthcare: 8.893333333333333,
    education: 4.1735,
    environment: 9.953249999999999,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 5.301999999999999,
    leisure: 2.746,
    tolerance: 9.48,
    outdoors: 6.1865000000000006,
    cityscore: 53.06662162162162,
  },
  {
    name: "Honolulu",
    href: "https://api.teleport.org/api/urban_areas/slug:honolulu/scores/",
    housing: 2.3415000000000004,
    costofliving: 2.867,
    startups: 4.1335,
    capital: 0.0,
    travel: 1.983,
    commute: 4.1617500000000005,
    business: 8.671,
    safety: 6.8565000000000005,
    healthcare: 8.474,
    education: 4.2805,
    environment: 6.094000000000001,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 6.158,
    leisure: 7.622999999999999,
    tolerance: 7.774000000000001,
    outdoors: 5.917500000000001,
    cityscore: 55.74702702702703,
  },
  {
    name: "Houston",
    href: "https://api.teleport.org/api/urban_areas/slug:houston/scores/",
    housing: 5.224500000000001,
    costofliving: 6.162,
    startups: 7.9345,
    capital: 4.474,
    travel: 4.338500000000001,
    commute: 4.03075,
    business: 8.671,
    safety: 3.1289999999999996,
    healthcare: 8.611,
    education: 4.928,
    environment: 5.304500000000001,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 6.248499999999999,
    leisure: 7.144,
    tolerance: 5.34,
    outdoors: 5.385999999999999,
    cityscore: 57.065540540540546,
  },
  {
    name: "Indianapolis",
    href: "https://api.teleport.org/api/urban_areas/slug:indianapolis/scores/",
    housing: 6.266,
    costofliving: 5.478,
    startups: 5.503,
    capital: 3.96,
    travel: 1.6815000000000002,
    commute: 4.85875,
    business: 8.671,
    safety: 3.968,
    healthcare: 8.597666666666665,
    education: 3.6245,
    environment: 6.1605,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 5.875500000000001,
    leisure: 7.2989999999999995,
    tolerance: 6.869999999999999,
    outdoors: 3.9650000000000003,
    cityscore: 55.76175675675677,
  },
  {
    name: "Jacksonville",
    href: "https://api.teleport.org/api/urban_areas/slug:jacksonville/scores/",
    housing: 6.450000000000001,
    costofliving: 5.359,
    startups: 4.3475,
    capital: 2.545,
    travel: 1.5674999999999997,
    commute: 1.40575,
    business: 8.671,
    safety: 3.8255,
    healthcare: 8.498,
    education: 3.6245,
    environment: 7.12025,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 6.157500000000001,
    leisure: 5.6545000000000005,
    tolerance: 5.6785000000000005,
    outdoors: 5.013,
    cityscore: 50.804864864864875,
  },
  {
    name: "Kansas City",
    href: "https://api.teleport.org/api/urban_areas/slug:kansas-city/scores/",
    housing: 6.7075,
    costofliving: 5.844,
    startups: 2.793999999999999,
    capital: 3.5380000000000007,
    travel: 1.8689999999999998,
    commute: 1.9725000000000004,
    business: 8.671,
    safety: 4.422500000000001,
    healthcare: 8.775666666666666,
    education: 3.6245,
    environment: 7.9765,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 8.188500000000001,
    leisure: 6.674500000000001,
    tolerance: 5.0205,
    outdoors: 4.161500000000001,
    cityscore: 52.51337837837839,
  },
  {
    name: "Knoxville",
    href: "https://api.teleport.org/api/urban_areas/slug:knoxville/scores/",
    housing: 6.9754999999999985,
    costofliving: 6.447000000000001,
    startups: 3.5165,
    capital: 0.0,
    travel: 1.379,
    commute: 1.943,
    business: 8.671,
    safety: 5.1295,
    healthcare: 8.579333333333333,
    education: 4.212,
    environment: 3.7232499999999997,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 7.092499999999999,
    leisure: 4.495500000000001,
    tolerance: 5.4025,
    outdoors: 1.7525,
    cityscore: 48.39648648648649,
  },
  {
    name: "Las Vegas",
    href: "https://api.teleport.org/api/urban_areas/slug:las-vegas/scores/",
    housing: 7.0009999999999994,
    costofliving: 5.7589999999999995,
    startups: 7.515,
    capital: 2.022,
    travel: 3.5285,
    commute: 4.807499999999999,
    business: 8.671,
    safety: 2.385,
    healthcare: 7.984666666666667,
    education: 3.6245,
    environment: 5.556500000000001,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 5.3035,
    leisure: 6.3685,
    tolerance: 7.275,
    outdoors: 5.385,
    cityscore: 55.9195945945946,
  },
  {
    name: "Los Angeles",
    href: "https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/",
    housing: 1.5274999999999999,
    costofliving: 4.556000000000001,
    startups: 10.0,
    capital: 10.0,
    travel: 3.9585000000000004,
    commute: 3.6770000000000005,
    business: 8.574666666666667,
    safety: 5.705,
    healthcare: 8.439666666666666,
    education: 8.6245,
    environment: 4.7315000000000005,
    economy: 6.5145,
    taxation: 4.7675,
    internetaccess: 5.496500000000001,
    leisure: 9.196,
    tolerance: 6.959999999999999,
    outdoors: 6.747,
    cityscore: 63.426351351351364,
  },
  {
    name: "Louisville",
    href: "https://api.teleport.org/api/urban_areas/slug:louisville/scores/",
    housing: 7.258,
    costofliving: 6.358000000000001,
    startups: 4.254,
    capital: 2.293,
    travel: 1.4729999999999999,
    commute: 1.954,
    business: 8.671,
    safety: 3.6175,
    healthcare: 8.558333333333334,
    education: 3.6245,
    environment: 6.601249999999999,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 5.526999999999999,
    leisure: 5.6935,
    tolerance: 5.778499999999999,
    outdoors: 1.3,
    cityscore: 48.99202702702704,
  },
  {
    name: "Madison",
    href: "https://api.teleport.org/api/urban_areas/slug:madison/scores/",
    housing: 5.8294999999999995,
    costofliving: 6.173,
    startups: 4.017,
    capital: 2.9130000000000003,
    travel: 1.2295,
    commute: 5.473750000000001,
    business: 8.671,
    safety: 7.362000000000001,
    healthcare: 9.023666666666665,
    education: 5.385999999999999,
    environment: 9.524000000000001,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 4.9925,
    leisure: 4.422000000000001,
    tolerance: 7.9005,
    outdoors: 4.3759999999999994,
    cityscore: 60.894999999999996,
  },
  {
    name: "Memphis",
    href: "https://api.teleport.org/api/urban_areas/slug:memphis/scores/",
    housing: 7.1145000000000005,
    costofliving: 5.829,
    startups: 4.449499999999999,
    capital: 0.0,
    travel: 1.6615000000000002,
    commute: 1.9175,
    business: 8.671,
    safety: 2.8585000000000003,
    healthcare: 7.523666666666666,
    education: 3.6245,
    environment: 4.545249999999999,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 6.07,
    leisure: 6.860499999999999,
    tolerance: 4.040500000000001,
    outdoors: 3.5694999999999997,
    cityscore: 46.9977027027027,
  },
  {
    name: "Miami",
    href: "https://api.teleport.org/api/urban_areas/slug:miami/scores/",
    housing: 3.0309999999999997,
    costofliving: 4.497,
    startups: 8.0225,
    capital: 5.055,
    travel: 4.1690000000000005,
    commute: 4.0527500000000005,
    business: 8.671,
    safety: 4.321,
    healthcare: 8.528999999999998,
    education: 4.3945,
    environment: 6.292,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 5.824,
    leisure: 6.7675,
    tolerance: 6.043500000000001,
    outdoors: 5.3845,
    cityscore: 57.09540540540541,
  },
  {
    name: "Milwaukee",
    href: "https://api.teleport.org/api/urban_areas/slug:milwaukee/scores/",
    housing: 6.1225,
    costofliving: 5.526,
    startups: 4.8305,
    capital: 2.005,
    travel: 1.5875,
    commute: 4.915000000000001,
    business: 8.671,
    safety: 4.267,
    healthcare: 8.594333333333333,
    education: 4.177,
    environment: 7.989000000000001,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 4.346,
    leisure: 6.8375,
    tolerance: 4.844,
    outdoors: 5.064000000000001,
    cityscore: 55.335675675675674,
  },
  {
    name: "Minneapolis-Saint Paul",
    href:
      "https://api.teleport.org/api/urban_areas/slug:minneapolis-saint-paul/scores/",
    housing: 4.738500000000001,
    costofliving: 5.042000000000001,
    startups: 6.5264999999999995,
    capital: 5.5230000000000015,
    travel: 3.544,
    commute: 4.924999999999999,
    business: 8.671,
    safety: 5.085000000000001,
    healthcare: 8.972,
    education: 5.2745,
    environment: 8.362,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 6.258499999999999,
    leisure: 6.8505,
    tolerance: 7.288,
    outdoors: 5.095999999999999,
    cityscore: 61.163648648648646,
  },
  {
    name: "Nashville",
    href: "https://api.teleport.org/api/urban_areas/slug:nashville/scores/",
    housing: 4.4545,
    costofliving: 5.742000000000001,
    startups: 6.0600000000000005,
    capital: 3.569,
    travel: 1.9080000000000004,
    commute: 4.501,
    business: 8.671,
    safety: 5.078,
    healthcare: 8.370333333333333,
    education: 4.733,
    environment: 7.056499999999999,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 6.6370000000000005,
    leisure: 7.0200000000000005,
    tolerance: 6.807500000000001,
    outdoors: 1.2734999999999999,
    cityscore: 55.83432432432433,
  },
  {
    name: "New Orleans",
    href: "https://api.teleport.org/api/urban_areas/slug:new-orleans/scores/",
    housing: 5.339,
    costofliving: 4.991999999999999,
    startups: 4.7365,
    capital: 1.21,
    travel: 1.7570000000000001,
    commute: 4.6274999999999995,
    business: 8.671,
    safety: 2.088,
    healthcare: 8.311666666666666,
    education: 4.151999999999999,
    environment: 5.674,
    economy: 6.5145,
    taxation: 4.346,
    internetaccess: 6.453000000000001,
    leisure: 7.1985,
    tolerance: 5.1240000000000006,
    outdoors: 1.0,
    cityscore: 49.229189189189185,
  },
  {
    name: "New York",
    href: "https://api.teleport.org/api/urban_areas/slug:new-york/scores/",
    housing: 1.0,
    costofliving: 2.342,
    startups: 10.0,
    capital: 10.0,
    travel: 6.675,
    commute: 5.5192499999999995,
    business: 8.671,
    safety: 7.022,
    healthcare: 8.501666666666665,
    education: 8.0935,
    environment: 5.233749999999999,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 7.0985,
    leisure: 10.0,
    tolerance: 6.7125,
    outdoors: 5.7475,
    cityscore: 67.27513513513514,
  },
  {
    name: "Oklahoma City",
    href: "https://api.teleport.org/api/urban_areas/slug:oklahoma-city/scores/",
    housing: 7.261000000000001,
    costofliving: 6.394,
    startups: 4.1375,
    capital: 0.0,
    travel: 1.399,
    commute: 5.0272499999999996,
    business: 8.671,
    safety: 4.6855,
    healthcare: 8.549,
    education: 3.6245,
    environment: 7.61525,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 7.689,
    leisure: 5.376000000000001,
    tolerance: 6.022,
    outdoors: 4.1290000000000004,
    cityscore: 55.44851351351353,
  },
  {
    name: "Omaha",
    href: "https://api.teleport.org/api/urban_areas/slug:omaha/scores/",
    housing: 7.040500000000001,
    costofliving: 5.994000000000001,
    startups: 4.0120000000000005,
    capital: 0.0,
    travel: 1.4165,
    commute: 2.1277500000000003,
    business: 8.671,
    safety: 5.5520000000000005,
    healthcare: 8.879999999999997,
    education: 4.128,
    environment: 7.876000000000001,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 6.3065,
    leisure: 4.942,
    tolerance: 5.800999999999999,
    outdoors: 4.181,
    cityscore: 52.9468918918919,
  },
  {
    name: "Orlando",
    href: "https://api.teleport.org/api/urban_areas/slug:orlando/scores/",
    housing: 5.778499999999999,
    costofliving: 5.284,
    startups: 6.5975,
    capital: 2.464,
    travel: 3.7734999999999994,
    commute: 4.33875,
    business: 8.671,
    safety: 4.134,
    healthcare: 8.274,
    education: 3.6245,
    environment: 6.676,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 4.886,
    leisure: 5.9295,
    tolerance: 5.784000000000002,
    outdoors: 4.492999999999999,
    cityscore: 55.471891891891914,
  },
  {
    name: "Palo Alto",
    href: "https://api.teleport.org/api/urban_areas/slug:palo-alto/scores/",
    housing: 0.5,
    costofliving: 0.0,
    startups: 8.2945,
    capital: 9.623000000000001,
    travel: 3.1505000000000005,
    commute: 2.2027499999999995,
    business: 8.671,
    safety: 7.6370000000000005,
    healthcare: 8.885333333333334,
    education: 3.6245,
    environment: 6.726500000000001,
    economy: 6.5145,
    taxation: 4.488,
    internetaccess: 7.142,
    leisure: 0.0,
    tolerance: 8.454,
    outdoors: 1.7500000000000002,
    cityscore: 52.918378378378385,
  },
  {
    name: "Philadelphia",
    href: "https://api.teleport.org/api/urban_areas/slug:philadelphia/scores/",
    housing: 4.207,
    costofliving: 4.422000000000001,
    startups: 7.3625,
    capital: 5.215999999999999,
    travel: 3.5559999999999996,
    commute: 4.1315,
    business: 8.671,
    safety: 3.1329999999999996,
    healthcare: 8.621666666666666,
    education: 6.0285,
    environment: 5.1240000000000006,
    economy: 6.5145,
    taxation: 3.7785,
    internetaccess: 7.443,
    leisure: 8.492,
    tolerance: 5.864500000000001,
    outdoors: 4.115,
    cityscore: 56.2437837837838,
  },
  {
    name: "Phoenix",
    href: "https://api.teleport.org/api/urban_areas/slug:phoenix/scores/",
    housing: 6.5329999999999995,
    costofliving: 6.208,
    startups: 6.508500000000001,
    capital: 4.558,
    travel: 3.3024999999999998,
    commute: 4.828500000000001,
    business: 8.671,
    safety: 2.5829999999999997,
    healthcare: 8.567333333333334,
    education: 4.590999999999999,
    environment: 4.625249999999999,
    economy: 6.5145,
    taxation: 4.488,
    internetaccess: 6.178,
    leisure: 6.8100000000000005,
    tolerance: 5.5649999999999995,
    outdoors: 6.7355,
    cityscore: 56.66256756756756,
  },
  {
    name: "Pittsburgh",
    href: "https://api.teleport.org/api/urban_areas/slug:pittsburgh/scores/",
    housing: 5.963500000000002,
    costofliving: 4.795,
    startups: 6.5075,
    capital: 3.5809999999999995,
    travel: 1.7379999999999998,
    commute: 4.308,
    business: 8.671,
    safety: 4.791,
    healthcare: 8.582333333333333,
    education: 6.5935,
    environment: 6.874250000000001,
    economy: 6.5145,
    taxation: 3.7785,
    internetaccess: 8.669500000000001,
    leisure: 6.859,
    tolerance: 7.390000000000001,
    outdoors: 4.0685,
    cityscore: 58.85837837837838,
  },
  {
    name: "Portland, ME",
    href: "https://api.teleport.org/api/urban_areas/slug:portland-me/scores/",
    housing: 0.0,
    costofliving: 0.0,
    startups: 3.6370000000000005,
    capital: 0.0,
    travel: 1.1019999999999999,
    commute: 1.97025,
    business: 8.671,
    safety: 6.358499999999999,
    healthcare: 7.747,
    education: 3.6245,
    environment: 7.6754999999999995,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 3.5465,
    leisure: 3.3049999999999997,
    tolerance: 8.270999999999999,
    outdoors: 4.978,
    cityscore: 46.60932432432432,
  },
  {
    name: "Portland, OR",
    href: "https://api.teleport.org/api/urban_areas/slug:portland-or/scores/",
    housing: 4.138,
    costofliving: 4.924,
    startups: 6.957,
    capital: 5.899,
    travel: 2.2405,
    commute: 4.9079999999999995,
    business: 8.671,
    safety: 5.1805,
    healthcare: 8.596666666666666,
    education: 4.2155,
    environment: 8.4595,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 5.968500000000001,
    leisure: 6.2195,
    tolerance: 8.1595,
    outdoors: 6.303999999999999,
    cityscore: 60.32581081081081,
  },
  {
    name: "Providence",
    href: "https://api.teleport.org/api/urban_areas/slug:providence/scores/",
    housing: 3.1530000000000005,
    costofliving: 0.0,
    startups: 3.7640000000000002,
    capital: 1.0,
    travel: 3.0185,
    commute: 2.422,
    business: 8.671,
    safety: 6.846,
    healthcare: 8.885333333333334,
    education: 5.3015,
    environment: 5.900499999999999,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 8.9345,
    leisure: 3.9185000000000008,
    tolerance: 7.49,
    outdoors: 1.084,
    cityscore: 50.9114864864865,
  },
  {
    name: "Raleigh",
    href: "https://api.teleport.org/api/urban_areas/slug:raleigh/scores/",
    housing: 6.128500000000001,
    costofliving: 5.610000000000001,
    startups: 5.497,
    capital: 5.157000000000002,
    travel: 1.7570000000000001,
    commute: 4.78425,
    business: 8.671,
    safety: 6.5225,
    healthcare: 8.966666666666667,
    education: 7.1165,
    environment: 8.583750000000002,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 7.9515,
    leisure: 6.6129999999999995,
    tolerance: 7.562000000000001,
    outdoors: 3.3905000000000003,
    cityscore: 62.51567567567569,
  },
  {
    name: "Richmond",
    href: "https://api.teleport.org/api/urban_areas/slug:richmond/scores/",
    housing: 6.439500000000002,
    costofliving: 5.949,
    startups: 4.2705,
    capital: 2.097,
    travel: 1.38,
    commute: 5.648499999999999,
    business: 8.671,
    safety: 3.3765,
    healthcare: 8.855333333333332,
    education: 3.6245,
    environment: 6.6217500000000005,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 7.645499999999999,
    leisure: 6.3385,
    tolerance: 7.151,
    outdoors: 1.0350000000000001,
    cityscore: 53.926756756756774,
  },
  {
    name: "Rochester",
    href: "https://api.teleport.org/api/urban_areas/slug:rochester/scores/",
    housing: 6.727,
    costofliving: 5.4879999999999995,
    startups: 4.3355,
    capital: 1.505,
    travel: 1.3980000000000001,
    commute: 1.90775,
    business: 8.671,
    safety: 5.899,
    healthcare: 8.585666666666667,
    education: 4.494999999999999,
    environment: 5.93525,
    economy: 6.5145,
    taxation: 3.9205,
    internetaccess: 5.551,
    leisure: 5.335,
    tolerance: 5.9014999999999995,
    outdoors: 4.404,
    cityscore: 52.29013513513514,
  },
  {
    name: "Salt Lake City",
    href:
      "https://api.teleport.org/api/urban_areas/slug:salt-lake-city/scores/",
    housing: 6.141000000000001,
    costofliving: 6.172000000000001,
    startups: 6.3,
    capital: 7.09,
    travel: 2.736999999999999,
    commute: 4.573999999999999,
    business: 8.671,
    safety: 5.657,
    healthcare: 8.818666666666665,
    education: 4.2805,
    environment: 6.21575,
    economy: 6.5145,
    taxation: 4.204,
    internetaccess: 6.810500000000001,
    leisure: 5.932,
    tolerance: 8.6225,
    outdoors: 6.641000000000002,
    cityscore: 61.79513513513514,
  },
  {
    name: "San Antonio",
    href: "https://api.teleport.org/api/urban_areas/slug:san-antonio/scores/",
    housing: 6.402000000000001,
    costofliving: 6.683,
    startups: 5.356,
    capital: 3.53,
    travel: 1.6815000000000002,
    commute: 4.9647499999999996,
    business: 8.671,
    safety: 4.2165,
    healthcare: 8.633333333333333,
    education: 4.151999999999999,
    environment: 6.201499999999999,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 8.0745,
    leisure: 6.6955,
    tolerance: 6.254,
    outdoors: 3.4185000000000003,
    cityscore: 56.70824324324324,
  },
  {
    name: "San Diego",
    href: "https://api.teleport.org/api/urban_areas/slug:san-diego/scores/",
    housing: 2.9335,
    costofliving: 5.156000000000001,
    startups: 8.3505,
    capital: 8.595,
    travel: 2.6220000000000003,
    commute: 4.40975,
    business: 8.671,
    safety: 6.933,
    healthcare: 8.767666666666665,
    education: 5.4575,
    environment: 7.26725,
    economy: 6.5145,
    taxation: 4.488,
    internetaccess: 5.999,
    leisure: 8.21,
    tolerance: 8.5395,
    outdoors: 6.396000000000002,
    cityscore: 64.59310810810813,
  },
  {
    name: "San Francisco Bay Area",
    href:
      "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/",
    housing: 1.0,
    costofliving: 2.618,
    startups: 10.0,
    capital: 10.0,
    travel: 3.6545000000000005,
    commute: 4.687250000000001,
    business: 8.671,
    safety: 5.7155000000000005,
    healthcare: 8.748,
    education: 8.6245,
    environment: 6.4815000000000005,
    economy: 6.5145,
    taxation: 4.488,
    internetaccess: 5.605500000000001,
    leisure: 9.407,
    tolerance: 8.012500000000001,
    outdoors: 7.014,
    cityscore: 65.53635135135136,
  },
  {
    name: "San Luis Obispo",
    href:
      "https://api.teleport.org/api/urban_areas/slug:san-luis-obispo/scores/",
    housing: 1.7245,
    costofliving: 0.0,
    startups: 3.828,
    capital: 3.077,
    travel: 1.134,
    commute: 1.3922499999999998,
    business: 8.671,
    safety: 8.058,
    healthcare: 8.295666666666666,
    education: 3.6245,
    environment: 7.392000000000001,
    economy: 6.5145,
    taxation: 4.488,
    internetaccess: 7.935500000000001,
    leisure: 2.7765,
    tolerance: 9.666,
    outdoors: 1.5075000000000003,
    cityscore: 50.006621621621626,
  },
  {
    name: "Seattle",
    href: "https://api.teleport.org/api/urban_areas/slug:seattle/scores/",
    housing: 2.291,
    costofliving: 3.79,
    startups: 8.367,
    capital: 7.551000000000001,
    travel: 2.8845,
    commute: 4.523750000000001,
    business: 8.671,
    safety: 5.6365,
    healthcare: 8.724333333333332,
    education: 5.7145,
    environment: 7.560250000000001,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 4.940499999999999,
    leisure: 8.1155,
    tolerance: 8.0895,
    outdoors: 7.2094999999999985,
    cityscore: 62.74189189189191,
  },
  {
    name: "St. Louis",
    href: "https://api.teleport.org/api/urban_areas/slug:st-louis/scores/",
    housing: 6.958,
    costofliving: 5.504,
    startups: 5.424000000000001,
    capital: 3.8850000000000002,
    travel: 2.5315,
    commute: 5.085500000000001,
    business: 8.671,
    safety: 3.8805000000000005,
    healthcare: 8.877333333333333,
    education: 5.2715,
    environment: 7.37425,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 8.909,
    leisure: 7.642500000000001,
    tolerance: 4.3759999999999994,
    outdoors: 4.8285,
    cityscore: 58.587162162162166,
  },
  {
    name: "Tampa Bay Area",
    href:
      "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/scores/",
    housing: 5.696,
    costofliving: 5.253,
    startups: 6.3469999999999995,
    capital: 3.7780000000000005,
    travel: 2.9055000000000004,
    commute: 1.40075,
    business: 8.671,
    safety: 4.706499999999999,
    healthcare: 8.781666666666666,
    education: 4.2805,
    environment: 7.37875,
    economy: 6.5145,
    taxation: 4.772,
    internetaccess: 7.195,
    leisure: 6.433999999999999,
    tolerance: 5.360000000000001,
    outdoors: 5.497,
    cityscore: 54.968513513513514,
  },
  {
    name: "Washington, D.C.",
    href: "https://api.teleport.org/api/urban_areas/slug:washington-dc/scores/",
    housing: 1.2105000000000001,
    costofliving: 3.5949999999999993,
    startups: 8.774000000000001,
    capital: 8.056,
    travel: 4.505000000000001,
    commute: 4.457000000000001,
    business: 8.671,
    safety: 2.1915,
    healthcare: 8.490666666666666,
    education: 5.968500000000001,
    environment: 6.9937499999999995,
    economy: 6.5145,
    taxation: 4.062,
    internetaccess: 3.825500000000001,
    leisure: 10.0,
    tolerance: 6.5495,
    outdoors: 5.023499999999999,
    cityscore: 57.50216216216215,
  },
];
export default cityData;
