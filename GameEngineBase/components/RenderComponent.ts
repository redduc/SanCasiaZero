/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
/// <reference path="../../Libs/Polygons/bin/polygons" />

namespace sczGame {
    export class RenderComponent implements sczEcs.IComponent {
        private id: number;

        constructor(id: number) {
            this.id = id;
        }

        getId(): number {
            return this.id;
        }

        public polygon: Polygons.Polygon2D;
    }
}