import faker from 'faker';

const PRODUCTS = []
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
        PRODUCTS.push(product);
    }

export default PRODUCTS;