class TodolistController < ApplicationController
  def index
    todos = Todolist.all
    raise StandardException if todos.nil?

    render json: todos
  end

  def create
    permitted = [:title, :done]
    todo_attribue = params.permit(permitted)
    todos = Todolist.new(todo_attribue)

    render json: todo_attribue if todos.save
  end

  def update
  end

  def destroy
    todo_id = params[:todo_id]
    todo = Todolist.find(todo_id)
    render json: todo if student.destroy
  end
end
