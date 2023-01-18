from django.test import TestCase

# Create your tests here.

class URLTestCase(TestCase):
    def test_home(self):
        response = self.client.get('/api/')
        self.assertEqual(response.status_code, 200)

    def test_token(self):
        response = self.client.get('/api/token/')
        self.assertEqual(response.status_code, 405)

    def test_token_refresh(self):
        response = self.client.get('/api/token/refresh/')
        self.assertEqual(response.status_code, 405)