import { clientCode } from './clientCode';
import { ConcreteCreator1 } from './ConcreteCreator1';
import { ConcreteCreator2 } from './ConcreteCreator2';
import { Product } from './IProduct';

/**
  A classe Creator declara o método de fábrica que deve retornar um
  objeto de uma classe Product. As subclasses do Creator geralmente fornecem a
  implementação desse método.
*/
export abstract class Creator {
  /*
   * Observe que o Creator também pode fornecer alguma implementação padrão do
   * método de fábrica.
   */
  public abstract factoryMethod(): Product;

  /**
   * Observe também que, apesar do nome, a principal responsabilidade do Creator é
   * não criar produtos. Normalmente, contém alguma lógica de negócios central que
   * depende de objetos Produto, retornados pelo método de fábrica. Subclasses podem
   * alterar indiretamente essa lógica de negócios substituindo o método de fábrica
   * e devolvendo um tipo diferente de produto dele.
   */
  public someOperation(): string {
    // Chame o método Factory para criar um objeto Produto.
    const product = this.factoryMethod();
    // Agora, retorne e use o Product
    return `Creator: o mesmo código do Creator acabou de trabalhar com ${product.operation()}`;
  }
}

/**
 * O aplicativo escolhe o tipo de criador, dependendo da configuração ou ambiente.
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());

console.log("\nApp: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());
