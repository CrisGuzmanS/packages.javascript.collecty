class Entity<T> {
    private object: T | null;

    constructor(object: T | null) {
        this.object = object;

        return new Proxy(this, {
            get(target: any, property: PropertyKey) {

                // Propiedades propias de la clase
                if (property in target) {
                    return target[property];
                }

                // Propiedades del objeto interno (sin garantía de que existan)
                if (target.object && (target.object as any)[property] !== undefined) {
                    return (target.object as any)[property];
                }

                return null;
            }
        });
    }

    isEmpty(): boolean {
        if (this.object === null) return true;

        if (typeof this.object === "object") {
            return Object.keys(this.object as any).length === 0;
        }

        // Si el objeto no es null pero tampoco es un objeto,
        // entonces nunca se considera "vacío".
        return false;
    }

    toJSON(): T | null {
        return this.object;
    }

    toString(): string {
        return JSON.stringify(this.object);
    }
}

export { Entity };
