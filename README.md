# install the dependencies

-- after downloading or cloning the file type 'npm install' in the terminal to install all the dependencies.


# run the app 

-- To Run the app type 'npm run start:dev' in the terminal

# api details 

1. Event list (POST http://localhost:5001/api/v1/eventList)
  -- req body 
    {
    "page":1,
    "limit":5
    }

  -- response
    "eventList": [
            {
                "id": 2,
                "title": "event 2",
                "start_at": "2022-11-22T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z"
            },
            {
                "id": 3,
                "title": "event 2",
                "start_at": "2022-11-22T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z"
            },
            {
                "id": 4,
                "title": "event 2",
                "start_at": "2022-11-22T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z"
            },
            {
                "id": 5,
                "title": "event 2",
                "start_at": "2022-11-22T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z"
            },
            {
                "id": 6,
                "title": "event 2",
                "start_at": "2022-11-22T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z"
            }
        ],
        "pagination": {
            "total": 5,
            "per_page": 5,
            "total_pages": 2,
            "current_page": 1
        }

2. Event Details (POST http://localhost:5001/api/v1/eventDetails)
 
    --req body 

      {
        "eventId":1
      }
    -- response
      {
        "id": 1,
        "title": "event 1",
        "start_at": "2022-11-21T02:28:47.000Z",
        "end_at": "2022-11-22T02:28:47.000Z",
        "total_workshops": 1
       }

3. Workshop list (POST http://localhost:5001/api/v1/workshopList)

    -- req body 
      {
    "event_id":2
      }
    -- response
      "id": 1,
        "title": "event 1",
        "start_at": "2022-11-21T02:28:47.000Z",
        "end_at": "2022-11-22T02:28:47.000Z",
        "workshops": [
            {
                "id": 2,
                "event_id": 1,
                "start_at": "2022-11-23T02:28:47.000Z",
                "end_at": "2022-11-24T02:28:47.000Z",
                "title": "a workshop on ml",
                "description": "renowned tech people will give in this workshop"
            }
        ]

4. workshop details (POST http://localhost:5001/api/v1/workshopDetails)

    -- req body
      {
    "workshop_id":1
      }
    
    --response
      {
        "id": 1,
        "title": "a workshop on ml",
        "desctiption": "renowned tech people will give in this workshop",
        "start_at": "2022-11-21T02:28:47.000Z",
        "end_at": "2022-11-22T02:28:47.000Z",
        "total_reservations": 4
    }

5. workshop reservation (POST http://localhost:5001/api/v1/workshopReservation)

  --req body
    {
    "name":"sifat",
    "email":"sifat.alam13@gmail.com",
    "workshop_id":1
    }

  --response
    {
        "reservation": {
            "id": 4,
            "name": "sifat",
            "email": "sifat.alam13@gmail.com",
            "workshop_id": 1
        },
        "workshop": {
            "id": 1,
            "event_id": 1,
            "start_at": "2022-11-21T02:28:47.000Z",
            "end_at": "2022-11-22T02:28:47.000Z",
            "title": "a workshop on ml",
            "description": "renowned tech people will give in this workshop"
        },
        "event": {
            "id": 1,
            "title": "event 1",
            "start_at": "2022-11-21T02:28:47.000Z",
            "end_at": "2022-11-22T02:28:47.000Z"
        }
    }


