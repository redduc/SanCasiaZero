namespace sczEcs
{
    export interface ISystem<TComponent extends IComponent>
    {
        addComponent(component: TComponent):void;
        removeComponent(id: number): void;
        process(): void;
    }
}