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
console.log('\n--- Extraer valores de un objeto creado a partir de una clase. ---'); // *Indica que se demostrará la extracción de valores desde un objeto creado a partir de una clase.
console.log(perro1.nombre); // *Se accede a la propiedad `nombre` del objeto `perro1` y se imprime su valor actual en consola.

// &Declarar nuevo valor en un objeto creado a partir de una clase.
// &Para modificar o asignar un nuevo valor a una propiedad de un objeto creado a partir de una clase, se utiliza igualmente la notación de punto (`.`), seguida del nombre de la propiedad, y se le asigna un nuevo valor mediante el operador de asignación (`=`). Esta acción permite **actualizar el estado interno del objeto** sin necesidad de crear una nueva instancia. Es importante recalcar que esta modificación solo afecta al objeto específico que estamos manipulando y no a la clase ni a otras instancias creadas a partir de ella.
console.log('\n--- Declarar nuevo valor en un objeto creado a partir de una clase. ---'); // *Indica que se demostrará la declaración o modificación de un valor en un objeto.
perro1.nombre = 'Max'; // *Se modifica la propiedad `nombre` del objeto `perro1`, asignándole un nuevo valor.
console.log(perro1.nombre); // *Se imprime el nuevo valor de la propiedad para confirmar el cambio.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Métodos.
// ~Los métodos en JavaScript son funciones que están **asociadas a objetos y clases**, y permiten definir comportamientos o acciones que dichos objetos pueden realizar. Al utilizar métodos, es posible **encapsular la lógica** relacionada con un objeto dentro de su propia definición, lo que mejora la organización, legibilidad y mantenimiento del código. Los métodos pueden acceder y manipular las propiedades del objeto mediante la palabra clave `this`, lo que les permite interactuar directamente con el estado interno del objeto. Por esta razón, los métodos pueden considerarse como **funciones especiales** que describen las acciones que todos los objetos creados a partir de una clase pueden ejecutar, utilizando la información almacenada en sus propias propiedades. Donde cada clase puede tener múltiples métodos que definen diferentes comportamientos.
console.log('\n=========== Métodos ==========='); // *Indica el inicio de la sección dedicada al uso de métodos.

// &Definición de métodos en una clase.
// &Los métodos se definen dentro del cuerpo de una clase, **fuera del constructor**, y se declaran utilizando una sintaxis similar a la de una función, pero **sin la palabra clave `function`**. Los métodos pueden recibir parámetros y ejecutar lógica que haga uso de las propiedades del objeto a través de `this`. Al definir métodos en una clase, se establece un comportamiento común que todas las instancias creadas a partir de dicha clase compartirán.
console.log('--- Definición de métodos en una clase. ---'); // *Indica que se demostrará la definición de métodos en una clase.
class Animal { // *Se declara la clase `Animal`.
    constructor(nombre, edad, especie, sonido) { // *El constructor se encarga de inicializar las propiedades del objeto.
        this.nombre = nombre; // *Propiedad que almacena el nombre del animal.
        this.edad = edad; // *Propiedad que almacena la edad del animal.
        this.especie = especie; // *Propiedad que define la especie del animal.
        this.sonido = sonido; // *Propiedad que almacena el sonido característico del animal.
    } // *Cierre del colnstructor.

    hacerSonido() { // *Método que define una acción que puede realizar cualquier instancia de la clase.
        console.log(this.sonido); // *Se accede a la propiedad `sonido` del objeto utilizando `this` y se imprime en consola.
    } // *Cierre del método `hacerSonido`.
} // *Cierre de la clase `Animal`.

let gato1 = new Animal('Wilson', 2, 'Gato', 'Miau'); //* Se crea una instancia de la clase `Animal` con valores específicos.
gato1.hacerSonido(); // *Se invoca el método `hacerSonido`, ejecutando el comportamiento definido en la*


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Encapsulamiento.
// ~El encapsulamiento es uno de los principios fundamentales de la Programación Orientada a Objetos (OOP) y consiste en **ocultar los detalles internos de un objeto**, permitiendo que el acceso y la modificación de sus datos se realicen únicamente a través de una interfaz controlada. Esto significa que, si una clase contiene propiedades definidas como privadas, dichas propiedades **no podrán ser accedidas ni modificadas directamente desde fuera de la clase**. En su lugar, se debe interactuar con el objeto mediante métodos públicos, los cuales actúan como intermediarios entre el exterior y el estado interno del objeto. El encapsulamiento ayuda a **proteger la integridad de los datos**, previene modificaciones indebidas, reduce errores y facilita el mantenimiento del código, ya que los cambios internos pueden realizarse sin afectar a las partes externas que utilizan la clase.
console.log('\n=========== Encapsulamiento ==========='); // *Indica el inicio de la sección dedicada al encapsulamiento.

