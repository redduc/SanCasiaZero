/// <reference path="../../EntityComponentSystem/bin/sczEcs" />

namespace sczGame {
    import Entity = sczEcs.Entity;
    export class TranslateComponent implements sczEcs.IComponent {
        public static _getType(): string
        {
            return "TranslateComponent";
        }

        public getType(): string
        {
            return TranslateComponent._getType();
        }

        public x: number;
        public y: number;
        public angel: number;
        public rotationPoint = { x: 0, y: 0};

        public constructor(x: number, y: number, angel: number)
        {
            this.x = x;
            this.y = y;
            this.angel = angel;

        }
    }
}