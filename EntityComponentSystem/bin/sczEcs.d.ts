declare namespace sczEcs {
    class Entity {
        private id;
        private components;
        constructor(id: number);
        getId(): number;
        addComponent(component: IComponent): void;
        getComponentsByType(type: string): IComponent[];
    }
}
declare namespace sczEcs {
    interface IComponent {
        getType(): string;
    }
}
declare namespace sczEcs {
    interface ISystem {
        registerEntity(entity: Entity): void;
        deregisterEntity(id: number): void;
        process(): void;
    }
}
declare namespace sczEcs {
    abstract class SystemBase implements ISystem {
        protected entities: Entity[];
        constructor();
        registerEntity(entity: sczEcs.Entity): void;
        deregisterEntity(id: number): void;
        process(): void;
        protected abstract processEntity(entity: Entity): any;
    }
}
