require 'httparty'

class CommentsController < ApplicationController
    before_action :add_allow_credentials_headers

    def add_allow_credentials_headers
        response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] || '*'   
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        response.headers['Access-Control-Allow-Headers'] = 'accept, content-type'
    end 
    
    def options
        head :ok
    end
    def index
        url = "https://api.producthunt.com/v1/posts/#{params[:pid]}"
        response = HTTParty.get(url, headers: {"Authorization" => "Bearer #{ENV['PHTOKEN']}"})
        comments = response["post"]["comments"]

        testmo = []
        fav = [
            540259,
            539919,
            540013
        ]

        comments.each do |comment|
            testmo.push(comment) if fav.index(comment["id"])
        end

        render :json => testmo
    end
end
