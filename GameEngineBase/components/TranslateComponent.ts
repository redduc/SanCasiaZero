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

        public constructor(x: number, y: number)
        {
            this.x = x;
            this.y = y;
        }
    }
}