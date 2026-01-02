// ^JavaScript Advanced Course.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~¿Que es un paradigma en programacion?.
// Un paradigma en programacion es un enfoque o estilo que define como se estructuran y escriben los programas. Cada paradigma estbalece reglas sobre como los desarrolladores pueden rear, organizar, y manipular el codigo para resolver problemas.
// Algunos ejemplos incluyen la programacion imperativa, orientada a objetos, funcional y logica, cada una con sus propias caracteristicas y principios.
// Comprender estos paradigmas es crucial para seleccionar el enfoque mas adecuado al resolver problemas y diseñar sistemas de software ficientes y mantenibles.

// ~Programación orientada a objetos (OOP).
// Es un paradigma de programacion que organiza el codigo en "objetos", cada uno con sus propios datos y comportamientos.
// Se centra en conceptos como la abstraccion, encapsulamiento, herencia y polimorfismo para facilitar el desarrollo de software modular, reutilizable y facil de mantener.
// En OOP, os objetos interactuan entre si mediante "mensajes", lo que permite una representacion mas cercana de los conceptos del mundo real y una mejor gestion de la complejidad en los programas.

// ~Programación orientada a objetos (OOP).
// &Clases: Son la piedra angular de na OOP actuando como plantillas para la creacion de objetos. Definen las propiedades (atributos) y comportamientos (metodos) que caracterisan a los objetos de un tipo especifico. Al encapsular datos y funcionealidades relacionadas, permiten la reutilizacion de codigo, la organizacion modular y la abstraccion.

// &Atributos: Son las caracteristicas o datos que describen el estado de un objeto en un contexto determinado. Estos pueden representar desde valores simples como numeros o cadenas de texto, hasta estructuras mas complejas como objetos u otro tipo de datos. Los atributos definen las propiedades de un objeto con los cuales se gestiona el estado del mismo.

// &Metodos: Son bloques de codigo que encapsulan una serie de acciones o comportamientos especificos asociados a un objeto. Estos permiten realizar operaciones sobre los datos de un objeto, modificar su estado interno y responder a eventos dentro de un programa. Los metodos metodos pueden acceder a los atributos de un objeto.

// &Objetos: Los objetos son instancias especificas de una clase que encapsulan datos y comportamientos relacionados. Los objetos permiten modelar entidades del mundo real de manera modular y reutilizable, facilitando la organizacion y el diseño de sistemas de software eficientes y mantenibles.

// ~Caracteristicas de la OOP.
// ?Abstraccion: Permite representar entidades del mundo real como objetos con caracteristicas y comportamientos relevantes para el problema que se esta resolviendo. Esto simplifica la complejidad del sistema al enfocarse en aspectos esenciales y proporcionar una forma de modelar conceptos del mundo real en el codigo.

// ?Encapsulamiento: Los detalles internos de un objeto deben estar ocultos fuera de su definicion y solo deben ser accesibles a traves de una interfaz claramente definida. Esto promueve la seguridad y la integridad de los datos al prevenir accesos no autorizados y facilita el mantemiento del codigo.

// ?Herencia: Permite que una clase (subclase) herede atributos y metodos de otra clase (superclase), lo que promueve la reutlizacion del codigo y la organizacion jerarquica de las clases. Esto facilita la creacion de nuevas clases que extienden el comportamiento de clases que extienden el comportamiento de clases existentes, permitiendo una mayor flexibilidad y modularidad en el diseño del software.

// ?Polimorfismo: Se refiere a la capacidad de objetos de diferentes clases de responder al mismo mensaje de manera diferente. En otras palabras, un mismo metodo o mensaje puede reproducir diferentes resultados segun el tipo de objeto que lo reciba. Esto permite escribir codigo mas generico y reutilizable.

