class ReviewsController < ApplicationController
    def index
        render json: Review.all.to_json({
            except: [:created_at, :updated_at]
        })
    end

    def create
        review = Review.create(review_params)
        render json: review
    end

    private
    def review_params
        params.required(:review).permit(:title, :description, :score, :location_id, :user_id)
    end

end
