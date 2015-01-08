class TasksController < ApplicationController

  def index
    task = project.task.all
    respond_with project, task
  end

  def create
    task = project.task.create(task_params)
    respond_with project, task
  end

  def show
    task = project.task.find(params[:id])
    respond_with project, task
  end

  private
  def task_params
    params.require(:task).permit(:name, :status, :rang)
  end
end
