class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_secure_password
end