// ~Versiones y detras de escena.
// Antes de ES6, javascript no tenia clases formales. Se usaban funciones constructoras y prototipos para simular la OOP. Con ES6, se introdujo la sintaxis class, aunque internamente sigue usando prototipos.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Clases, objetos, constructores e instancias. 
// ~Las clases, objetos, constructores e instancias son conceptos fundamentales en la programación orientada a objetos (OOP) en JavaScript. Las clases actúan como plantillas para crear objetos, definiendo sus propiedades y comportamientos. Un constructor es un método especial dentro de una clase que se utiliza para inicializar nuevos objetos con valores específicos. Una instancia es un objeto concreto creado a partir de una clase, que posee sus propias propiedades y métodos definidos por la clase. Estos conceptos permiten organizar el código de manera modular, facilitando la reutilización y el mantenimiento del mismo.
console.log('=========== Clases, objetos, constructores e instancias. ==========='); // *Indica el inicio de la sección de clases, objetos, constructores e instancias.
// &Clases.
// &En JavaScript, las clases son una **abstracción** que nos permite representar entidades del mundo real o conceptos lógicos mediante código. Una clase funciona como una **plantilla o molde**, a partir de la cual se pueden crear múltiples objetos. Esta plantilla define qué propiedades (atributos) y comportamientos (métodos) tendrán los objetos creados a partir de ella. La ventaja principal de usar clases es que permiten **organizar el código**, **reutilizar lógica** y **modelar datos de forma estructurada**. Por ejemplo, si definimos una clase llamada `Perro`, estamos estableciendo las características generales que cualquier perro tendrá, como nombre y color. Sin embargo, cada perro específico podrá tener valores distintos para esas características, sin necesidad de redefinir la estructura cada vez.
// ?Sintaxis de una clase
// ?Para definir una clase en JavaScript se utiliza la palabra reservada `class`, seguida del nombre de la clase (por convención en PascalCase). A continuación, se abren llaves `{}` donde se declara el cuerpo de la clase. Dentro de este cuerpo se pueden definir métodos, incluyendo el constructor, así como otras funciones que describan el comportamiento del objeto. La clase por sí sola **no crea objetos**, solo define cómo deben ser.
class NombreClase { // *Se declara una clase utilizando la palabra reservada `class` y el nombre de la clase.
} //* Cierre de la clase.

// &Constructor.
// &El constructor es un **método especial** que pertenece a una clase y se ejecuta automáticamente cada vez que se crea una nueva instancia con la palabra clave `new`. Su propósito principal es **inicializar el objeto**, es decir, asignar valores iniciales a sus propiedades. El constructor puede recibir parámetros, los cuales representan la información específica que se le pasará a cada objeto al momento de ser creado. Dentro del constructor se utiliza la palabra clave `this`, que hace referencia a la instancia actual del objeto, permitiendo diferenciar los atributos de cada instancia. Si una clase no define un constructor explícitamente, JavaScript crea uno vacío por defecto. Donde ademas podemops crear dentro del constructor propiedades que no necesariamente reciban valores por argumento (dadas), sino que pueden tener valores fijos o predeterminados los cuales todas las instancias compartirán.
// ?Propiedades con valores pasados por argumento.
// ?Las propiedades con valores pasados por argumento son aquellas que **reciben su valor desde fuera de la clase**, específicamente a través de los parámetros del constructor cuando se crea una nueva instancia. Este tipo de propiedades permiten que **cada objeto tenga valores únicos y personalizados**, incluso cuando todos han sido creados a partir de la misma clase. Al definir estas propiedades dentro del constructor y asignarlas mediante `this`, se garantiza que cada instancia tenga su propio conjunto de datos, inicializados según los argumentos proporcionados al momento de la creación del objeto. Este enfoque es fundamental en la programación orientada a objetos, ya que permite crear múltiples objetos con la misma estructura, pero con información distinta.
class ClassTest { //* Se define la clase `ClassTest`.
    constructor(argumento1, argumento2) { //* El constructor recibe los valores que se pasarán al crear la instancia.
        this.caracteristica1 = argumento1; //* Se crea la propiedad `caracteristica1` y se le asigna el valor recibido como argumento.
        this.caracteristica2 = argumento2; //* Se crea la propiedad `caracteristica2` y se le asigna el valor recibido como argumento.
    } //* Cierre del constructor.
} //* Cierre de la clase.


