# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_09_215310) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ticity_searches", force: :cascade do |t|
    t.string "city1"
    t.string "city2"
    t.string "city3"
    t.integer "housing"
    t.integer "costofliving"
    t.integer "startups"
    t.integer "capital"
    t.integer "travel"
    t.integer "commute"
    t.integer "business"
    t.integer "safety"
    t.integer "healthcare"
    t.integer "education"
    t.integer "environment"
    t.integer "economy"
    t.integer "taxation"
    t.integer "internetaccess"
    t.integer "leisure"
    t.integer "tolerance"
    t.integer "outdoors"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
