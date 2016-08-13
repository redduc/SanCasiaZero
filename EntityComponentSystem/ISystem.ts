namespace sczEcs
{
    export interface ISystem
    {
        registerEntity(entity: Entity):void;
        deregisterEntity(id: number): void;
        process(): void;
    }
}