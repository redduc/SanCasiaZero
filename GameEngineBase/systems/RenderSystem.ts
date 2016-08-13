/// <reference path="../../EntityComponentSystem/bin/sczEcs" />

namespace sczGame {
    import Entity = sczEcs.Entity;

    export class RenderSystem extends sczEcs.SystemBase {
        private ctx;

        constructor(canvasId: string) {
            super();
            var canvas = <HTMLCanvasElement>document.getElementById(canvasId);
            this.ctx = canvas.getContext('2d');
        }

        protected processEntity(entity: Entity) {
            var component: RenderComponent = <RenderComponent>entity.getComponentsByType(RenderComponent._getType())[0];

            this.ctx.fillStyle = component.polygon.color;
            this.ctx.beginPath();
            this.ctx.moveTo(component.polygon.points[0].x, component.polygon.points[0].y);
            for (var index = 0; index < component.polygon.points.length; index++) {
                this.ctx.lineTo(component.polygon.points[index].x, component.polygon.points[index].y);
            }
            this.ctx.closePath();
            this.ctx.fill();
        }

    }
}