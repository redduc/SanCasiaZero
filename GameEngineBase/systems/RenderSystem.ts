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
            var renderComponent: RenderComponent =
                <RenderComponent>entity.getComponentsByType(RenderComponent._getType())[0];

            var translateComponent: TranslateComponent =
                <TranslateComponent>entity.getComponentsByType(TranslateComponent._getType())[0];

            if(translateComponent == null)
            {
                translateComponent = new TranslateComponent(0,0);
            }

            this.ctx.fillStyle = renderComponent.polygon.color;
            this.ctx.beginPath();
            this.ctx.moveTo(
                renderComponent.polygon.points[0].x + translateComponent.x,
                renderComponent.polygon.points[0].y + translateComponent.y);
            for (var index = 0; index < renderComponent.polygon.points.length; index++) {
                this.ctx.lineTo(
                    renderComponent.polygon.points[index].x + translateComponent.x,
                    renderComponent.polygon.points[index].y + translateComponent.y);
            }
            this.ctx.closePath();
            this.ctx.fill();
        }

    }
}