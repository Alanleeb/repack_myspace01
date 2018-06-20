class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :user_name
      t.string :age
      t.string :quote
      t.string :avatar

      t.timestamps
    end
  end
end
