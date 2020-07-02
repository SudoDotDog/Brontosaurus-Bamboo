/**
 * @author WMXPY
 * @namespace Declare
 * @description Decorator
 */

export type QueryDecoratorElement = {

    readonly name: string;
};

export type QueryDecoratorResponse = {

    readonly decorators: QueryDecoratorElement[];
};

export type QueryDecoratorRequest = {

    readonly activation?: 'active' | 'inactive';
};
