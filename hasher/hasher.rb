require 'digest'
require 'sinatra'
require 'socket'

# Based upon https://stackoverflow.com/a/10332716/5601591
def try_to_i(str, default = nil)
  str =~ /^\d+$/ ? str.to_i : default
end

set :bind, (ENV["HASHER_ADDR"] || 'hasher')
set :port, try_to_i(ENV["HASHER_PORT"] || '', 1080)

post '/' do
    # Simulate a bit of delay
    sleep 0.1
    content_type 'text/plain'
    "#{Digest::SHA2.new().update(request.body.read)}"
end

get '/' do
    "HASHER running on #{Socket.gethostname}\n"
end

