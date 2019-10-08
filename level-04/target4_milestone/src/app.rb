require "sinatra"


class Todo
  def get_todos
    @@id ||= 0
    @@todos ||= {}
  end

  def add_todo(todo, date)
    @@id += 1
    get_todos()[@@id] = [todo, date]
  end

  def get_todo(id)
    get_todos()[id]
  end

  def update_todo(id, title)
    get_todos()[id][0] = title
  end

  def delete_todo(id)
    get_todos().delete(id)
  end
end


t_obj = Todo.new

get "/todos" do
  @todos = t_obj.get_todos()
  erb :todos
end

get "/todos/:id" do
  @id = params[:id].to_i
  @todo = t_obj.get_todo(@id)
  erb :todo
end

post "/todos" do
  if params[:title].strip != ""
    t_obj.add_todo(params[:title], params[:date])
  end
  redirect "/todos"
end

put "/todos/:id" do
  @id = params[:id].to_i
  t_obj.update_todo(@id, params[:title])
  redirect "/todos"
end

delete "/todos/:id" do
  @id = params[:id].to_i
  t_obj.delete_todo(@id)
  redirect "/todos"
end
