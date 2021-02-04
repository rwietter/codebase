import { ConcreteProduct2 } from './ConcreteProduct2';
import { Creator } from './FactoryMethod';
import { Product } from './IProduct';

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