// &Definición de propiedades privadas.
// &En JavaScript, las propiedades privadas se definen utilizando el prefijo `#` antes del nombre de la propiedad. Estas propiedades deben declararse **dentro del cuerpo de la clase, antes del constructor**, indicando únicamente el nombre de cada propiedad precedido por `#`. Posteriormente, dentro del constructor o de los métodos de la clase, estas propiedades pueden inicializarse y utilizarse mediante `this.#propiedad`. Una característica clave de las propiedades privadas es que **no pueden ser accedidas ni modificadas desde fuera de la clase**, lo que garantiza que el estado interno del objeto permanezca protegido. Si se intenta acceder a una propiedad privada desde el exterior, JavaScript lanzará un error, indicando que dicha propiedad no es accesible.
console.log('--- Definición de propiedades privadas en una clase. ---'); // *Indica que se demostrará la definiciónde propiedades privadas en una clase.
class Mascota { // *Se declara la clase `Mascota`.
    #nombre;   // *Propiedad privada que almacena el nombre de la mascota.
    #especie;  // *Propiedad privada que almacena la especie.
    #energia;  // *Propiedad privada que representa el nivel de energía.
    #hambre;   // *Propiedad privada que representa el nivel de hambre.

    constructor(nombre, especie) {
        this.#nombre = nombre;   // *Se inicializa la propiedad privada `#nombre` con el valor recibido.
        this.#especie = especie; // *Se inicializa la propiedad privada `#especie` con el valor recibido.
        this.#energia = 100;     // *Valor predeterminado para la energía.
        this.#hambre = 0;        // *Valor predeterminado para el hambre.
    } // *Cierre del constructor.
} // *Cierre de la clase `Mascota`.

let mascota1 = new Mascota('Luna', 'Gato'); // *Se instancia un objeto de la clase `Mascota`.
console.log(mascota1.nombre); // *Intentar mostrar en consola el nombre de la mascota (esto generará un error porque `nombre` es una propiedad privada).

// &Modificación y lectura de propiedades privadas mediante métodos públicos.
// &Debido a que las propiedades privadas (definidas con el prefijo `#`) **no pueden ser accedidas ni modificadas directamente desde fuera de la clase**, JavaScript obliga a utilizar **métodos públicos** para interactuar con ellas. Estos métodos actúan como una **interfaz controlada**, permitiendo acceder o modificar el estado interno del objeto sin exponer directamente sus datos. Gracias a este enfoque, el desarrollador puede decidir **cómo, cuándo y bajo qué condiciones** se permite la lectura o modificación de dichas propiedades, lo que ayuda a mantener la **seguridad, coherencia y encapsulación** del objeto. Los métodos más utilizados para este propósito son los métodos **GET** (para obtener valores) y **SET** (para modificar valores).
// ?Métodos GET para propiedades privadas.
// ?Los métodos GET son métodos públicos que permiten **obtener o leer el valor** almacenado en una propiedad privada de una clase. Estos métodos se definen dentro de la clase y tienen acceso directo a las propiedades privadas utilizando la palabra clave `this` junto con el prefijo `#`. Cuando se requiere conocer el valor de una propiedad privada desde fuera de la clase, **no se accede directamente a la propiedad**, sino que se invoca el método GET correspondiente, el cual **retorna el valor** mediante la instrucción `return`. Este patrón asegura que la lectura de datos se realice de forma **controlada, segura y predecible**, evitando accesos indebidos o modificaciones accidentales.
console.log('\n--- Métodos GET para propiedades privadas. ---'); // *Indica que se demostrará el uso de Métodos GET para propiedades privadas.
class Videojuego { // *Se declara la clase `Videojuego`.
    #nombre; // *Propiedad privada que almacena el nombre del videojuego.
    #genero; // *Propiedad privada que almacena el género del videojuego.
    #compania; // *Propiedad privada que almacena la compañía desarrolladora.
    #precio; // *Propiedad privada que almacena el precio del videojuego.

    constructor(nombre, genero, compania, precio) { // *Constructor que inicializa las propiedades privadas con los valores recibidos.
        this.#nombre = nombre; // *Inicializa la propiedad privada `#nombre` con el valor recibido por el constructor.
        this.#genero = genero; // *Inicializa la propiedad privada `#genero` con el valor recibido por el constructor.
        this.#compania = compania; // *Inicializa la propiedad privada `#compania` con el valor recibido por el constructor.
        this.#precio = precio; // *Inicializa la propiedad privada `#precio` con el valor recibido por el constructor.
    } // *Cierre del constructor.

    obtenerNombre() { // *Método público (GET) que permite obtener el valor de la propiedad privada `#nombre`.
        return this.#nombre; //* Retorna el valor de la propiedad privada `#nombre`.
    } // *Cierre del método obtenerNombre.
} //* Cierre de la clase `Videojuego`.

let videojuego1 = new Videojuego('The Legend Of Zelda', 'Adventure', 'Nintendo', 1200); //* Se crea una instancia de `Videojuego` pasando los valores iniciales.
console.log(videojuego1.obtenerNombre()); // *Se imprime en consola el nombre del videojuego usando el método GET.

