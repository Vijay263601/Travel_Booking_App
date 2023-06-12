import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: 'Westminster Bridge, London SW1A 2JH, UK',
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is a road-and-foot-traffic bridge over the River Thames in London, linking Westminster on the west side and Lambeth on the east side.The bridge is painted predominantly green, the same colour as the leather seats in the House of Commons which is on the side of the Palace of Westminster nearest to the bridge, but a natural shade similar to verdigris. This is in contrast to Lambeth Bridge, which is red, the same colour as the seats in the House of Lords and is on the opposite side of the Houses of Parliament.",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
      {
        name: "john doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'The Lesser Sunda Islands, Indonesia',
    price: 99,
    maxGroupSize: 8,
    desc: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands and the easternmost of the Sunda Shelf. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. The provincial capital, Denpasar, is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. The upland town of Ubud in Greater Denpasar is considered Bali's cultural centre. The province is Indonesia's main tourist destination, with a significant rise in tourism since the 1980s. Tourism-related business makes up 80% of its economy.",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Shimla",
    city: "India",
    distance: 500,
    address: 'Shimla, Himanchal Pradesh, India. ',
    price: 99,
    maxGroupSize: 8,
    desc: "Shimla is home to several buildings that are styled in the Tudorbethan and neo-Gothic architectures dating from the colonial era, as well as multiple temples and churches. The colonial architecture and churches, the temples, and the natural environment of the city attract tourists. Major city centre's attractions include the Shri Hanuman Jakhu (Statue), Jakhu Temple, Viceregal Lodge, Christ Church, Mall Road, The Ridge and Annadale. The city centre's northernmost point is Jakhoo and the southernmost location is Annadale, the easternmost point is Sanjauli and the western point is Chotta Shimla. The Kalka–Shimla Railway line built by the British, a UNESCO World Heritage Site, is also a major tourist attraction. Owing to its steep terrain, Shimla hosts the mountain biking race MTB Himalaya, which started in 2005 and is regarded as the biggest event of its kind in South Asia. Shimla also has the largest natural ice skating rink in South Asia. Apart from being a tourism centre, the city is also an educational hub with several colleges and research institutions. ",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Svalbard",
    city: "Norway",
    distance: 500,
    address: ' Kingdom of Norway',
    price: 99,
    maxGroupSize: 8,
    desc: "A December night in Longyearbyen lasts almost 24 hours and the days start about 11 hours later. Who wants to look at the sunrise during these days, has to wake up early. Sunrise in Longyearbyen starts already at 0:00 in the morning. The sunset on the other hand is currently late at 23:59 in the evening.",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Sentosa ",
    city: "Singapore",
    distance: 500,
    address: ' sunny island in Singapore',
    price: 99,
    maxGroupSize: 8,
    desc: "Sentosa Island is Singapore’s prized tourist attraction dotted with a smorgasbord of fun-tastic activities for the visitors of all age. There are a lot of places to visit on Sentosa Island with fun friendly attractions for the visitors of all age. Helmed as Asia’s ultimate destination resort, Sentosa consists of six world-class hotels, a convention centre, a casino, celebrity chef restaurants, specialty retail outlets and an array of amazing, top of the world entertainment options. Singapore Tourism has amazing day and multiday trips to the island and is perfect for those who want to experience the best of this country.",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: 'northwards up to Kansai, Japan',
    price: 99,
    maxGroupSize: 8,
    desc: "Cherry blossoms hold many meanings, the first being that life is fleeting. They are beautiful to see in their prime, but the flowers and the trees are short-lived — blooming for only a few weeks before falling to the ground and withering away.",
    reviews: [   ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'Flathaugen 36, 8392 Sørvågen, France',
    price: 99,
    maxGroupSize: 8,
    desc: "Located 800 miles from Oslo and 95 miles north of the Arctic Circle, the Lofoten archipelago is known for its remote, rugged beauty. Painters and authors have long drawn inspiration from the islands, which make appearances in many Norwegian paintings and the work of Jules Verne.",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Chiang Mai",
    city: "Thailand",
    distance: 500,
    address: 'Mueang Chiang Mai District, Chiang Mai, Thailand',
    price: 99,
    maxGroupSize: 8,
    desc: "Chiang Mai is a city in mountainous northern Thailand. Founded in 1296, it was capital of the independent Lanna Kingdom until 1558. Its Old City area still retains vestiges of walls and moats from its history as a cultural and religious center. It’s also home to hundreds of elaborate Buddhist temples, including 14th-century Wat Phra Singh and 15th-century Wat Chedi Luang, adorned with carved serpents",
    reviews: [    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
