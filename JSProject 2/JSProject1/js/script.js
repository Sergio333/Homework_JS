function pow(a,b) {
    var result = 1;
    var a = prompt ( 'Введите число','' );
    var b = prompt ( 'Введите степень', '' );

    for (var i = 0; i<b; i++) {
        result *= a;
    }

    console.log('Итого = ', result);
    return result;
}

pow();