// ?Métodos SET para propiedades privadas.
// ?Los métodos SET son métodos públicos que permiten **modificar o establecer el valor** de una propiedad privada de una clase. Estos métodos se definen dentro de la clase y tienen acceso directo a las propiedades privadas utilizando la palabra clave `this` junto con el prefijo `#`. Cuando se desea cambiar el valor de una propiedad privada desde fuera de la clase, **no se accede directamente a la propiedad**, sino que se invoca el método SET correspondiente, pasando el nuevo valor como argumento. Este patrón asegura que la modificación de datos se realice de forma **controlada, segura y predecible**, permitiendo validar o procesar el nuevo valor antes de asignarlo a la propiedad privada, evitando así modificaciones indebidas o inconsistentes.
console.log('\n--- Métodos SET para propiedades privadas. ---'); // *Imprime un mensaje indicando que se demostrará el uso de métodos SET para propiedades privadas.
class Coche { // *Se declara la clase `Coche`.
    #marca;  // *Propiedad privada que almacena la marca del coche.
    #modelo; // *Propiedad privada que almacena el modelo del coche.
    #precio; // *Propiedad privada que almacena el precio del coche.

    constructor(marca, modelo, precio) { // *Constructor que se ejecuta al crear una nueva instancia de la clase.
        this.#marca = marca;   // *Inicializa la propiedad privada `#marca` con el valor recibido.
        this.#modelo = modelo; // *Inicializa la propiedad privada `#modelo` con el valor recibido.
        this.#precio = precio; // *Inicializa la propiedad privada `#precio` con el valor recibido.
    } // *Cierre del constructor.

    establecerNuevoPrecio(precioNuevo) { // *Método público SET que permite modificar el valor de la propiedad privada `#precio`.
        this.#precio = precioNuevo; // *Se asigna el nuevo valor recibido a la propiedad privada `#precio`.
        return this.#precio; // *Retorna el nuevo valor del precio para confirmar la actualización.
    } // *Cierre del método establecerNuevoPrecio.
} // *Cierre de la clase `Coche`.

let coche1 = new Coche('Nissan', 'Tsuru', 23000); // *Se crea una instancia de la clase `Coche` con valores iniciales.
console.log(coche1.establecerNuevoPrecio(50000)); // *Se modifica el precio usando el método SET y se imprime el nuevo valor en consola.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Throw (Lanzamiento de errores).
// ~`throw` es una **palabra reservada de JavaScript** que se utiliza para **lanzar errores de forma manual** durante la ejecución de un programa. Su principal característica es que, cuando se ejecuta, **detiene inmediatamente la ejecución del código en ese punto**, interrumpiendo por completo el flujo normal del programa. Esto significa que **ninguna línea de código que se encuentre después del `throw` será ejecutada**, a menos que dicho error sea capturado previamente mediante un bloque `try...catch`. Por esta razón, `throw` se considera una herramienta poderosa y delicada, utilizada para señalar situaciones críticas en las que el programa no debería continuar funcionando de manera normal.
// &¿Para qué se utiliza throw en JavaScript?
// &El uso de `throw` es común cuando se desea **forzar un error personalizado** en el programa. A diferencia de los errores automáticos que genera JavaScript (como errores de sintaxis o de tipo), `throw` permite al programador definir **cuándo y por qué** se debe detener la ejecución. Es especialmente útil para validar datos, proteger la lógica interna de funciones o clases, y evitar que el programa continúe ejecutándose con información incorrecta o estados inválidos.
// ?Comportamiento de throw durante la ejecución del programa.
// ?Cuando JavaScript encuentra una instrucción `throw`, ocurren varias cosas importantes:
// ?Primero, el motor de JavaScript **detiene la ejecución inmediata del código**.
// ?Segundo, el error se propaga hacia arriba en la pila de ejecución.
// ?Tercero, si no existe un bloque `try...catch` que capture ese error, el programa se rompe y muestra el mensaje de error en consola.
// ?Por lo tanto, cualquier código escrito después de un `throw` **no se ejecutará**, lo que explica por qué su uso debe ser controlado y consciente.
// &Throw como mecanismo de control de flujo.
// &Aunque `throw` no está diseñado para controlar el flujo del programa como un `if` o un bucle, en la práctica se utiliza para **interrumpir la ejecución** cuando se detecta una condición que viola una regla importante del sistema. Esto lo convierte en una herramienta clave para la programación defensiva, donde se busca evitar estados incorrectos antes de que causen problemas mayores.
// ?Throw Error y throw new Error().
// ?La forma recomendada de lanzar errores en JavaScript es utilizando `throw new Error()`. Esto crea un **objeto de error estándar**, lo que permite que el error sea identificado, manejado y depurado de manera más clara. Este enfoque es ampliamente utilizado en aplicaciones profesionales, frameworks y sistemas de gran escala, ya que mejora la legibilidad del código y el manejo centralizado de errores.
// &Uso responsable de throw.
// &Debido a que `throw` detiene completamente la ejecución del código, debe utilizarse únicamente en situaciones donde **continuar ejecutando el programa podría causar errores mayores o resultados incorrectos**. En la mayoría de los casos, `throw` se combina con bloques `try...catch` para permitir un manejo controlado del error sin que la aplicación se rompa por completo.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Herencia.
// ~La herencia es un principio fundamental de la Programación Orientada a Objetos (OOP) que permite crear nuevas clases basadas en clases existentes. La clase que hereda se llama **subclase** o **clase derivada**, mientras que la clase de la cual se hereda se llama **superclase** o **clase base**. La subclase **hereda** todas las propiedades y métodos de la superclase, lo que permite reutilizar código y establecer una relación jerárquica entre las clases. Además, la subclase puede **añadir nuevas propiedades y métodos** o **modificar** los existentes para adaptarlos a sus necesidades específicas. En JavaScript, la herencia se implementa utilizando la palabra clave `extends` para indicar que una clase es una subclase de otra, y el constructor de la subclase debe llamar al constructor de la superclase utilizando `super()`. La herencia facilita la creación de sistemas más organizados, modulares y fáciles de mantener.
console.log('\n=========== Herencia ==========='); // *Indica el inicio de la sección dedicada a la herencia.

