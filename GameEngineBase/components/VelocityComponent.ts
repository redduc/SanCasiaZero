/// <reference path="../../EntityComponentSystem/bin/sczEcs" />

namespace sczGame {
    import Entity = sczEcs.Entity;
    export class VelocityComponent implements sczEcs.IComponent {
        public static _getType(): string
        {
            return "VelocityComponent";
        }

        public getType(): string
        {
            return VelocityComponent._getType();
        }

        public x: number;
        public y: number;
        public spin: number;

        public constructor(x: number, y: number, spin: number)
        {
            this.x = x;
            this.y = y;
            this.spin = spin;
        }
    }
}