import tweepy
import requests
import json

# all the requiered keys
api_key = "kGBh7pTKLQi0MFZMI2ykfgznA"
api_key_secret = "1VuWbtqQKhTww9VkK3d6nzdqZxvTPA2DOrAsLsqgZnB3c4FSxx"
access_token = "993185396-5Z4IXNL0k6KoUN7QA4uNKEYjgkaupTNMsHyWnVQL"
access_token_secret = "bVWEOwCDqxi0IKZNLOdZ1wtQpM8L9siZfNVCgFO8p3aWD"
bearer_token = "AAAAAAAAAAAAAAAAAAAAAP16VQEAAAAAMmU7bB3m9%2BSEHl21GVWtstonA1w%3DQ0Oan5ZEnSjn22pAD2MdahU4a556xWmDahDyA9pv55N32WdxU8"

url = "https://api.twitter.com/2/tweets/search/recent?query="
twitter_params = "diwali"
url = url + twitter_params


headers = {"Authorization": "Bearer {}".format(bearer_token)}
response = requests.request("GET", url, headers=headers)
res_json = response.json()

print(res_json)
