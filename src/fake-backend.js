import faker from 'faker';

const generateProducts = () => {
  let products = [];
  for (let i = 1; i < 26; i += 1){
    let product = {
        productName: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        productAdjective: faker.commerce.productAdjective(),
        productMaterial: faker.commerce.productMaterial(),
        id: i,
        text: faker.lorem.paragraphs(),
        image: faker.random.image()
    }
    products.push(product);
  }
  return products;
}

const fakeDatabase = {
    names: [
        {
        "id": 1,
        "first_name": "Emlynn",
        "last_name": "Mumm",
        "email": "emumm0@ovh.net",
        "gender": "Male",
        "city": "Tsagaanchuluut",
        "catch_phrase": "Enterprise-wide directional architecture"
      }, {
        "id": 2,
        "first_name": "Kalil",
        "last_name": "Cuddy",
        "email": "kcuddy1@cdbaby.com",
        "gender": "Male",
        "city": "Gobernador Costa",
        "catch_phrase": "Focused dedicated help-desk"
      }, {
        "id": 3,
        "first_name": "Evyn",
        "last_name": "Yalden",
        "email": "eyalden2@trellian.com",
        "gender": "Male",
        "city": "Caluquembe",
        "catch_phrase": "Exclusive web-enabled orchestration"
      }, {
        "id": 4,
        "first_name": "Bent",
        "last_name": "MacKomb",
        "email": "bmackomb3@salon.com",
        "gender": "Female",
        "city": "Cordon",
        "catch_phrase": "Distributed methodical paradigm"
      }, {
        "id": 5,
        "first_name": "Kessia",
        "last_name": "Trow",
        "email": "ktrow4@weebly.com",
        "gender": "Male",
        "city": "Manizales",
        "catch_phrase": "Secured national database"
      }, {
        "id": 6,
        "first_name": "Emanuel",
        "last_name": "Lugsdin",
        "email": "elugsdin5@privacy.gov.au",
        "gender": "Male",
        "city": "Abreu e Lima",
        "catch_phrase": "Right-sized 24/7 process improvement"
      }, {
        "id": 7,
        "first_name": "Georgena",
        "last_name": "Boal",
        "email": "gboal6@yolasite.com",
        "gender": "Male",
        "city": "Kunmi Erdi",
        "catch_phrase": "Pre-emptive local migration"
      }, {
        "id": 8,
        "first_name": "Phillipp",
        "last_name": "Gooms",
        "email": "pgooms7@usnews.com",
        "gender": "Female",
        "city": "Sanxi",
        "catch_phrase": "Switchable optimizing hardware"
      }, {
        "id": 9,
        "first_name": "Granville",
        "last_name": "Casotti",
        "email": "gcasotti8@artisteer.com",
        "gender": "Male",
        "city": "Lahad Datu",
        "catch_phrase": "Switchable actuating installation"
      }, {
        "id": 10,
        "first_name": "Silvio",
        "last_name": "Houlton",
        "email": "shoulton9@tinyurl.com",
        "gender": "Female",
        "city": "Portland",
        "catch_phrase": "Fundamental tangible approach"
      }
    ],
    products: generateProducts(),
    reviews: [
      {
        productID: 1,
        reviews: [
          {
            id: 1,
            reviewer: 'Bob',
            text: "Good product! I use it every day"
          }, 
          {
            id: 2,
            reviewer: 'Jane',
            text: 'It is ok'
          }
        ]
      },
      {
        productID: 2,
        reviews: [
          {
            id: 1,
            reviewer: 'Billy',
            text: "Great stuff"
          }, 
          {
            id: 2,
            reviewer: 'Marius',
            text: 'Bad'
          }
        ]
      },
      {
        productID: 3,
        reviews: []
      },
      {
        productID: 4,
        reviews: []
      },
      {
        productID: 5,
        reviews: []
      }
    ]
}

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchNames = (request) =>
  delay(1000).then(() => {
    // if (Math.random() > 0.8) {
    //   throw new Error('Something went wrong!')
    // }
    switch(request.method) {
        case 'GET':
          return fakeDatabase.names;
        case 'FIND':
          return fakeDatabase.names.find((name) => name.id === request.id)
        
        default:
          return 'Request denied!';    
    }
  });

export const addAnotherName = (name) => 
  delay(500).then(() => {
    const newID = fakeDatabase.names.length + 1
    name["id"] = newID;
    fakeDatabase.names.push(name);
    return name;
  });

export const fetchProducts = (request) =>
  delay(1000).then(() => {
    // throw new Error('Something error!')
    switch(request.method) {
      case 'GET':
        return fakeDatabase.products;
      case 'FIND':
        return fakeDatabase.products.find((product) => 
          product.id = request.id
        );
      default:
        return 'Request denied!';
    }
  })


export const fetchProductReviews = (id) =>
  delay(500).then(() => {
    const prod = fakeDatabase.reviews.find((review) => review.productID === id)
    if(prod) {
      return prod.reviews;
    }
    return null
  })

export const addReview = (productID, review) =>
  delay(200).then(() => {
    const product = fakeDatabase.reviews.find((rev) => 
      rev.productID === productID
    )
    review['id'] = product.reviews.length + 1
    product.reviews.push(review);
    return product.reviews;
  })