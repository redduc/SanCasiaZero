/// <reference path="../../EntityComponentSystem/bin/sczEcs" />

namespace sczGame {
    import Entity = sczEcs.Entity;
    import PolygonPoint2D = Polygons.PolygonPoint2D;

    export class RenderSystem extends sczEcs.SystemBase {
        private ctx;

        constructor(canvasId: string) {
            super();
            var canvas = <HTMLCanvasElement>document.getElementById(canvasId);
            this.ctx = canvas.getContext('2d');
        }

        protected processEntity(entity: Entity) {
            var renderComponent: RenderComponent =
                <RenderComponent>entity.getComponentsByType(RenderComponent._getType())[0];

            var translateComponent: TranslateComponent =
                <TranslateComponent>entity.getComponentsByType(TranslateComponent._getType())[0];

            if(translateComponent == null)
            {
                translateComponent = new TranslateComponent(0,0,0);
            }

            renderComponent.polygon.transfer(
                translateComponent.x,
                translateComponent.y,
                translateComponent.angel,
                new PolygonPoint2D(
                    translateComponent.rotationPoint.x,
                    translateComponent.rotationPoint.y)).draw(this.ctx);
        }

    }
}