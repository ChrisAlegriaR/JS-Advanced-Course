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
console.log('=========== Clases, objetos, constructores e instancias. ==========='); //* Indica el inicio de la sección de clases, objetos, constructores e instancias.
// &Clases.
// &En JavaScript, las clases son una **abstracción** que nos permite representar entidades del mundo real o conceptos lógicos mediante código. Una clase funciona como una **plantilla o molde**, a partir de la cual se pueden crear múltiples objetos. Esta plantilla define qué propiedades (atributos) y comportamientos (métodos) tendrán los objetos creados a partir de ella. La ventaja principal de usar clases es que permiten **organizar el código**, **reutilizar lógica** y **modelar datos de forma estructurada**. Por ejemplo, si definimos una clase llamada `Perro`, estamos estableciendo las características generales que cualquier perro tendrá, como nombre y color. Sin embargo, cada perro específico podrá tener valores distintos para esas características, sin necesidad de redefinir la estructura cada vez.
// ?Sintaxis de una clase: Para definir una clase en JavaScript se utiliza la palabra reservada `class`, seguida del nombre de la clase (por convención en PascalCase). A continuación, se abren llaves `{}` donde se declara el cuerpo de la clase. Dentro de este cuerpo se pueden definir métodos, incluyendo el constructor, así como otras funciones que describan el comportamiento del objeto. La clase por sí sola **no crea objetos**, solo define cómo deben ser.
class NombreClase { //* Se declara una clase utilizando la palabra reservada `class` y el nombre de la clase.
} //* Cierre de la clase.

// &Constructor.
// &El constructor es un **método especial** que pertenece a una clase y se ejecuta automáticamente cada vez que se crea una nueva instancia con la palabra clave `new`. Su propósito principal es **inicializar el objeto**, es decir, asignar valores iniciales a sus propiedades. El constructor puede recibir parámetros, los cuales representan la información específica que se le pasará a cada objeto al momento de ser creado. Dentro del constructor se utiliza la palabra clave `this`, que hace referencia a la instancia actual del objeto, permitiendo diferenciar los atributos de cada instancia. Si una clase no define un constructor explícitamente, JavaScript crea uno vacío por defecto.
class ClassTest { //* Se define la clase `ClassTest`.
    constructor(argumento1, argumento2) { //* Se define el constructor con los parámetros que recibirá al crear una instancia.
        this.caracteristica1 = argumento1; //* Se crea la propiedad `caracteristica1` en la instancia y se le asigna el valor recibido.
        this.caracteristica2 = argumento2; //* Se crea la propiedad `caracteristica2` en la instancia y se le asigna el valor recibido.
    } //* Cierre del constructor.
} //* Cierre de la clase.

// &Instancia.
// &Una instancia es un **objeto concreto** creado a partir de una clase. Mientras que la clase define la estructura general, la instancia representa un elemento real con valores específicos. Cada instancia es independiente de las demás, aunque todas compartan la misma estructura definida por la clase. Las instancias se crean utilizando la palabra clave `new`, seguida del nombre de la clase y los argumentos requeridos por el constructor. Este enfoque permite crear múltiples objetos similares sin duplicar código.
console.log('--- Instancia. ---'); //* Imprime un mensaje indicando que se demostrará el uso de una instancia en una clase.
class Perro { //* Se declara la clase `Perro`, que servirá como plantilla para crear perros.
    constructor(nombreRecibido, colorRecibido) { //* El constructor recibe los valores específicos de cada perro.
        this.nombre = nombreRecibido; //* Se asigna el nombre recibido a la propiedad `nombre` del objeto.
        this.color = colorRecibido; //* Se asigna el color recibido a la propiedad `color` del objeto.
    } //* Cierre del constructor.
} //* Cierre de la clase `Perro`.

let perro1 = new Perro('Firulais', 'Café'); //* Se crea una instancia de la clase `Perro`, pasando los valores iniciales al constructor.
console.log(perro1); //* Se imprime el objeto en consola, mostrando sus propiedades y valores.

// &Extraer valores de un objeto creado a partir de una clase.
// &Para acceder a los valores de las propiedades de un objeto creado a partir de una clase, se utiliza la notación de punto (`.`) seguida del nombre de la propiedad. Esto permite obtener o modificar los valores almacenados en el objeto. Por ejemplo, si tenemos un objeto `perro1` con una propiedad `nombre`, podemos acceder a su valor utilizando `perro1.nopmbre`.
console.log('\n--- Extraer valores de un objeto creado a partir de una clase. ---'); //* Imprime un mensaje indicando que se demostrará la extracción de valores de objetos creados a partir de clase.
console.log(perro1.nombre); // *Se accede a la propiedad `nombre` del objeto `perro1` y se imprime su valor en consola.

// &Declarar nuevo valor en un objeto creado a partir de una clase.
// &Para modificar o asignar un nuevo valor a una propiedad de un objeto creado a partir de una clase, se utiliza la misma notación de punto (`.`) seguida del nombre de la propiedad, y se le asigna el nuevo valor utilizando el operador de asignación (`=`). Esto permite actualizar el estado del objeto según sea necesario.
console.log('\n--- Declarar nuevo valor en un objeto creado a partir de una clase. ---'); //* Imprime un mensaje indicando que se demostrará la declararación de un nuevo valor en un objeto creado a partir de una clase.
perro1.nombre = 'Max';
console.log(perro1.nombre) // *Se modifica la propiedad `nombre` del objeto `perro1` y se imprime su nuevo valor en consola.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////