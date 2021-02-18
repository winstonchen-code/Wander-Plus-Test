class LocationsController < ApplicationController
    def index
        render json: Location.all.to_json({
            include: {
            reviews: {except: [:created_at, :updated_at]},
        },
            methods: :avg_score,
            except: [:created_at, :updated_at]
        })
    end

    def show 
        location = Location.find(params[:id])
        render json: location.to_json({
            include: {
            reviews: {except: [:created_at, :updated_at]}
        },
            methods: :avg_score,
            except: [:created_at, :updated_at]
        })
    end

end
