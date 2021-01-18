# Trailling bang refere-se que uma função ou macro em que os casos de falha lançam uma exceção.

# Muitas funções vêm em pares, como File.read/1e File.read!/1. File.read/1retornará uma tupla de sucesso ou falha, enquanto File.read!/1retornará um valor simples ou levantará uma exceção:

import IO

# A versão sem !é a preferida quando você deseja lidar com resultados diferentes usando correspondência de padrões:

# No entanto, se você espera que o resultado sempre seja bem-sucedido (por exemplo, se você espera que o arquivo sempre exista), a variação de impacto pode ser mais conveniente e irá gerar uma mensagem de erro mais útil (do que uma correspondência de padrão com falha) em caso de falha .

defmodule TrailingBang do
  def read_file do
    File.read("file.txt")
  end

  def read_no_such_file do
    File.read("no_such_file.txt")
  end

  def read_file_bang do
    File.read!("file.txt")
  end

  def read_no_such_file_bang do
    File.read!("no_such_file.txt")
  end
end

IO.inspect TrailingBang.read_file() # -> {:ok, "hi\n"}
IO.inspect TrailingBang.read_no_such_file() # -> {:error, :enoent}
IO.inspect TrailingBang.read_file_bang() # -> "hi\n"
IO.inspect TrailingBang.read_no_such_file_bang() # -> ** (File.Error) could not read file "frile.txt": no such file or directory
