const book = {
    title: 'Pamięć nieulotna',
    author: 'Edward Snowden',
    publisher: {
        name: 'Insignis'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const item = ['iced coffee', '$2.0', '$3.5', '$2.75'];
const [product, , price] = item;

console.log(`A medium ${product} costs ${price}`)