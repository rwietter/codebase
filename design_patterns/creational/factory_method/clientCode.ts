import { Creator } from './FactoryMethod';

/**
 * O código do cliente funciona com uma instância de um criador concreto, embora por meio de
 * sua interface base. Contanto que o cliente continue trabalhando com o criador via
 * a interface base, você pode passar para qualquer subclasse do criador.
 */
export function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
}
