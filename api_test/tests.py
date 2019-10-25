from django.test import TestCase

# Create your tests here.


# import requests
# # params = "TomCruise"
# # 汤姆·克鲁斯的电影
# url = "http://10.10.40.96:8080/msService/baseService/outter/company/getAllCompany"
# req = requests.get(url)
# # 通过requests 发起请求
# print(req)

import urllib.request
params = "TomCruise"
# 汤姆·克鲁斯的电影
url = "http://10.10.40.96:8080/msService/baseService/outter/company/getAllCompany/"
html = urllib.request.urlopen(url)
# 通过urllib发起请求
html = html.read().decode("utf-8")
print(html)