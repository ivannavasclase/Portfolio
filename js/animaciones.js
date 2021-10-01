function cambioDeApartado(item) {
    console.log(item);
    
    $('#' + item.id).animate({right: '200px'});
}