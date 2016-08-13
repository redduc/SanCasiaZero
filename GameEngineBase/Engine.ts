///<reference path="systems/RenderSystem.ts"/>
/// <reference path="../Libs/Polygons/bin/polygons" />


namespace sczGame {
    import Polygon2D = Polygons.Polygon2D;
    import PolygonPoint2D = Polygons.PolygonPoint2D;

    export class Engine {
        // systems
        private renderSystem: RenderSystem;

        constructor() {
            this.renderSystem = new RenderSystem("gameCanvas");

            var renderComponent = new RenderComponent(1);
            var polygon: Polygon2D = new Polygon2D("#000");
            polygon.addPoint(new PolygonPoint2D(0, 0));
            polygon.addPoint(new PolygonPoint2D(60, 120));
            polygon.addPoint(new PolygonPoint2D(120, 60));
            renderComponent.polygon = polygon;

            this.renderSystem.addComponent(renderComponent);

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