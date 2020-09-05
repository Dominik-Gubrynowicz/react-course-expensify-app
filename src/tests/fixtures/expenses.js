import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 134,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit card',
    note: 'shop',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
},
]

export default expenses;