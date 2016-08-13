declare namespace sczEcs {
    class Entity {
        private id;
        private components;
        constructor(id: number);
        addComponent(component: IComponent): void;
        removeComponent(id: number): void;
        getComponent(id: number): IComponent;
        getComponentsByType<TComponent extends IComponent>(): IComponent[];
        getComponents(): IComponent[];
    }
}
declare namespace sczEcs {
    interface IComponent {
        getId(): number;
    }
}
declare namespace sczEcs {
    interface ISystem<TComponent extends IComponent> {
        addComponent(component: TComponent): void;
        removeComponent(id: number): void;
        process(): void;
    }
}
declare namespace sczEcs {
    abstract class SystemBase<TComponent extends IComponent> implements ISystem<TComponent> {
        protected components: {
            [id: number]: TComponent;
        };
        constructor();
        addComponent(component: TComponent): void;
        removeComponent(id: number): void;
        abstract process(): void;
        getComponents(): TComponent[];
    }
}
