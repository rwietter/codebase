import IO
import Integer

defmodule Codewars do
  def even_or_odd(number) do
    if isEven(number) do
      "Even"
    else
      "Odd"
    end
  end

  def isEven(number) do
    is_even(number)
  end
end

puts Codewars.even_or_odd(2)
puts Codewars.even_or_odd(3)
puts Codewars.even_or_odd(5)

# As verificações de tipo e outras verificações booleanas permitidas nas cláusulas de guarda são nomeadas com um is_prefixo.
# Exemplos: Integer.is_even/1,Kernel.is_list/1

# Essas funções e macros seguem a convenção de Erlang de um is_prefixo, em vez de um ponto de interrogação final, precisamente para indicar que são permitidas em cláusulas de guarda.

# Observe que as verificações de tipo que não são válidas nas cláusulas de proteção não seguem esta convenção. Por exemplo: Keyword.keyword?/1.