// ?Propiedades con valores fijos o predeterminados.
// ?Las propiedades con valores fijos o predeterminados son aquellas que **no dependen de valores externos** al momento de crear una instancia. Estas propiedades se definen directamente dentro del constructor con un valor asignado de forma explícita, lo que provoca que **todas las instancias de la clase compartan ese mismo valor inicial**. Este tipo de propiedades es útil cuando se desea establecer un comportamiento o estado base común para todos los objetos creados a partir de la clase. A diferencia de las propiedades pasadas por argumento, estos valores **no se reciben como parámetros**, sino que se establecen directamente dentro del constructor, garantizando consistencia entre instancias.
class ClassTest2 { //* Se define la clase `ClassTest2`.
    constructor(argumento1) { //* El constructor recibe solo el argumento necesario.
        this.argumento1 = argumento1; //* Propiedad cuyo valor sí depende del argumento recibido.
        this.caracteristicaFija = 'Valor predeterminado'; //* Propiedad con un valor fijo compartido por todas las instancias.
    } //* Cierre del constructor.
} //* Cierre de la clase.


// &Instancia.
// &Una instancia es un **objeto concreto** creado a partir de una clase. Mientras que la clase define la estructura general, la instancia representa un elemento real con valores específicos. Cada instancia es independiente de las demás, aunque todas compartan la misma estructura definida por la clase. Las instancias se crean utilizando la palabra clave `new`, seguida del nombre de la clase y los argumentos requeridos por el constructor. Este enfoque permite crear múltiples objetos similares sin duplicar código.
console.log('--- Instancia. ---'); // *Imprime un mensaje indicando que se demostrará el uso de una instancia en una clase.
class Perro { // *Se declara la clase `Perro`, que servirá como plantilla para crear perros.
    constructor(nombreRecibido, colorRecibido) { // *El constructor recibe los valores específicos de cada perro.
        this.nombre = nombreRecibido; // *Se asigna el nombre recibido a la propiedad `nombre` del objeto.
        this.color = colorRecibido; // *Se asigna el color recibido a la propiedad `color` del objeto.
    } // *Cierre del constructor.
} // *Cierre de la clase `Perro`.

let perro1 = new Perro('Firulais', 'Café'); // *Se crea una instancia de la clase `Perro`, pasando los valores iniciales al constructor.
console.log(perro1); // *Se imprime el objeto en consola, mostrando sus propiedades y valores.

// &Extraer valores de un objeto creado a partir de una clase.
// &Para acceder a los valores de las propiedades de un objeto creado a partir de una clase, se utiliza la **notación de punto (`.`)** seguida del nombre de la propiedad. Esta notación nos permite **obtener, leer y utilizar** los valores almacenados dentro del objeto. Es importante entender que estos valores pertenecen a la **instancia** y no directamente a la clase. Además, mediante esta notación también se puede modificar el valor de una propiedad existente. Por ejemplo, si tenemos un objeto llamado `perro1` con una propiedad `nombre`, podemos acceder a su valor escribiendo `perro1.nombre`.
console.log('\n--- Extraer valores de un objeto creado a partir de una clase. ---'); //* Indica que se demostrará la extracción de valores desde un objeto creado a partir de una clase.
console.log(perro1.nombre); //* Se accede a la propiedad `nombre` del objeto `perro1` y se imprime su valor actual en consola.

