class CommentsController < ApplicationController

  def create
    comment = project.task.comment.create(comment_params)
    respond_with project, task, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
