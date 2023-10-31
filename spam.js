function getReward(){
    const Phone ="" //PHONE NUMBER HERE

    const url = 'https://swetrocagul23api.azurewebsites.net/api/v1/capturedigitalwin';
    const headers = {
    'Sec-Ch-Ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjViNmZmZjQ2LWI4MDItNDk0YS05M2Y4LTIwYzI4NTVmMDdkOCIsIm5iZiI6MTY5NjkzNTU0NywiZXhwIjoxNjk3NTQwMzQ3LCJpYXQiOjE2OTY5MzU1NDd9.klE9enPfeV4zv98C20QDmo-FLwHqBCnJTe4JcwGFmKg',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Apikey': '49D7253EC1384D1339CE24786C137',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Origin': 'https://gulkalender.se',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://gulkalender.se/',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en,en-US;q=0.9',
    };
    
    const getWin = new FormData();
    getWin.append('UserId', "582c1fe7-539c-4def-80e9-28c4bf309d4b");
    getWin.append('UserRewardRowKey', "af3fd1b6-eb8e-40d4-8ed1-392cdd930e58");
    getWin.append('LoginType', 'Phone');
    getWin.append('Value', Phone);
    
    fetch(url, {
    method: 'POST',
    headers: headers,
    body: getWin,
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    getReward()
    })
    .catch(error => {
    console.error('Error:', error);
    });

}
getReward()
