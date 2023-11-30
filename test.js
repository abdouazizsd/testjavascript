function greet(name){
        return name+" ";
    }
    greet("Abdou Aziz ");//Appel de la fonction
    console.log(greet("Bonjour ",'Abdou Aziz'));

    console.log("############### Invoquez la fonction greet avec différents noms en tant qu'argument. ################");

    function greet(firstName, lastName){
        return firstName+" "+lastName;
    }
    console.log(greet("Bonjour M. "+"Abdou Aziz ","NDIAYE ")); //Appel de la fonction

    console.log("############### Invoquez la fonction greet avec différents noms en tant qu'argument. ################");
    var x = 25;//type nombre
    var y = 0.256;//type nombrevar
    var z = 36.125;//type nombre

    function multiplication(x, y){
        return x*y;
    }
    var result = multiplication(x,y);
    console.log('x * y ' + '= '+ x + ' * ' + y + ' = '+ result);

    console.log("###########################################################");
    console.log("##############################Additon#############################");

    // opération d'additon
    function additon(x, z){
        return x + z;
    }
    var result = additon(x,z);
    console.log('x + y ' + '= '+ x + ' + ' + z + ' = '+ result);

    console.log("###########################################################");
    console.log("#############################Soustraction##############################");

    // //opération de soustraction
    function soustraction(x, z){
        return x - z;
    }
    var result = soustraction(x,z);
    console.log('x - y ' + '= '+ x + ' - ' + z + ' = '+ result);

    console.log("###########################################################");
    console.log("##############################Division#############################");

    // //opération de division
    function division(x, z){
        return x / z;
    }
    var result = division(x,z);
    console.log('x : y ' + '= '+ x + ' : ' + z + ' = '+ result);

    console.log("###########################################################");
    console.log("#############################Modulo##############################");

    // opération de modulo
    function modulo(z, x){
        return z % x;

    var result = modulo(z,x);
    console.log('z % x ' + '= '+ z + ' % ' + x + ' = '+ result);  }