// &Declarar nuevo valor en un objeto creado a partir de una clase.
// &Para modificar o asignar un nuevo valor a una propiedad de un objeto creado a partir de una clase, se utiliza igualmente la notación de punto (`.`), seguida del nombre de la propiedad, y se le asigna un nuevo valor mediante el operador de asignación (`=`). Esta acción permite **actualizar el estado interno del objeto** sin necesidad de crear una nueva instancia. Es importante recalcar que esta modificación solo afecta al objeto específico que estamos manipulando y no a la clase ni a otras instancias creadas a partir de ella.
console.log('\n--- Declarar nuevo valor en un objeto creado a partir de una clase. ---'); //* Indica que se demostrará la declaración o modificación de un valor en un objeto.
perro1.nombre = 'Max'; //* Se modifica la propiedad `nombre` del objeto `perro1`, asignándole un nuevo valor.
console.log(perro1.nombre); //* Se imprime el nuevo valor de la propiedad para confirmar el cambio.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Métodos.
// ~Los métodos en JavaScript son funciones que están **asociadas a objetos y clases**, y permiten definir comportamientos o acciones que dichos objetos pueden realizar. Al utilizar métodos, es posible **encapsular la lógica** relacionada con un objeto dentro de su propia definición, lo que mejora la organización, legibilidad y mantenimiento del código. Los métodos pueden acceder y manipular las propiedades del objeto mediante la palabra clave `this`, lo que les permite interactuar directamente con el estado interno del objeto. Por esta razón, los métodos pueden considerarse como **funciones especiales** que describen las acciones que todos los objetos creados a partir de una clase pueden ejecutar, utilizando la información almacenada en sus propias propiedades. Donde cada clase puede tener múltiples métodos que definen diferentes comportamientos.
console.log('\n=========== Métodos ==========='); //* Indica el inicio de la sección dedicada al uso de métodos.

// &Definición de métodos en una clase.
// &Los métodos se definen dentro del cuerpo de una clase, **fuera del constructor**, y se declaran utilizando una sintaxis similar a la de una función, pero **sin la palabra clave `function`**. Los métodos pueden recibir parámetros y ejecutar lógica que haga uso de las propiedades del objeto a través de `this`. Al definir métodos en una clase, se establece un comportamiento común que todas las instancias creadas a partir de dicha clase compartirán.
console.log('--- Definición de métodos en una clase. ---'); //* Indica que se demostrará la definición de métodos en una clase.
class Animal { //* Se declara la clase `Animal`.
    constructor(nombre, edad, especie, sonido) { //* El constructor se encarga de inicializar las propiedades del objeto.
        this.nombre = nombre; //* Propiedad que almacena el nombre del animal.
        this.edad = edad; //* Propiedad que almacena la edad del animal.
        this.especie = especie; //* Propiedad que define la especie del animal.
        this.sonido = sonido; //* Propiedad que almacena el sonido característico del animal.
    } // *Cierre del colnstructor.

    hacerSonido() { //* Método que define una acción que puede realizar cualquier instancia de la clase.
        console.log(this.sonido); //* Se accede a la propiedad `sonido` del objeto utilizando `this` y se imprime en consola.
    } // *Cierre del método `hacerSonido`.
} //* Cierre de la clase `Animal`.

let gato1 = new Animal('Wilson', 2, 'Gato', 'Miau'); //* Se crea una instancia de la clase `Animal` con valores específicos.
gato1.hacerSonido(); //* Se invoca el método `hacerSonido`, ejecutando el comportamiento definido en la*


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Encapsulamiento
// ~El encapsulamiento es uno de los principios fundamentales de la Programación Orientada a Objetos (OOP) y consiste en **ocultar los detalles internos de un objeto**, permitiendo que el acceso y la modificación de sus datos se realicen únicamente a través de una interfaz controlada. Esto significa que, si una clase contiene propiedades definidas como privadas, dichas propiedades **no podrán ser accedidas ni modificadas directamente desde fuera de la clase**. En su lugar, se debe interactuar con el objeto mediante métodos públicos, los cuales actúan como intermediarios entre el exterior y el estado interno del objeto. El encapsulamiento ayuda a **proteger la integridad de los datos**, previene modificaciones indebidas, reduce errores y facilita el mantenimiento del código, ya que los cambios internos pueden realizarse sin afectar a las partes externas que utilizan la clase.
console.log('\n=========== Encapsulamiento ==========='); //* Indica el inicio de la sección dedicada al encapsulamiento.

