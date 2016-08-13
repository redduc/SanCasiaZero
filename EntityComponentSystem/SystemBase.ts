namespace sczEcs {
    export abstract class SystemBase<TComponent extends IComponent> implements ISystem<TComponent> {
        protected components: { [id: number]: TComponent };

        constructor()
        {
            this.components = new Array();
        }

        addComponent(component: TComponent): void
        {
            this.components[component.getId()] = component;
        }

        removeComponent(id: number): void
        {
            delete this.components[id]
        }

        abstract process(): void;

        getComponents():TComponent[]
        {
            var result: TComponent[] = new Array();
            for(var componentId in this.components)
            {
                result.push(this.components[componentId]);
            }
            return result;
        }
    }
}