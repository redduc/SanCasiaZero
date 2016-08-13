///<reference path="systems/RenderSystem.ts"/>
/// <reference path="../Libs/Polygons/bin/polygons" />


namespace sczGame {
    import Polygon2D = Polygons.Polygon2D;
    import PolygonPoint2D = Polygons.PolygonPoint2D;
    import Entity = sczEcs.Entity;

    export class Engine {
        // systems
        private renderSystem: RenderSystem;

        constructor() {
            this.renderSystem = new RenderSystem("gameCanvas");

            var entity: Entity = new Entity(0);
            var renderComponent = new RenderComponent();
            var polygon: Polygon2D = new Polygon2D("#000");
            polygon.addPoint(new PolygonPoint2D(0, 0));
            polygon.addPoint(new PolygonPoint2D(60, 120));
            polygon.addPoint(new PolygonPoint2D(120, 60));
            renderComponent.polygon = polygon;

            entity.addComponent(new TranslateComponent(100,10));
            entity.addComponent(renderComponent);

            this.renderSystem.registerEntity(entity);

             // start game
             this.gameLoop();

        }

        gameLoop(): void {
            //compute

            // render
            this.renderSystem.process();

        }
    }
}