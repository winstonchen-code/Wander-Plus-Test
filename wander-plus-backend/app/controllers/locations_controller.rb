class LocationsController < ApplicationController
    
    skip_before_action :authorized, only: [:index]
    
    def index
        render json: Location.all
    end

    def show 
        location = Location.find(params[:id])
        render json: location
    end

end
