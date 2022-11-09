axios.get('https://fakestoreapi.com/products/').then(function(response) {
    console.log(response);
    console. table(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.get('https://fakestoreapi.com/products/2').then(function(response) {
    console.log(response);
    console. table(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.post('https://fakestoreapi.com/products/', {title: 'Nuovo oggetto', price: 100}).then(function(response) { 
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.put('https://fakestoreapi.com/products/21', {title: 'Ho cambiato titolo'}).then(function(response) { 
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});