// &Sintaxis de la herencia en JavaScript.
// &Para poder realizar una herencia en JavaScript, es necesario tener una clase base (superclase) de la cual se desea heredar propiedades y métodos. Luego, se crea una nueva clase (subclase) que utiliza la palabra clave 'extends' seguida del nombre de la clase base. Dentro del constructor de la subclase, se debe llamar al constructor de la superclase utilizando la funcion 'super()', pasando los argumentos necesarios para inicializar las propiedades heredadas. De esta manera, la subclase puede acceder a las propiedades y métodos de la superclase, además de definir sus propias características adicionales.
// ?Uso de 'extends' en subclases.
// ?El uso de 'extends' en subclases es fundamental para establecer una relación de herencia entre dos clases en JavaScript. Al utilizar 'extends', la subclase adquiere automáticamente todas las propiedades y métodos definidos en la superclase, lo que permite reutilizar código y evitar duplicación. Esto facilita la creación de jerarquías de clases donde las subclases pueden especializar o ampliar el comportamiento de la superclase, promoviendo un diseño más modular y mantenible. La sintaxis correcta implica declarar la subclase con 'class Subclase extends Superclase', lo que indica claramente que la nueva clase está basada en la clase existente.
class superclase { // *Se declara una clase base (superclase), la cual servirá como plantilla para otras clases.
} // *Cierre de la clase `superclase`.

class subclase extends superclase { // *Se declara una subclase que hereda automáticamente todas las propiedades y métodos de `superclase`.
} // *Cierre de la clase `subclase`.


// ?Uso de 'super()' en el constructor de la subclase.
// ?El uso de 'super()' en el constructor de la subclase es esencial para invocar el constructor de la superclase y asegurar que las propiedades heredadas se inicialicen correctamente. Al llamar a 'super()', se pasan los argumentos necesarios que la superclase requiere para su inicialización. Además, las subclases pueden definir sus propias propiedades adicionales externas a las heredadas. Un ejemplo de esto es que cuando instanciamos un objeto en base a una subclase, le pasamos los argumentos tanto para las propiedades heredadas como para las nuevas propiedades definidas en la subclase. Por lo que una vez reciba la subclase los argumentos, primero llamará a 'super()' y le pasará los argumentos correspondientes a la superclase, y luego inicializará sus propias propiedades con los argumentos restantes. Donde una vez inicializados los atributos heredados podrán ser utilizados dentro de la subclase.
console.log('--- Uso de \'super()\' en el constructor de la subclase. ---'); // *Imprime un mensaje indicando que se demostrará el uso de 'super()' en el constructor de la subclase..
class Personal { // *Se declara la clase `Personal`, la cual funcionará como superclase.
    constructor(nombre, edad) { // *Constructor de la clase `Personal`, recibe los valores iniciales.
        this.nombre = nombre; // *Se asigna el valor recibido al atributo `nombre`.
        this.edad = edad; // *Se asigna el valor recibido al atributo `edad`.
    } // *Cierre del constructor.

    presetnacion() { // *Método que pertenece a la clase `Personal`.
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`); // *Imprime una presentación usando las propiedades del objeto.
    } // *Cierre del método `presentacion`.
} // *Cierre de la clase `Personal`.

class Ingeniero extends Personal { // *Se declara la clase `Ingeniero` como subclase de `Personal`.
    constructor(nombre, edad, especialidad) { // *Constructor de la subclase `Ingeniero`.
        super(nombre, edad); // *Se llama al constructor de la superclase para inicializar `nombre` y `edad`.
        this.especialidad = especialidad; // *Se define una propiedad propia de la subclase.
    } // *Cierre del constructor.

    experiencia() { // *Método exclusivo de la subclase `Ingeniero`.
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y actualmente soy ingeniero con una especialidad en ${this.especialidad}.`); // *Combina propiedades heredadas y propias.
    } // *Cierre del método `experiencia`.
} // *Cierre de la clase `Ingeniero`.

