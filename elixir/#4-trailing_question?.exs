import IO

defmodule TrailingQuestion do
  def fun(str) do
    String.ends_with?(str, ["", "to"])
  end
end

puts TrailingQuestion.fun("gato")

# As funções que retornam um booleano são nomeadas com um ponto de interrogação à direita.
# Exemplos: Keyword.keyword?/1, Mix.debug?/0,String.contains?/2
# No entanto, as funções que retornam booleanos e são válidas em guardas seguem outra convenção, descrita a seguir.
