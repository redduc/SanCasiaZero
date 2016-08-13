declare namespace sczGame {
    import Entity = sczEcs.Entity;
    class RenderSystem extends sczEcs.SystemBase {
        private ctx;
        constructor(canvasId: string);
        protected processEntity(entity: Entity): void;
    }
}
declare namespace sczGame {
    class Engine {
        private renderSystem;
        constructor();
        gameLoop(): void;
    }
}
declare namespace sczGame {
    class RenderComponent implements sczEcs.IComponent {
        static _getType(): string;
        getType(): string;
        polygon: Polygons.Polygon2D;
        constructor();
    }
}
declare namespace sczGame {
    class TranslateComponent implements sczEcs.IComponent {
        static _getType(): string;
        getType(): string;
        x: number;
        y: number;
        angel: number;
        rotationPoint: {
            x: number;
            y: number;
        };
        constructor(x: number, y: number, angel: number);
    }
}
