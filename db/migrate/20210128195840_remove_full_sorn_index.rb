class RemoveFullSornIndex < ActiveRecord::Migration[6.0]
  def up
    remove_index :full_sorn_searches, :full_sorn_tsvector
  end

  def down
    add_index :full_sorn_searches, :full_sorn_tsvector, using: :gin
  end
end
