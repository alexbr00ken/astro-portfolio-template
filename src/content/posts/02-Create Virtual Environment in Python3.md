---
title: "Create Virtual Environment in Python3"
publishedAt: 2023-06-10
description: "Simple example how to create, start and exit Python3 Virtual Environment"
slug: "venv-in-python3"
isPublish: true
---

## Create Virtual Environment in Python3

### Terminal commands:

1. `sudo apt install python3-venv `
2. `python3 -m venv techsolutionz-env `
3. `source techsolutionz-env/bin/activate `
4. `pip3 install requests` 
5. `python -c "import requests" `
6. `nano youtube.py`

from YouTube video explaining how to import requests module into this specific venv (techsolutionz-env) and create a small script that requests a header from a website:

```python
import requests

r = requests.get("http://httpbin.org/get")
print(r.headers)
```

