class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # KEA http://stackoverflow.com/questions/5669322/turn-off-csrf-token-in-rails-3
  # skip_before_filter :verify_authenticity_token

end
