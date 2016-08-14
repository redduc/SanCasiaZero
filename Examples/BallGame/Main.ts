/// <reference path="../../GameEngineBase/bin/sczGeb" />
/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
/// <reference path="../../Libs/Polygons/bin/polygons" />


namespace sczBallGame
{
    import Engine = sczGame.Engine;
    import TranslateComponent = sczGame.TranslateComponent;
    import RenderComponent = sczGame.RenderComponent;
    import Entity = sczEcs.Entity;
    import PolygonPoint2D = Polygons.PolygonPoint2D;
    import Polygon2D = Polygons.Polygon2D;
    import VelocityComponent = sczGame.VelocityComponent;
    import PhysicsComponent = sczGame.PhysicsComponent;
    import BounceCollisionHandle = sczGame.BounceCollisionHandle;
    export class Main
    {
        public constructor()
        {
            var engine = new Engine();

            // background
            var bg = new Entity(0);
            var bgRenderC = new RenderComponent();
            var bgPolygon: Polygon2D = new Polygon2D("#F00");
            bgPolygon.addPoint(new PolygonPoint2D(0, 0));
            bgPolygon.addPoint(new PolygonPoint2D(300, 0));
            bgPolygon.addPoint(new PolygonPoint2D(300, 150));
            bgPolygon.addPoint(new PolygonPoint2D(0, 150));
            bgRenderC.polygon = bgPolygon;

            bg.addComponent(bgRenderC);

            engine.renderSystem.registerEntity(bg);

            // rotating arrow
            var arrow: Entity = new Entity(1);
            var renderComponent = new RenderComponent();
            var polygon: Polygon2D = new Polygon2D("#000");
            polygon.addPoint(new PolygonPoint2D(0, 0));
            polygon.addPoint(new PolygonPoint2D(60, 120));
            polygon.addPoint(new PolygonPoint2D(120, 60));
            renderComponent.polygon = polygon;
            var physicsComponent = new PhysicsComponent(polygon, 0);
            physicsComponent
                .collisionHandlers.push(new BounceCollisionHandle());

            arrow.addComponent(new TranslateComponent(150,75,180));
            arrow.addComponent(new VelocityComponent(0,10,10));
            arrow.addComponent(renderComponent);
            arrow.addComponent(physicsComponent);

            engine.renderSystem.registerEntity(arrow);
            engine.velocitySystem.registerEntity(arrow);
            engine.physicsSystem.registerEntity(arrow);

            engine.startGameLoop();
        }
    }
}