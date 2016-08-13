///<reference path="systems/RenderSystem.ts"/>
/// <reference path="../Libs/Polygons/bin/polygons" />


namespace sczGame
{
    import Polygon2D = Polygons.Polygon2D;
    import PolygonPoint2D = Polygons.PolygonPoint2D;
    import Entity = sczEcs.Entity;

    export class Engine
    {
        // systems
        public renderSystem: RenderSystem;

        public constructor()
        {
            // initiate systems
            this.renderSystem = new RenderSystem("gameCanvas");
        }

        private startGameLoop(): void
        {
            setInterval(() => {
                //compute

                // render
                this.renderSystem.process();
            }, 1000/30);
        }
    }
}