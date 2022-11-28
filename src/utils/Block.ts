import { v4 as uuidv4 } from 'uuid';
import * as Handlebars from 'handlebars';
import EventBus from './EventBus';

type Props = {
  [key: string]: unknown | Block | Children,
  events?: ElementEvents,
}
type Children = Record<string, Block>
type ElementEvents = Record<string, () => void>

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null = null;
  private eventBus: () => EventBus;
  
  protected props: Props;
  protected children: Children;
  protected refs: Record<string, Block> = {};

  public static componentName?: string;
  public id = uuidv4();

  constructor(data = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getPropsAndChildren(data);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  public setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  protected render(): string {
    return '';
  }


  private getPropsAndChildren(data: Props ) {
    const children: Children = {};
    const props: Props = {};

    Object.entries(data).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }

      // if (value instanceof Block) {
      //   children[key] = value;
      // } else if (Array.isArray(value) && value.every((v) => (v instanceof Block))) {
      //   children[key] = value;
      // } else {
      //   props[key] = value;
      // }
    });

    return { props, children };
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

 private _init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    this.componentDidUpdate(oldProps, newProps)

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  protected componentDidMount() {
    return
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    return {oldProps, newProps}
  }


  private _render() {
    const templateString = this.render();
    const fragment = this.compile(templateString, { ...this.props });
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  protected compile(templateString: string, context: object) {
    const fragment = document.createElement('template');
    const template = Handlebars.compile(templateString);
    const htmlString = template({ ...context, children: this.children, refs: this.refs });

    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      if (!stub) {
        return;
      }

      const content = child.getContent();

      if(content) {
        stub.replaceWith(content);

        if (stub.childNodes.length) {
          content.append(...stub.childNodes);
        }
      }
    });

    return fragment.content;
  }

  public getContent(): HTMLElement | null {
    return this._element;
  }

  private _makePropsProxy(props: Props) { 
    return new Proxy(props, {
      get: (target: Record<string, unknown>, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        const oldProps = { ...target };

        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);

        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  protected events(): Record<string, object> | false {
    return false
  }

  private _addEvents() {
    const events = this.props.events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.addEventListener(event, listener);
    });
  }

  private _removeEvents() {
    const { events } = this.props;

    if (!events) {
      return;
    }
    
    Object.entries(events).forEach(([event, listener]) => {
      if(this._element) this._element.removeEventListener(event, listener);
    });
  }



}
