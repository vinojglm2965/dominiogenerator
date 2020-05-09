var one = ['rojo', 'azul', 'amarillo,'];
var two = ['verde', 'naranja', 'morado'];
var three = ['blanco', 'negro', 'gris'];

    function mezcla (){
        for(let i=0; i<3; i++){
            console.log('www.' + one[i] + two[i] + three[i] + '.com');
            console.log('www.' + three[i] + one[i] + two[i] + '.com');
            console.log('www.' +two[i] + three[i] + one[i] + '.com');
        }
    }
mezcla();