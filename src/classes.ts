// As in every modern programming language typescript has classes as well



class Geometry2D {
    // access modifiers
    public id: number = 0;
    protected name:string = "";
    private _isMovable: boolean = true;
    constructor( public area:number, public x: number, public y: number) {
     }

     set isMovable(value:boolean) {
         this._isMovable = value
        //  this.isMovable = true; <-- avoid calling the setter this way because it will overflow the stack
     }

     get isMovable(): boolean {
         return this._isMovable;
     }
}


// Try to implement the interface Shape defined before. Define two classes that implement the 
// aformentioned interface. Let's begin with class 

abstract class Shape extends Geometry2D {
    
    constructor( public area:number, public x: number, public y: number) {
       super(area, x, y);
    }

    abstract draw(): void;

    /**
     * generateId
     */
    public generateId() {
        this.id = Math.random();    
    }
}


class Rectangle extends Shape {
    constructor( public area:number, public x: number, public y: number) {
        super(area, x,y);
        console.log("Rectangle");
        
    }

    draw() {
        // draw a rectangle
    }
}

class Triangle extends Shape {
    draw() {
        // draw a triangle
    }
}

// Interfaces
interface Position2D {
    x: number;
    y: number;
    distanceTo(pos: Position2D):number;
}

// Interfaces vs abstract classes
// Interfaces are more general and lightweight, and abstract classes are more special-purpose and feature-rich.

// Merging interfaces
interface Position2D { // <-- typescript won't throw any error, because it will merge the two interfaces
    isOrigin: boolean;
}

// Generic type parameters - can be scope to a whole class or only to a method
class Manipulator<T> {
     constructor (protected shape: T ) {}

     transform<U>(transformer: U) {
         // transform the shape
     }
}

class Trasformer<T extends Shape> {
    
}

