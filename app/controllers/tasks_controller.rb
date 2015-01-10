class TasksController < ApplicationController

  def index
    project = Project.find(params[:project_id])
    task = Task.all
    respond_with project, task
  end

  def create
    project = Project.find(params[:project_id])
    task = Task.create(task_params)
    respond_with project, task
  end

  def show
    project = Project.find(params[:project_id])
    task = Task.find(params[:id])
    respond_with project, task
  end

  private
  def task_params
    params.require(:task).permit(:project_id, :name, :status, :rang)
  end


end
