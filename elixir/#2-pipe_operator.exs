import IO

# ───────────────────────────────────────────
# Pipe
# ───────────────────────────────────────────
defmodule Sort do
  def sorting(values) do
    values
    |> String.split("", trim: true)
    |> Enum.map(fn el -> String.to_integer(el) end)
    |> Enum.sort()
    |> Enum.join()
  end
end

head = Sort.sorting("231") # -> 123
puts head
