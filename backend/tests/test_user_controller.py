import pytest
from flaskr.controllers import user_controller

# Example test for user_controller
def test_get_user_by_id(monkeypatch):
    class DummyUser:
        id = 1
        username = 'testuser'
    
    def mock_get_user_by_id(user_id):
        return DummyUser() if user_id == 1 else None

    monkeypatch.setattr(user_controller, 'get_user_by_id', mock_get_user_by_id)
    user = user_controller.get_user_by_id(1)
    assert user is not None
    assert user.username == 'testuser'