let ingeniero1 = new Ingeniero('Carlos', 32, 'Mantenimiento'); // *Se crea una instancia de la clase `Ingeniero`.
ingeniero1.experiencia(); // *Se ejecuta un método de la subclase que utiliza herencia.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Polimorfismo.
// ~El polimorfismo es un principio fundamental de la Programación Orientada a Objetos (OOP) que permite que objetos de diferentes clases respondan al mismo mensaje o método de manera diferente, donde normalmente esto aplica con superclases y subclases. Esto significa que un mismo método puede tener múltiples implementaciones, dependiendo del tipo de objeto que lo invoque. Un ejemplo común de polimorfismo es la **sobrescritura de métodos**, donde una subclase redefine un método heredado de su superclase para proporcionar un comportamiento específico. Esto, en pocas palabras, podemos decir que el polimorfismo es la capacidad que tiene una subclase para redefinir un método que ya se encuentra en su superclase, donde esta subclase hará overwrite (sobrescribir) el método heredado para adaptarlo a sus necesidades específicas.
console.log('\n=========== Polimorfismo ==========='); // *Indica el inicio de la sección dedicada al polimorfismo.
class Intrumento { // *Se declara la clase base `Intrumento`, la cual funcionará como superclase.
    constructor(nombre) { // *Constructor de la clase `Intrumento`, recibe el nombre del instrumento.
        this.nombre = nombre; // *Se asigna el valor recibido a la propiedad `nombre` del objeto.
    } // *Cierre del constructor.

    tocar() { // *Método definido en la superclase que puede ser heredado o sobrescrito por subclases.
        console.log(`El instrumento ${this.nombre} está sonando.`); // *Comportamiento general para cualquier instrumento.
    } // *Cierre del método `tocar`.
} // *Cierre de la clase `Intrumento`.

class Guitarra extends Intrumento { // *Se declara la subclase `Guitarra`, que hereda de `Intrumento`.
    constructor() { // *Constructor de la subclase `Guitarra`.
        super('Guitarra'); // *Se llama al constructor de la superclase y se inicializa el nombre del instrumento.
    } // *Cierre del constructor.

    tocar() { // *Sobrescritura (override) del método `tocar` heredado de la superclase.
        console.log(`La ${this.nombre} esta tocando un solo espectacular.`); // *Implementación específica para la guitarra (polimorfismo).
    } // *Cierre del método `tocar`.
} // *Cierre de la clase `Guitarra`.

