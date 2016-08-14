namespace sczGame
{
    import Entity = sczEcs.Entity;
    export interface ICollisionHandler
    {
        process(self: Entity, other:Entity): void;
    }
}