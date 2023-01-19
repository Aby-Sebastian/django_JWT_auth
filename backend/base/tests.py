from django.test import TestCase
from django.urls import reverse, resolve

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

    def test_token_url_resolves_to_home_page_view(self):
        path = reverse('token_obtain_pair')
        self.assertEqual(resolve(path).view_name, 'token_obtain_pair')

    def test_token_refresh_url_resolves_to_home_page_view(self):
        path = reverse('token_refresh')
        self.assertEqual(resolve(path).view_name, 'token_refresh')