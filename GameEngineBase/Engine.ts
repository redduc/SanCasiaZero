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
        public velocitySystem: VelocitySystem;

        public constructor()
        {
            // initiate systems
            this.renderSystem = new RenderSystem("gameCanvas");
            this.velocitySystem = new VelocitySystem();
        }

        private startGameLoop(): void
        {
            setInterval(() => {
                //compute
                this.velocitySystem.process();

                // render
                this.renderSystem.process();
            }, 1000/30);
        }
    }
}