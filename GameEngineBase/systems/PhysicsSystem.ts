namespace sczGame
{
    import Entity = sczEcs.Entity;
    import PolygonPoint2D = Polygons.PolygonPoint2D;

    export class PhysicsSystem extends sczEcs.SystemBase
    {
        constructor()
        {
            super();
        }

        protected processEntity(entity: Entity)
        {
            // POC
            var translate = <TranslateComponent>
                entity.getComponentsByType(TranslateComponent._getType())[0];
            var physics = <PhysicsComponent>
                entity.getComponentsByType(PhysicsComponent._getType())[0];

            if(translate.x < 0
                || translate.x > 150
                || translate.y < 0
                || translate.y > 300)
            {
                // "collision"
                for(var index in physics.collisionHandlers)
                {
                    physics.collisionHandlers[index].process(entity, null);
                }
            }
        }

    }
}