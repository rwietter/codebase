import { ConcreteProduct1 } from './ConcreteProduct1';
import { Creator } from './FactoryMethod';
import { Product } from './IProduct';

/**
 * Os criadores de concreto substituem o factory método para alterar o tipo de produto resultante.
 */
export class ConcreteCreator1 extends Creator {
  /**
   * Observe que a assinatura do método ainda usa o produto abstrato
   * tipo, mesmo que o produto de concreto seja realmente devolvido do
   * método. Desta forma, o Creator pode permanecer independente do produto concreto
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
