# frozen_string_literal: true

class Player < ApplicationRecord
  has_and_belongs_to_many :teams
end
