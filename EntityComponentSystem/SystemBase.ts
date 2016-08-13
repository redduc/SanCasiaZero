namespace sczEcs {
    export abstract class SystemBase implements ISystem {
        protected entities: Entity[];

        constructor()
        {
            this.entities = new Array();
        }

        registerEntity(entity: sczEcs.Entity): void {
            this.entities.push(entity);
        }

        deregisterEntity(id: number): void {
            for(var index = 0; index < this.entities.length; index++)
            {
                var entity: Entity = this.entities[index];
                if(entity.getId() == id)
                {
                    delete this.entities[index];
                    return;
                }
            }
        }

        process(): void
        {
            for(var index = 0; index < this.entities.length; index++)
            {
                this.processEntity(this.entities[index]);
            }
        }

        protected abstract processEntity(entity: Entity);
    }
}