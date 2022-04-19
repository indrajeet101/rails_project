require "test_helper"

class TodolistControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get todolist_index_url
    assert_response :success
  end

  test "should get create" do
    get todolist_create_url
    assert_response :success
  end

  test "should get update" do
    get todolist_update_url
    assert_response :success
  end

  test "should get destroy" do
    get todolist_destroy_url
    assert_response :success
  end
end