let guitarra1 = new Guitarra(); // *Se crea una instancia de la clase `Guitarra`.
guitarra1.tocar(); // *Se invoca el método `tocar`, ejecutando la versión sobrescrita de la subclase.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Throw (Lanzamiento de errores).
// ~`throw` es una **palabra reservada de JavaScript** que se utiliza para **lanzar errores de forma manual** durante la ejecución de un programa. Su principal característica es que, cuando se ejecuta, **detiene inmediatamente la ejecución del código en ese punto**, interrumpiendo por completo el flujo normal del programa. Esto significa que **ninguna línea de código que se encuentre después del `throw` será ejecutada**, a menos que dicho error sea capturado previamente mediante un bloque `try...catch`. Por esta razón, `throw` se considera una herramienta poderosa y delicada, utilizada para señalar situaciones críticas en las que el programa no debería continuar funcionando de manera normal.
// &¿Para qué se utiliza throw en JavaScript?
// &El uso de `throw` es común cuando se desea **forzar un error personalizado** en el programa. A diferencia de los errores automáticos que genera JavaScript (como errores de sintaxis o de tipo), `throw` permite al programador definir **cuándo y por qué** se debe detener la ejecución. Es especialmente útil para validar datos, proteger la lógica interna de funciones o clases, y evitar que el programa continúe ejecutándose con información incorrecta o estados inválidos.
// ?Comportamiento de throw durante la ejecución del programa.
// ?Cuando JavaScript encuentra una instrucción `throw`, ocurren varias cosas importantes:
// ?Primero, el motor de JavaScript **detiene la ejecución inmediata del código**.
// ?Segundo, el error se propaga hacia arriba en la pila de ejecución.
// ?Tercero, si no existe un bloque `try...catch` que capture ese error, el programa se rompe y muestra el mensaje de error en consola.
// ?Por lo tanto, cualquier código escrito después de un `throw` **no se ejecutará**, lo que explica por qué su uso debe ser controlado y consciente.
// &Throw como mecanismo de control de flujo.
// &Aunque `throw` no está diseñado para controlar el flujo del programa como un `if` o un bucle, en la práctica se utiliza para **interrumpir la ejecución** cuando se detecta una condición que viola una regla importante del sistema. Esto lo convierte en una herramienta clave para la programación defensiva, donde se busca evitar estados incorrectos antes de que causen problemas mayores.
// ?Throw y errores personalizados.
// ?JavaScript permite lanzar prácticamente cualquier valor con `throw`, como strings, números u objetos. Sin embargo, **no es una buena práctica lanzar valores simples**, ya que esto dificulta el manejo profesional de errores. En aplicaciones reales, se prefiere lanzar objetos de tipo `Error`, ya que estos incluyen información adicional útil para la depuración, como el mensaje del error y la traza de ejecución.
// &Throw Error y throw new Error().
// &La forma recomendada de lanzar errores en JavaScript es utilizando `throw new Error()`. Esto crea un **objeto de error estándar**, lo que permite que el error sea identificado, manejado y depurado de manera más clara. Este enfoque es ampliamente utilizado en aplicaciones profesionales, frameworks y sistemas de gran escala, ya que mejora la legibilidad del código y el manejo centralizado de errores.
// ?Uso responsable de throw.
// ?Debido a que `throw` detiene completamente la ejecución del código, debe utilizarse únicamente en situaciones donde **continuar ejecutando el programa podría causar errores mayores o resultados incorrectos**. En la mayoría de los casos, `throw` se combina con bloques `try...catch` para permitir un manejo controlado del error sin que la aplicación se rompa por completo.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Abstracción.
// ~La abstracción consiste en tomar elementos del mundo real y representarlos dentro de un programa, ocultando los detalles complejos de su funcionamiento interno. Su objetivo principal es **reducir la complejidad cognitiva** y permitir que el usuario o cliente interactúe únicamente con lo esencial. En este enfoque, una clase abstracta define **qué comportamientos deben existir** (qué acciones se pueden realizar), pero no **cómo se implementan**, dejando esa responsabilidad a las subclases. Esto fomenta un diseño más flexible, desacoplado y fácil de extender, ya que nuevas implementaciones pueden añadirse sin modificar la lógica general. Un ejemplo claro es una máquina de café: el usuario solo elige una opción, mientras que el sistema interno gestiona validaciones, procesos y pasos técnicos sin exponerlos.
console.log('\n=========== Abstracción ==========='); // *Indica el inicio de la sección dedicada al concepto de abstracción.

// &Uso de new.target para mostrar el nombre que está intentando instanciar la clase abstracta.
// &`new.target` es una referencia especial proporcionada por JavaScript que existe **únicamente dentro de constructores** y se asigna automáticamente cuando se utiliza la palabra clave `new`. Su función es indicar **qué clase fue realmente utilizada para crear la instancia**, no necesariamente la clase donde se encuentra el constructor. Esto es especialmente útil en escenarios de herencia, ya que aunque se ejecute el constructor de la superclase, `new.target` apuntará a la subclase si fue ella quien realizó la instanciación. Gracias a esto, se pueden crear validaciones avanzadas y simular comportamientos como clases abstractas.
console.log('--- Uso de new.target para mostrar el nombre que esta intentando instanciar la clase abstracta. ---'); // *Indica que se demostrará el uso de `new.target`.

class SuperclaseNewTarget { // *Se declara una superclase para demostrar el comportamiento de `new.target`.
    constructor() { // *Constructor de la superclase, el cual se ejecuta al instanciar esta clase o cualquier subclase.
        console.log(`La clase que esta realizando la instancia es: ${new.target.name}`); // *Muestra el nombre real de la clase que se está instanciando.
    } // *Cierre del constructor.
} // *Cierre de la clase `SuperclaseNewTarget`.

class SubclaseNewTarget extends SuperclaseNewTarget { // *Se declara una subclase que hereda de `SuperclaseNewTarget`.
} // *Cierre de la clase `SubclaseNewTarget`.

let clase1 = new SubclaseNewTarget(); // *Se crea una instancia desde la subclase, pero se ejecuta el constructor de la superclase.

// &Clases abstractas.
// &Las clases abstractas funcionan como una **plantilla o contrato base** que define qué métodos y comportamientos deben existir en las subclases, pero no permite crear objetos directamente a partir de ellas. Su propósito es evitar implementaciones incompletas y garantizar que todas las clases derivadas sigan una estructura común. Aunque JavaScript no cuenta con una palabra reservada para clases abstractas, este comportamiento se simula usando validaciones con `new.target` dentro del constructor, obligando al desarrollador a utilizar herencia para crear instancias válidas.
// ?Condicional para convertir una clase en abstracta.
// ?Este condicional compara `new.target` con la propia clase abstracta. Si ambos coinciden, significa que se utilizó `new` directamente sobre la superclase, lo cual rompe el principio de abstracción y el diseño del sistema. En ese caso se muestra o lanza un error para impedir la creación del objeto. Si no coinciden, significa que la instancia proviene de una subclase, lo cual es el comportamiento esperado, permitiendo que el constructor continúe y se inicialicen las propiedades compartidas.
console.log('\n--- Condicional para convertir una clase a una clase abstracta. ---'); // *Indica que se demostrará cómo simular una clase abstracta.
class SuperclaseAbstracta { // *Se declara una clase que actuará como superclase abstracta.
    constructor() { // *Constructor que se ejecuta al crear una instancia directa o desde una subclase.
        if (new.target === SuperclaseAbstracta) { // *Se verifica si se intenta instanciar directamente esta clase.
            console.error("No se puede instanciar una clase abstracta."); // *Se muestra un error para impedir la instanciación directa.
        } else {
            // *Bloque reservado para inicializar propiedades cuando la clase es heredada.
        }
    } // *Cierre del constructor.
} // *Cierre de la clase `SuperclaseAbstracta`.

