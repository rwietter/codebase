<h3 align="center"><a href="https://refactoring.guru/pt-br/design-patterns/singleton">Singleton</a></h3>

<br/>
<br/>

<strong>Descrição</strong>: <i>o Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.</i>

<hr/><br/>

<strong>Quando utilizar ?</strong><br/>
<i>1. Garantir que uma classe tenha apenas uma única instância: utilize o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.</i><br/>
<i>2. Fornece um ponto de acesso global para aquela instância: utilize o padrão Singleton quando você precisa de um controle mais estrito sobre as variáveis globais.</i><br/>

<hr/><br/>

<strong>Problemas</strong><br/>

<i>Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.</i><br/><br/>
<i>O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um.</i><br/><br/>
<i>O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.</i><br/><br/>
<i>Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. Já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagem, você terá que pensar em uma maneira criativa de simular o singleton. Ou apenas não escreva os testes. Ou não use o padrão Singleton.
