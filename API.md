

### API Response Format:

* Start Loading: 


        {
            "status": 1,
            "loading": true,
            "msg": "loading",
            "data": null
        }


* Loading Success:

        {
            "status": 0,
            "loading": false,
            "msg": "success",
            "data": {}
        }

* Loading Failure:

        {
            "status": 1,
            "loading": false,
            "msg": "fail",
            "data": null
        }