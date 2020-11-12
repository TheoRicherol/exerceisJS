new Cleave('.phone',{
    numericOnly: true,
    blocks: [3,1,2,2,2,2],
    prefix : "+33",
    delimiters: [" ", " ", " ", " "],
})

new Cleave('.order-date', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

new Cleave('.credit-card', {
    creditCard: true,
});