let instanciaClases = new SuperclaseAbstracta(); // *Intento de instanciar directamente la clase abstracta (esto genera error).

// ?Métodos abstractos.
// ?Los métodos abstractos representan acciones **obligatorias y esperadas** que todas las subclases deben implementar. No contienen lógica funcional en la superclase, sino que definen la firma del método y actúan como una advertencia o contrato. En JavaScript se simulan creando métodos que muestran o lanzan errores si se ejecutan directamente. Esto asegura que una subclase sobrescriba dichos métodos mediante polimorfismo, proporcionando una implementación concreta acorde a su contexto.
console.log('\n--- Métodos Abstractos. ---'); // *Indica que se demostrará el uso de métodos abstractos.
class MetodosAbstractos { // *Se declara una superclase que contiene métodos abstractos.
    constructor(nombre) { // *Constructor de la superclase.
        if (new.target === MetodosAbstractos) { // *Evita que la superclase sea instanciada directamente.
            console.error('No se puede instanciar desde esta superclase.'); // *Mensaje de error por uso incorrecto.
        } else {
            this.nombre = nombre; // *Inicializa la propiedad cuando se instancia desde una subclase.
        }
    } // *Cierre del constructor.

    primerMetodo() { // *Método que actúa como método abstracto.
        console.error('Este método debe ser sobrescrito mediante polimorfismo en una subclase.'); // *Indica que el método no debe ejecutarse directamente.
    } // *Cierre del método.
} // *Cierre de la clase `MetodosAbstractos`.

class MetodoSubclase extends MetodosAbstractos { // *Se declara una subclase que hereda de `MetodosAbstractos`.
    constructor(nombre) { // *Constructor de la subclase.
        super(nombre); // *Llama al constructor de la superclase para inicializar propiedades heredadas.
    } // *Cierre del constructor.

    primerMetodo() { // *Sobrescritura del método abstracto usando polimorfismo.
        console.log(`Método implementado correctamente para ${this.nombre}.`); // *Implementación concreta del comportamiento.
    } // *Cierre del método.
} // *Cierre de la clase `MetodoSubclase`.

let instancia1 = new MetodoSubclase('Primera instancia'); // *Se crea una instancia válida desde la subclase.
instancia1.primerMetodo(); // *Se ejecuta el método sobrescrito correctamente.

// ?Métodos públicos para definir el comportamiento y flujo general de superclases abstractas.
// ?Cuando una clase se convierte en abstracta, esta **no puede ser instanciada directamente**, ya que su objetivo no es representar un objeto final, sino **servir como una plantilla o contrato** para sus subclases. Sin embargo, esto no significa que la clase abstracta no pueda contener lógica funcional. Al contrario, uno de los usos más importantes de una superclase abstracta es **definir el flujo general de ejecución de un proceso**, dejando los detalles específicos a las subclases. Para lograr esto, se suelen crear **métodos públicos concretos** dentro de la superclase abstracta. Estos métodos públicos funcionan como un **orquestador del comportamiento**, es decir, determinan **qué pasos se ejecutan, en qué orden y bajo qué estructura**, pero no cómo se ejecuta cada paso en detalle. Este patrón es muy utilizado porque garantiza que todas las subclases sigan el mismo flujo lógico, evitando errores de diseño y asegurando consistencia. Internamente, este método público puede invocar otros métodos utilizando `this.nombreMetodo()`, lo cual es clave porque `this` siempre hace referencia a la instancia concreta (la subclase). Gracias a esto, cuando una subclase sobrescribe un método mediante polimorfismo, el método público de la superclase ejecutará automáticamente la versión correcta, sin necesidad de conocer la implementación específica. En caso de que una subclase no implemente alguno de estos métodos obligatorios, la superclase puede definir versiones base que lancen errores, dejando claro que **ese método debe ser sobrescrito**. Este enfoque refuerza el uso correcto de la herencia y del polimorfismo, y es una base fundamental para patrones como **Template Method**.
console.log('\n--- Metodos publicos para que van a definir el comportamiento y flujo general de superclases abstractas. ---'); //* Indica el inicio de la demostración del flujo general controlado por una superclase abstracta.

