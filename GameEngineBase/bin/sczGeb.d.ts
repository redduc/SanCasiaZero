declare namespace sczGame {
    class RenderSystem extends sczEcs.SystemBase<RenderComponent> {
        private ctx;
        constructor(canvasId: string);
        process(): void;
        processComponent(component: RenderComponent): void;
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
        private id;
        constructor(id: number);
        getId(): number;
        polygon: Polygons.Polygon2D;
    }
}
