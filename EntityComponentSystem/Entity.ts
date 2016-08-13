namespace sczEcs
{
    export class Entity
    {
        private id: number;
        private components: IComponent[];

        public constructor(id: number)
        {
            this.id = id;
            this.components = new Array();
        }

        public getId(): number
        {
            return this.id;
        }

        public addComponent(component: IComponent): void
        {
            this.components.push(component)
        }

        public getComponentsByType(type: string): IComponent[]
        {
            var result: IComponent[] = new Array();
            for(var index = 0; index < this.components.length; index++)
            {
                var component: IComponent = this.components[index];
                if(component.getType() === type)
                {
                    result.push(component);
                }
            }
            return result;
        }
    }
}