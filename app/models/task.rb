class Task < ActiveRecord::Base
  belongs_to :project
  has_many :comments

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
