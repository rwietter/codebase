import IO


puts "Hello world from Elixir"

puts Kernel.div(10, 2)

add = fn a, b -> a + b end

puts "add fn is: #{add.(1,2)}"

_x = 41
(fn -> _x = 0 end).()
puts "x its: #{_x}"

puts "length: #{length [1, 2, true, 3]}"

puts [1, 2, 3]++[4, 5, 6]
puts [1, 2, 3]--[3, 5, 6]

tuple = {:country, "Netherlands"}
puts elem(tuple, 1)


defmodule Multiply do
  def multiply(a, b) do
    a * b
  end
end

puts Multiply.multiply(2, 2)


puts x = 1 # => 1
puts 1 = x # => 1

movie = %{"Avengers" => "Infinity War"}
puts Map.fetch!(movie, "Avengers")
Map.replace!(movie, "Avengers", "End Game")

# ───────────────────────────────────────────
# Call By Pattern
# ───────────────────────────────────────────
defmodule Greeting do
  def hello [name: message] do
    "Hey, #{message}"
  end
  def hello [{:lastname, message}] do
    "Hey, Mr. #{message}"
  end
end

puts Greeting.hello name: "Owen"
puts Greeting.hello lastname: "Grady"

# ───────────────────────────────────────────
# Looking at Asynchronous Exeptions
# ───────────────────────────────────────────
# .....
# .....

# ───────────────────────────────────────────
# Actors => process controll: block, received
#  messages, send message to other actors,
#  resize, link process and kill process
# ───────────────────────────────────────────
puts "\n───── Stack ─────\n"
defmodule Stack do
  use GenServer
  def handle_call(:pop, _from, [head | tail]) do
    {:reply, head, tail}
  end
  def handle_cast({:push, item}, state) do
    {:noreply, [item] ++ state}
  end
end

{:ok, pid} = GenServer.start_link(Stack, [:hello])

GenServer.cast(pid, {:push, "Hello"})
GenServer.cast(pid, {:push, "World"})

# [h | _rest] = Process.list |> Enum.reverse
# Process.exit h, :kill

# ───────────────────────────────────────────
# Supervisor: if you kill the process, the
#  process is started again
# ───────────────────────────────────────────
# .....
# .....
