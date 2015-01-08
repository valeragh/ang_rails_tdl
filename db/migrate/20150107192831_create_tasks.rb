class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :status
      t.integer :rang
      t.references :project, index: true

      t.timestamps
    end
  end
end
