var one = ['rojo', 'azul', 'amarillo',];
var two = ['verde', 'naranja', 'morado',];
var three = ['blanco', 'negro', 'gris',];

    function mezcla (){
        for (let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                for(let x=0; x<3; x++){
                    console.log('www.' + one[i] + two[j] + three[x] + '.com');
                }
            }
        }
    }
mezcla();