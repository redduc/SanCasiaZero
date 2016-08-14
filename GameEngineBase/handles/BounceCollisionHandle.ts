namespace sczGame
{
    import Entity = sczEcs.Entity;
    export class BounceCollisionHandle
    {
        public constructor()
        {}

        public process(self: Entity, other: Entity): void
        {
            var selfVelocity = <VelocityComponent>self.getComponentsByType(VelocityComponent._getType())[0];

            selfVelocity.x *= -1;
            selfVelocity.y *= -1;
        }
    }
}