// &Definición de propiedades privadas
// &En JavaScript, las propiedades privadas se definen utilizando el prefijo `#` antes del nombre de la propiedad. Estas propiedades deben declararse **dentro del cuerpo de la clase, antes del constructor**, indicando únicamente el nombre de cada propiedad precedido por `#`. Posteriormente, dentro del constructor o de los métodos de la clase, estas propiedades pueden inicializarse y utilizarse mediante `this.#propiedad`. Una característica clave de las propiedades privadas es que **no pueden ser accedidas ni modificadas desde fuera de la clase**, lo que garantiza que el estado interno del objeto permanezca protegido. Si se intenta acceder a una propiedad privada desde el exterior, JavaScript lanzará un error, indicando que dicha propiedad no es accesible.
console.log('--- Definición de propiedades privadas en una clase. ---'); //* Indica que se demostrará la definiciónde propiedades privadas en una clase.
class Mascota { // *Se declara la clase `Mascota`.
    #nombre;   //* Propiedad privada que almacena el nombre de la mascota.
    #especie;  //* Propiedad privada que almacena la especie.
    #energia;  //* Propiedad privada que representa el nivel de energía.
    #hambre;   //* Propiedad privada que representa el nivel de hambre.

    constructor(nombre, especie) {
        this.#nombre = nombre;   //* Se inicializa la propiedad privada `#nombre` con el valor recibido.
        this.#especie = especie; //* Se inicializa la propiedad privada `#especie` con el valor recibido.
        this.#energia = 100;     //* Valor predeterminado para la energía.
        this.#hambre = 0;        //* Valor predeterminado para el hambre.
    } // *Cierre del constructor.
} // *Cierre de la clase `Mascota`.

let mascota1 = new Mascota('Luna', 'Gato'); // *Se instancia un objeto de la clase `Mascota`.
console.log(mascota1.nombre); // *Intentar mostrar en consola el nombre de la mascota (esto generará un error porque `nombre` es una propiedad privada).

// &Modificación y lectura de propiedades privadas mediante métodos públicos
// &Debido a que las propiedades privadas (definidas con el prefijo `#`) **no pueden ser accedidas ni modificadas directamente desde fuera de la clase**, JavaScript obliga a utilizar **métodos públicos** para interactuar con ellas. Estos métodos actúan como una **interfaz controlada**, permitiendo acceder o modificar el estado interno del objeto sin exponer directamente sus datos. Gracias a este enfoque, el desarrollador puede decidir **cómo, cuándo y bajo qué condiciones** se permite la lectura o modificación de dichas propiedades, lo que ayuda a mantener la **seguridad, coherencia y encapsulación** del objeto. Los métodos más utilizados para este propósito son los métodos **GET** (para obtener valores) y **SET** (para modificar valores).
// ?Métodos GET para propiedades privadas
// ?Los métodos GET son métodos públicos que permiten **obtener o leer el valor** almacenado en una propiedad privada de una clase. Estos métodos se definen dentro de la clase y tienen acceso directo a las propiedades privadas utilizando la palabra clave `this` junto con el prefijo `#`. Cuando se requiere conocer el valor de una propiedad privada desde fuera de la clase, **no se accede directamente a la propiedad**, sino que se invoca el método GET correspondiente, el cual **retorna el valor** mediante la instrucción `return`. Este patrón asegura que la lectura de datos se realice de forma **controlada, segura y predecible**, evitando accesos indebidos o modificaciones accidentales.
console.log('\n--- Métodos GET para propiedades privadas. ---'); //* Indica que se demostrará el uso de Métodos GET para propiedades privadas.
class Videojuego { //* Se declara la clase `Videojuego`.
    #nombre; //* Propiedad privada que almacena el nombre del videojuego.
    #genero; //* Propiedad privada que almacena el género del videojuego.
    #compania; //* Propiedad privada que almacena la compañía desarrolladora.
    #precio; //* Propiedad privada que almacena el precio del videojuego.

