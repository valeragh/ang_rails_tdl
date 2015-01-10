class CommentsController < ApplicationController

  def create
    project = Project.find(params[:project_id])
    task = Task.find(params[:task_id])
    comment = Comment.create(comment_params)
    respond_with project, task, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:task_id, :body)
  end
end
