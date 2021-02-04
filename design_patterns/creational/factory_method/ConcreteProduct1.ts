import { Product } from './IProduct';

/**
 * Os Produtos Concretos fornecem várias implementações da interface do Produto.
 */
export class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}