class SistemaCafetera { //* Superclase abstracta que define la estructura general del sistema.
    constructor(nombre){ //* Constructor de la superclase que recibe datos comunes.
        if(new.target.name === SistemaCafetera){ //* Verifica si se intenta instanciar directamente la superclase.
            console.error('No se puede instanciar desde esta superclase.'); //* Impide la creación directa para mantener la abstracción.
        }else{
            this.nombre = nombre; //* Inicializa una propiedad compartida que será usada por las subclases.
        }
    } //* Cierre del constructor.

    seleccionarBebida(){ //* Método abstracto que define el primer paso del flujo.
        console.error('A este metodo debe de aplicarse polimorfismo, por ende si ves esto esta mal.'); //* Advierte que este método debe ser sobrescrito.
    } //* Cierre del método seleccionarBebida.

    prepararBebida(){ //* Método abstracto que define el segundo paso del flujo.
        console.error('A este metodo debe de aplicarse polimorfismo, por ende si ves esto esta mal.'); //* Refuerza la obligación de sobrescribirlo.
    } //* Cierre del método prepararBebida.

    servirBebida(){ //* Método abstracto que define el último paso del flujo.
        console.error('A este metodo debe de aplicarse polimorfismo, por ende si ves esto esta mal.'); //* Indica un uso incorrecto si no se sobrescribe.
    } //* Cierre del método servirBebida.

    hacerCafe(){ //* Método público concreto que controla el flujo general del sistema.
        this.seleccionarBebida(); //* Ejecuta el primer paso usando la implementación de la subclase.
        this.prepararBebida();   //* Ejecuta el segundo paso respetando el orden definido.
        this.servirBebida();     //* Ejecuta el último paso cerrando el proceso.
    } //* Cierre del método hacerCafe.
} //* Cierre de la clase SistemaCafetera.

class Cafetera extends SistemaCafetera{ //* Subclase concreta que implementa el comportamiento real.
    constructor(nombre){ //* Constructor de la subclase.
        super(nombre); //* Llama al constructor de la superclase para inicializar propiedades heredadas.
    } //* Cierre del constructor.

    seleccionarBebida(){ //* Implementación concreta del método abstracto.
        console.log(`Has seleccionado el cafe tipo ${this.nombre}.`); //* Define cómo se selecciona la bebida.
    } //* Cierre del método seleccionarBebida.

    prepararBebida(){ //* Implementación concreta del proceso de preparación.
        console.log(`Preparando el cafe.`); //* Simula la preparación del café.
    } //* Cierre del método prepararBebida.

    servirBebida(){ //* Implementación concreta del proceso de servido.
        console.log(`Sirviendo el cafe.`); //* Simula la entrega final de la bebida.
    } //* Cierre del método servirBebida.
} //* Cierre de la clase Cafetera.

let solicitudCafe1 = new Cafetera('Cappuccino'); //* Se crea una instancia válida desde una subclase concreta.
solicitudCafe1.hacerCafe(); //* Ejecuta el flujo completo definido por la superclase abstracta.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ~Static.
// ~El modificador `static` se utiliza para **declarar propiedades y métodos que pertenecen directamente a la clase** y no a las instancias. Esto significa que **podemos acceder a estos elementos sin necesidad de crear un objeto de la clase**, lo que resulta útil cuando queremos manejar datos o funcionalidades **comunes a toda la clase** y que no dependen del estado de un objeto individual. Por ejemplo, se pueden usar métodos estáticos para **funciones utilitarias** como sumar números o convertir unidades, para **contadores compartidos** que lleven la cuenta de cuántos objetos de una clase se han creado, o para **constantes de clase** como valores de configuración que deben ser iguales para todos los objetos. Para definir un método o propiedad estática, se utiliza la palabra reservada `static` antes del nombre de la propiedad o método dentro de la clase. A diferencia de las propiedades y métodos normales, **los elementos estáticos no se acceden mediante instancias**, sino directamente a través del nombre de la clase, por ejemplo: `Clase.metodoEstatico()` o `Clase.propiedadEstatica`. Esto permite tener funciones y valores **globales a la clase** sin depender de ningún objeto específico, y es útil cuando queremos centralizar lógica o datos que deben ser iguales para todos los objetos.
console.log('\n=========== Static ==========='); // *Indica el inicio de la sección dedicada al concepto de static.
class DatosEstaticos { // *Se declara la clase `DatosEstaticos`.
    static datoEstatico = 10; // *Propiedad estática que pertenece a la clase, accesible como `DatosEstaticos.datoEstatico`.

    static suma(a, b) { // *Método estático que realiza una operación común sin depender de una instancia.
        return a + b; // *Retorna la suma de los parámetros recibidos.
    } // *Cierre del método `suma`.
} // *Cierre de la clase `DatosEstaticos`.

console.log(DatosEstaticos.suma(3, 5)); // *Se llama al método estático directamente desde la clase y se imprime el resultado (8).
console.log(DatosEstaticos.datoEstatico); // *Se accede a la propiedad estática directamente desde la clase (10).
