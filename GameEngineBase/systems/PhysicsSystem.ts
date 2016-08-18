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

            var rigidBody =
                physics.rigidBody.transfer(
                    translate.x,
                    translate.y,
                    translate.angel,
                    new PolygonPoint2D(
                        translate.rotationPoint.x,
                        translate.rotationPoint.y));

            for (var index in rigidBody.points)
            {
                var point = rigidBody.points[index];

                if (point.x < 0
                    || point.x > 300
                    || point.y < 0
                    || point.y > 150)
                {
                    // "collision"

                    for (var index in physics.collisionHandlers)
                    {
                        physics.collisionHandlers[index].process(entity, null);
                    }
                    return
                }
            }
        }
    }
}