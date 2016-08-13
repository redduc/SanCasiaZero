namespace sczEcs
{
    export class Entity
    {
        private id: number;
        private components:{ [id: number]: IComponent };

        constructor(id: number)
        {
            this.id = id;
            this.components = new Array();
        }
        addComponent(component: IComponent): void
        {
            this.components[component.getId()] = component;
        }
        removeComponent(id: number): void
        {
            delete this.components[id];
        }
        getComponent(id: number): IComponent
        {
            return this.components[id];
        }
        getComponentsByType<TComponent extends IComponent>(): IComponent[]
        {
            throw new Error("Not yet implemented! (due to generic type comparison");

            var result: IComponent[];
            for(var componentId in this.components)
            {
                var component = this.components[componentId];
                //if(component instanceof TComponent)
                //if(typeof(component) === TComponent)
                if(true)
                {
                    result.push(component);
                }
            }
            return result;
        }
        getComponents():IComponent[]
        {
            var result: IComponent[];
            for(var componentId in this.components)
            {
                result.push(this.components[componentId]);
            }
            return result;
        }
    }
}