    constructor(nombre, genero, compania, precio) { //* Constructor que inicializa las propiedades privadas con los valores recibidos.
        this.#nombre = nombre; //* Inicializa la propiedad privada `#nombre` con el valor recibido por el constructor.
        this.#genero = genero; //* Inicializa la propiedad privada `#genero` con el valor recibido por el constructor.
        this.#compania = compania; //* Inicializa la propiedad privada `#compania` con el valor recibido por el constructor.
        this.#precio = precio; //* Inicializa la propiedad privada `#precio` con el valor recibido por el constructor.
    } //* Cierre del constructor.

    obtenerNombre() { //* Método público (GET) que permite obtener el valor de la propiedad privada `#nombre`.
        return this.#nombre; //* Retorna el valor de la propiedad privada `#nombre`.
    } //* Cierre del método obtenerNombre.
} //* Cierre de la clase `Videojuego`.

let videojuego1 = new Videojuego('The Legend Of Zelda', 'Adventure', 'Nintendo', 1200); //* Se crea una instancia de `Videojuego` pasando los valores iniciales.
console.log(videojuego1.obtenerNombre()); //* Se imprime en consola el nombre del videojuego usando el método GET.

// ?Métodos SET para propiedades privadas
// ?Los métodos SET son métodos públicos que permiten **modificar o establecer el valor** de una propiedad privada de una clase. Estos métodos se definen dentro de la clase y tienen acceso directo a las propiedades privadas utilizando la palabra clave `this` junto con el prefijo `#`. Cuando se desea cambiar el valor de una propiedad privada desde fuera de la clase, **no se accede directamente a la propiedad**, sino que se invoca el método SET correspondiente, pasando el nuevo valor como argumento. Este patrón asegura que la modificación de datos se realice de forma **controlada, segura y predecible**, permitiendo validar o procesar el nuevo valor antes de asignarlo a la propiedad privada, evitando así modificaciones indebidas o inconsistentes.
console.log('\n--- Métodos SET para propiedades privadas. ---'); //* Imprime un mensaje indicando que se demostrará el uso de métodos SET para propiedades privadas.
class Coche { //* Se declara la clase `Coche`.
    #marca;  //* Propiedad privada que almacena la marca del coche.
    #modelo; //* Propiedad privada que almacena el modelo del coche.
    #precio; //* Propiedad privada que almacena el precio del coche.

    constructor(marca, modelo, precio) { //* Constructor que se ejecuta al crear una nueva instancia de la clase.
        this.#marca = marca;   //* Inicializa la propiedad privada `#marca` con el valor recibido.
        this.#modelo = modelo; //* Inicializa la propiedad privada `#modelo` con el valor recibido.
        this.#precio = precio; //* Inicializa la propiedad privada `#precio` con el valor recibido.
    } //* Cierre del constructor.

    establecerNuevoPrecio(precioNuevo) { //* Método público SET que permite modificar el valor de la propiedad privada `#precio`.
        this.#precio = precioNuevo; //* Se asigna el nuevo valor recibido a la propiedad privada `#precio`.
        return this.#precio; //* Retorna el nuevo valor del precio para confirmar la actualización.
    } //* Cierre del método establecerNuevoPrecio.
} //* Cierre de la clase `Coche`.

let coche1 = new Coche('Nissan', 'Tsuru', 23000); //* Se crea una instancia de la clase `Coche` con valores iniciales.
console.log(coche1.establecerNuevoPrecio(50000)); //* Se modifica el precio usando el método SET y se imprime el nuevo valor en consola.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
