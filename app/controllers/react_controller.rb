class ReactController < ApplicationController
    def index
        render :json => 'public/index.html', :layout => false
    end
end
