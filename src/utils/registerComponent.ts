import {Block} from './Block';
import * as Handlebars from 'handlebars';

export function registerComponent(name: string, Component: typeof Block) {
  Handlebars.registerHelper(name, function ( { hash, data, fn }: Handlebars.HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    if (!data.root.refs) {
      data.root.refs = {};
    }

    const component = new Component(hash);

    data.root.children[component.id] = component

    if (hash.ref) {
      data.root.refs[hash.ref] = component;
    }


    const contents: string = fn ? fn(this) : '';

    return `<div data-id="${component.id}">${contents}</div>`;
  })
}