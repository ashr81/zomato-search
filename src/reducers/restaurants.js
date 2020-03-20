import {
  SEARCH_TYPES, CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS,
  SELECT_RESTAURANT, CLOSE_RESTAURANT_MODAL, CHANGE_PRIMARY_SEARCH_TEXT,
  ADD_OTHER_SEARCH_OPTIONS, SELECT_OTHER_SEARCH, ENTITY_CUISINES,
  ENTITY_CATEGORIES,
  ORDERBY_OPTIONS,
  CHANGE_SORT_ORDER,
  CHANGE_SORTBY_OPTION
} from '../actions/restaurants';

const CUISINES_MOCK_DATA = {"cuisines":[{"cuisine":{"cuisine_id":1035,"cuisine_name":"Afghan"}},{"cuisine":{"cuisine_id":152,"cuisine_name":"African"}},{"cuisine":{"cuisine_id":1,"cuisine_name":"American"}},{"cuisine":{"cuisine_id":2,"cuisine_name":"Andhra"}},{"cuisine":{"cuisine_id":4,"cuisine_name":"Arabian"}},{"cuisine":{"cuisine_id":3,"cuisine_name":"Asian"}},{"cuisine":{"cuisine_id":292,"cuisine_name":"Awadhi"}},{"cuisine":{"cuisine_id":193,"cuisine_name":"BBQ"}},{"cuisine":{"cuisine_id":5,"cuisine_name":"Bakery"}},{"cuisine":{"cuisine_id":227,"cuisine_name":"Bar Food"}},{"cuisine":{"cuisine_id":10,"cuisine_name":"Bengali"}},{"cuisine":{"cuisine_id":270,"cuisine_name":"Beverages"}},{"cuisine":{"cuisine_id":1013,"cuisine_name":"Bihari"}},{"cuisine":{"cuisine_id":7,"cuisine_name":"Biryani"}},{"cuisine":{"cuisine_id":247,"cuisine_name":"Bubble Tea"}},{"cuisine":{"cuisine_id":168,"cuisine_name":"Burger"}},{"cuisine":{"cuisine_id":22,"cuisine_name":"Burmese"}},{"cuisine":{"cuisine_id":30,"cuisine_name":"Cafe"}},{"cuisine":{"cuisine_id":994,"cuisine_name":"Charcoal Chicken"}},{"cuisine":{"cuisine_id":18,"cuisine_name":"Chettinad"}},{"cuisine":{"cuisine_id":25,"cuisine_name":"Chinese"}},{"cuisine":{"cuisine_id":1040,"cuisine_name":"Coffee"}},{"cuisine":{"cuisine_id":35,"cuisine_name":"Continental"}},{"cuisine":{"cuisine_id":100,"cuisine_name":"Desserts"}},{"cuisine":{"cuisine_id":268,"cuisine_name":"Drinks Only"}},{"cuisine":{"cuisine_id":38,"cuisine_name":"European"}},{"cuisine":{"cuisine_id":40,"cuisine_name":"Fast Food"}},{"cuisine":{"cuisine_id":271,"cuisine_name":"Finger Food"}},{"cuisine":{"cuisine_id":501,"cuisine_name":"Frozen Yogurt"}},{"cuisine":{"cuisine_id":47,"cuisine_name":"Goan"}},{"cuisine":{"cuisine_id":48,"cuisine_name":"Gujarati"}},{"cuisine":{"cuisine_id":143,"cuisine_name":"Healthy Food"}},{"cuisine":{"cuisine_id":49,"cuisine_name":"Hyderabadi"}},{"cuisine":{"cuisine_id":233,"cuisine_name":"Ice Cream"}},{"cuisine":{"cuisine_id":114,"cuisine_name":"Indonesian"}},{"cuisine":{"cuisine_id":55,"cuisine_name":"Italian"}},{"cuisine":{"cuisine_id":60,"cuisine_name":"Japanese"}},{"cuisine":{"cuisine_id":164,"cuisine_name":"Juices"}},{"cuisine":{"cuisine_id":65,"cuisine_name":"Kashmiri"}},{"cuisine":{"cuisine_id":178,"cuisine_name":"Kebab"}},{"cuisine":{"cuisine_id":62,"cuisine_name":"Kerala"}},{"cuisine":{"cuisine_id":67,"cuisine_name":"Korean"}},{"cuisine":{"cuisine_id":66,"cuisine_name":"Lebanese"}},{"cuisine":{"cuisine_id":157,"cuisine_name":"Lucknowi"}},{"cuisine":{"cuisine_id":102,"cuisine_name":"Maharashtrian"}},{"cuisine":{"cuisine_id":69,"cuisine_name":"Malaysian"}},{"cuisine":{"cuisine_id":71,"cuisine_name":"Malwani"}},{"cuisine":{"cuisine_id":72,"cuisine_name":"Mangalorean"}},{"cuisine":{"cuisine_id":70,"cuisine_name":"Mediterranean"}},{"cuisine":{"cuisine_id":73,"cuisine_name":"Mexican"}},{"cuisine":{"cuisine_id":137,"cuisine_name":"Middle Eastern"}},{"cuisine":{"cuisine_id":1015,"cuisine_name":"Mithai"}},{"cuisine":{"cuisine_id":1018,"cuisine_name":"Modern Indian"}},{"cuisine":{"cuisine_id":1051,"cuisine_name":"Momos"}},{"cuisine":{"cuisine_id":74,"cuisine_name":"Mongolian"}},{"cuisine":{"cuisine_id":147,"cuisine_name":"Moroccan"}},{"cuisine":{"cuisine_id":75,"cuisine_name":"Mughlai"}},{"cuisine":{"cuisine_id":166,"cuisine_name":"Naga"}},{"cuisine":{"cuisine_id":117,"cuisine_name":"Nepalese"}},{"cuisine":{"cuisine_id":231,"cuisine_name":"North Eastern"}},{"cuisine":{"cuisine_id":50,"cuisine_name":"North Indian"}},{"cuisine":{"cuisine_id":1057,"cuisine_name":"Odia"}},{"cuisine":{"cuisine_id":1048,"cuisine_name":"Paan"}},{"cuisine":{"cuisine_id":139,"cuisine_name":"Pakistani"}},{"cuisine":{"cuisine_id":290,"cuisine_name":"Parsi"}},{"cuisine":{"cuisine_id":82,"cuisine_name":"Pizza"}},{"cuisine":{"cuisine_id":87,"cuisine_name":"Portuguese"}},{"cuisine":{"cuisine_id":88,"cuisine_name":"Rajasthani"}},{"cuisine":{"cuisine_id":1005,"cuisine_name":"Roast Chicken"}},{"cuisine":{"cuisine_id":1023,"cuisine_name":"Rolls"}},{"cuisine":{"cuisine_id":998,"cuisine_name":"Salad"}},{"cuisine":{"cuisine_id":304,"cuisine_name":"Sandwich"}},{"cuisine":{"cuisine_id":83,"cuisine_name":"Seafood"}},{"cuisine":{"cuisine_id":993,"cuisine_name":"Sindhi"}},{"cuisine":{"cuisine_id":119,"cuisine_name":"Singaporean"}},{"cuisine":{"cuisine_id":972,"cuisine_name":"South American"}},{"cuisine":{"cuisine_id":85,"cuisine_name":"South Indian"}},{"cuisine":{"cuisine_id":86,"cuisine_name":"Sri Lankan"}},{"cuisine":{"cuisine_id":141,"cuisine_name":"Steak"}},{"cuisine":{"cuisine_id":90,"cuisine_name":"Street Food"}},{"cuisine":{"cuisine_id":177,"cuisine_name":"Sushi"}},{"cuisine":{"cuisine_id":1054,"cuisine_name":"Tamil"}},{"cuisine":{"cuisine_id":163,"cuisine_name":"Tea"}},{"cuisine":{"cuisine_id":150,"cuisine_name":"Tex-Mex"}},{"cuisine":{"cuisine_id":95,"cuisine_name":"Thai"}},{"cuisine":{"cuisine_id":93,"cuisine_name":"Tibetan"}},{"cuisine":{"cuisine_id":142,"cuisine_name":"Turkish"}},{"cuisine":{"cuisine_id":99,"cuisine_name":"Vietnamese"}},{"cuisine":{"cuisine_id":1024,"cuisine_name":"Wraps"}}]}
const CATEGORIES_MOCK_DATA = {"categories":[{"categories":{"id":1,"name":"Delivery"}},{"categories":{"id":2,"name":"Dine-out"}},{"categories":{"id":3,"name":"Nightlife"}},{"categories":{"id":4,"name":"Catching-up"}},{"categories":{"id":5,"name":"Takeaway"}},{"categories":{"id":6,"name":"Cafes"}},{"categories":{"id":7,"name":"Daily Menus"}},{"categories":{"id":8,"name":"Breakfast"}},{"categories":{"id":9,"name":"Lunch"}},{"categories":{"id":10,"name":"Dinner"}},{"categories":{"id":11,"name":"Pubs & Bars"}},{"categories":{"id":13,"name":"Pocket Friendly Delivery"}},{"categories":{"id":14,"name":"Clubs & Lounges"}}]}
const restaurants = {
  "results_found": 10,
  "results_start": 0,
  "results_shown": 10,
  "restaurants": [
    {
      "restaurant": {
        "R": {
          "has_menu_status": {
            "delivery": -1,
            "takeaway": -1
          },
          "res_id": 7713
        },
        "apikey": "ce240b13946c9e1008905c8a425924dc",
        "id": "7713",
        "name": "Ardor 2.1",
        "url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "N-55/56 & 88/89, Outer Circle, Connaught Place, New Delhi",
          "locality": "Connaught Place",
          "city": "New Delhi",
          "city_id": 1,
          "latitude": "28.6301215395",
          "longitude": "77.2202215344",
          "zipcode": "0",
          "country_id": 1,
          "locality_verbose": "Connaught Place, New Delhi"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, Chinese, Continental, Italian",
        "timings": "12:30 PM to 12:30 AM (Mon-Sun)",
        "average_cost_for_two": 1800,
        "price_range": 3,
        "currency": "Rs.",
        "highlights": [
          "Lunch",
          "Dinner",
          "Debit Card",
          "Delivery",
          "Credit Card",
          "Cash",
          "Valet Parking Available",
          "Romantic Dining",
          "Digital Payments Accepted",
          "Hookah",
          "Fullbar",
          "Rooftop",
          "Air Conditioned",
          "Live Sports Screening",
          "Live Music",
          "Free Wifi",
          "Axis Bank - Dining Delights",
          "Nightlife",
          "Indoor Seating",
          "Table booking recommended",
          "Smoking Area"
        ],
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "https://b.zmtcdn.com/data/pictures/3/7713/36f1115d9df99648ead246ea2d894d3d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.2",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "rating_obj": {
            "title": {
              "text": "4.2"
            },
            "bg_color": {
              "type": "lime",
              "tint": "700"
            }
          },
          "votes": "3857"
        },
        "all_reviews_count": 2631,
        "photos_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count": 8733,
        "photos": [
          {
            "photo": {
              "id": "u_TkxNDgMzMzMTQx",
              "url": "https://b.zmtcdn.com/data/reviews_photos/e5c/18cfb7212eef49ccd7bf1c7d7a3bbe5c_1572524911.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/e5c/18cfb7212eef49ccd7bf1c7d7a3bbe5c_1572524911.jpg?impolicy=newcropandfit&cropw=420&croph=420&cropoffsetx=37&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Jazzthebossbabe",
                "zomato_handle": "",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/jazzthebossbabe-41871217?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/5d6/718e518bb8e8a173354ff331e557f5d6.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/41871217"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1572524911,
              "friendly_time": "4 months ago",
              "width": 700,
              "height": 420
            }
          },
          {
            "photo": {
              "id": "u_zczNjYzMjQ1ODk",
              "url": "https://b.zmtcdn.com/data/reviews_photos/e51/05021742b3079c4313fe0bf4a6ff9e51_1581867815.png?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/e51/05021742b3079c4313fe0bf4a6ff9e51_1581867815.png?impolicy=newcropandfit&cropw=670&croph=670&cropoffsetx=244&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Lavesh Rawat",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/lavesh-rawat-144011?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/f70/bff1a8e22c654054ee9cacb39d7d2f70.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/144011"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1581867960,
              "friendly_time": "one month ago",
              "width": 640,
              "height": 640
            }
          },
          {
            "photo": {
              "id": "u_5MANjYwMzQwODE",
              "url": "https://b.zmtcdn.com/data/reviews_photos/b2b/2732611be03f4d37b6a64ce6ee39db2b_1581402866.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/b2b/2732611be03f4d37b6a64ce6ee39db2b_1581402866.jpg?impolicy=newcropandfit&cropw=864&croph=864&cropoffsetx=288&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Chakh Ke Jana Foodies",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/chakh-ke-jana-foodies-142754065?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/088/c47adaab2173cd364edabd6db13ab088.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/142754065"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1581402866,
              "friendly_time": "one month ago",
              "width": 1152,
              "height": 864
            }
          },
          {
            "photo": {
              "id": "u_NjY0NjYxNDU2Mz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/fd5/95119f4d320ee3f1348ddf6b4e989fd5_1580394915.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/fd5/95119f4d320ee3f1348ddf6b4e989fd5_1580394915.jpg?impolicy=newcropandfit&cropw=1057&croph=1057&cropoffsetx=23&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Ankur Bhatia",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/ankur-bhatia-43882483?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ae5/b36892d7fbafa4ec60278ae761040ae5.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/43882483"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1580394915,
              "friendly_time": "one month ago",
              "width": 1125,
              "height": 1057
            }
          },
          {
            "photo": {
              "id": "u_MQNzcyNzIxMDcz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/47e/43807079be8c184ff4b23074fd25e47e_1570078238.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/47e/43807079be8c184ff4b23074fd25e47e_1570078238.jpg?impolicy=newcropandfit&cropw=480&croph=480&cropoffsetx=171&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Droooove",
                "zomato_handle": "backpackers__story",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/backpackers__story?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/988/65d1c3f09703267cadca767be0e1f988.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/133136368"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1570078239,
              "friendly_time": "5 months ago",
              "width": 781,
              "height": 480
            }
          },
          {
            "photo": {
              "id": "u_MDA5MTU5MTcyNj",
              "url": "https://b.zmtcdn.com/data/reviews_photos/159/1fdff0d133ad9daad0f74a586b5fc159_1580394909.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/159/1fdff0d133ad9daad0f74a586b5fc159_1580394909.jpg?impolicy=newcropandfit&cropw=1125&croph=1125&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Ankur Bhatia",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/ankur-bhatia-43882483?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ae5/b36892d7fbafa4ec60278ae761040ae5.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/43882483"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1580394909,
              "friendly_time": "one month ago",
              "width": 1125,
              "height": 1330
            }
          },
          {
            "photo": {
              "id": "u_I4NjQxNjUxODUN",
              "url": "https://b.zmtcdn.com/data/reviews_photos/f85/33ed34f6881636ff0ae0f2f3c7821f85_1571559411.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/f85/33ed34f6881636ff0ae0f2f3c7821f85_1571559411.jpg?impolicy=newcropandfit&cropw=648&croph=648&cropoffsetx=136&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Karanpreet Singh",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/karanpreet-singh-72356555?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/f27/450bdb4b5f16781d3fcccd4e6d221f27.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/72356555"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1571559411,
              "friendly_time": "5 months ago",
              "width": 1152,
              "height": 648
            }
          },
          {
            "photo": {
              "id": "u_g3MjQwMzU4ODA1",
              "url": "https://b.zmtcdn.com/data/reviews_photos/097/861be6c53a751d6d0ce3e31edad02097_1580749463.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/097/861be6c53a751d6d0ce3e31edad02097_1580749463.jpg?impolicy=newcropandfit&cropw=750&croph=750&cropoffsetx=0&cropoffsety=50&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "CHATORA THAKUR",
                "zomato_handle": "foodie_thakurboi",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/foodie_thakurboi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/698/b804106e10c2180c44dba8a9ea50f698.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/77722337"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1580749463,
              "friendly_time": "one month ago",
              "width": 750,
              "height": 1000
            }
          },
          {
            "photo": {
              "id": "u_0NTYyNTM0MTc0M",
              "url": "https://b.zmtcdn.com/data/reviews_photos/e5e/5cbc5fcc619980c561984f5de0ac6e5e_1581217752.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/e5e/5cbc5fcc619980c561984f5de0ac6e5e_1581217752.jpg?impolicy=newcropandfit&cropw=750&croph=750&cropoffsetx=0&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Foodie Ashwani",
                "zomato_handle": "Delhi_Streets_Food",
                "foodie_color": "e95151",
                "profile_url": "https://www.zomato.com/Delhi_Streets_Food?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/56b/c5bec8ca3ecdd948dc747a1f9f93f56b.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/37090371"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1581217752,
              "friendly_time": "one month ago",
              "width": 750,
              "height": 1000
            }
          },
          {
            "photo": {
              "id": "u_IzNTk0NDI5OTEx",
              "url": "https://b.zmtcdn.com/data/reviews_photos/677/8326ac3d9efff906812fb6fea6c8d677_1577972697.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/677/8326ac3d9efff906812fb6fea6c8d677_1577972697.jpg?impolicy=newcropandfit&cropw=864&croph=864&cropoffsetx=0&cropoffsety=168&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Lakshay",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/lakshay-151991300?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/151991300"
              },
              "res_id": 7713,
              "caption": "",
              "timestamp": 1577972697,
              "friendly_time": "2 months ago",
              "width": 864,
              "height": 1152
            }
          }
        ],
        "menu_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/3/7713/36f1115d9df99648ead246ea2d894d3d.jpg",
        "medio_provider": 1,
        "has_online_delivery": 1,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/7713",
        "is_table_reservation_supported": 1,
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers": "011 45152266, 011 45152267",
        "all_reviews": {
          "reviews": [
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            }
          ]
        },
        "establishment": [
          "Lounge"
        ],
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "has_menu_status": {
            "delivery": -1,
            "takeaway": -1
          },
          "res_id": 307571
        },
        "apikey": "ce240b13946c9e1008905c8a425924dc",
        "id": "307571",
        "name": "Wood Box Cafe",
        "url": "https://www.zomato.com/ncr/wood-box-cafe-satyaniketan-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Shop 288, Opposite Venkateswara College, Satyaniketan, New Delhi",
          "locality": "Satyaniketan",
          "city": "New Delhi",
          "city_id": 1,
          "latitude": "28.5885447561",
          "longitude": "77.1689058468",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Satyaniketan, New Delhi"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Cafe, Fast Food, Italian, Chinese, Salad, Momos",
        "timings": "11am – 11pm (Mon-Fri),11am – 11:30pm (Sat-Sun)",
        "average_cost_for_two": 850,
        "price_range": 2,
        "currency": "Rs.",
        "highlights": [
          "Dinner",
          "Delivery",
          "Credit Card",
          "Lunch",
          "Cash",
          "Takeaway Available",
          "Debit Card",
          "Indoor Seating",
          "Air Conditioned",
          "Smoking Area",
          "Table booking recommended",
          "Wifi"
        ],
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/7/304307/164718ff3ccf200d80e5601fefded2b6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.1",
          "rating_text": "Very Good",
          "rating_color": "5BA829",
          "rating_obj": {
            "title": {
              "text": "4.1"
            },
            "bg_color": {
              "type": "lime",
              "tint": "700"
            }
          },
          "votes": "2453"
        },
        "all_reviews_count": 1577,
        "photos_url": "https://www.zomato.com/ncr/wood-box-cafe-satyaniketan-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "photo_count": 3916,
        "photos": [
          {
            "photo": {
              "id": "u_M4ODMyMzQzNzQ5",
              "url": "https://b.zmtcdn.com/data/reviews_photos/e3c/771c6349cc9f0dc8a32ca895edfbee3c_1572545946.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/e3c/771c6349cc9f0dc8a32ca895edfbee3c_1572545946.jpg?impolicy=newcropandfit&cropw=960&croph=960&cropoffsetx=0&cropoffsety=207&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Kanika Malhotra",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/kanika-malhotra-45564004?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/144/3f23ec599fbd1b4e4ca370f4970f9144.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/45564004"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1572545946,
              "friendly_time": "4 months ago",
              "width": 960,
              "height": 1280
            }
          },
          {
            "photo": {
              "id": "u_yODYyMTkyMzQ3M",
              "url": "https://b.zmtcdn.com/data/reviews_photos/37a/56b6259c2ef1e3584cb125862312037a_1571937033.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/37a/56b6259c2ef1e3584cb125862312037a_1571937033.jpg?impolicy=newcropandfit&cropw=986&croph=986&cropoffsetx=72&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Bazigha",
                "zomato_handle": "bazigha",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/bazigha?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/3cf/496ffdd75060754f81989e6ccfe563cf.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/81880775"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1571937033,
              "friendly_time": "4 months ago",
              "width": 1080,
              "height": 987
            }
          },
          {
            "photo": {
              "id": "u_jgyNzM3NzcyOTI",
              "url": "https://b.zmtcdn.com/data/reviews_photos/1e1/d46adfe7e72071bf72d92483657421e1_1581599170.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/1e1/d46adfe7e72071bf72d92483657421e1_1581599170.jpg?impolicy=newcropandfit&cropw=866&croph=866&cropoffsetx=71&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Foodie Naima",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/users/foodie-naima-155621198?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/155621198"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1581599170,
              "friendly_time": "one month ago",
              "width": 977,
              "height": 866
            }
          },
          {
            "photo": {
              "id": "u_Q0OTI4NzE4OTIz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/b55/48b42b18ebba9629a4e8ca789d278b55_1574434851.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/b55/48b42b18ebba9629a4e8ca789d278b55_1574434851.jpg?impolicy=newcropandfit&cropw=750&croph=750&cropoffsetx=0&cropoffsety=135&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Pamtwi",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/pamtwi-112005239?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/671/fda9c659a322f2d0eb6d7e983b2b3671.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/112005239"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1574434851,
              "friendly_time": "3 months ago",
              "width": 750,
              "height": 1000
            }
          },
          {
            "photo": {
              "id": "u_MTA1NzMwNDQ0ND",
              "url": "https://b.zmtcdn.com/data/reviews_photos/981/734cf04734ddd70de952666f0985a981_1582208791.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/981/734cf04734ddd70de952666f0985a981_1582208791.jpg?impolicy=newcropandfit&cropw=2703&croph=2703&cropoffsetx=608&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Ankita Sarkar",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/ankita-sarkar-71277688?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/6c6/b689ca0121ccbb7bcaa5180434d686c6.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/71277688"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1582208792,
              "friendly_time": "29 days ago",
              "width": 4032,
              "height": 2703
            }
          },
          {
            "photo": {
              "id": "u_4MDg2MzAMjM5Mz",
              "url": "https://b.zmtcdn.com/data/reviews_photos/bff/f818499dd1a80ce8b0d32a5dcaea3bff_1570608885.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/bff/f818499dd1a80ce8b0d32a5dcaea3bff_1570608885.jpg?impolicy=newcropandfit&cropw=960&croph=960&cropoffsetx=236&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Anshita Jagat",
                "zomato_handle": "hungry_dilli",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/hungry_dilli?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/733/a860b0e5b7c2f9312b69d41ffb41d733.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/41889082"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1570608885,
              "friendly_time": "5 months ago",
              "width": 1280,
              "height": 960
            }
          },
          {
            "photo": {
              "id": "u_3MDkyNzU4MzY3M",
              "url": "https://b.zmtcdn.com/data/reviews_photos/fc2/a74d79431e652e64ff2c01e4ea15cfc2_1574581961.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/fc2/a74d79431e652e64ff2c01e4ea15cfc2_1574581961.jpg?impolicy=newcropandfit&cropw=3024&croph=3024&cropoffsetx=0&cropoffsety=603&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Aarushi Madan",
                "zomato_handle": "Curiousappetite50",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/Curiousappetite50?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/f84/212827c714b800e4d3ece0838eb2ff84.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/30211462"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1574581962,
              "friendly_time": "3 months ago",
              "width": 3024,
              "height": 4032
            }
          },
          {
            "photo": {
              "id": "u_I3OQNDQ1MjQ0ND",
              "url": "https://b.zmtcdn.com/data/reviews_photos/d42/d58103fc8bbf811ea33aba9a69166d42_1583065008.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/d42/d58103fc8bbf811ea33aba9a69166d42_1583065008.jpg?impolicy=newcropandfit&cropw=960&croph=960&cropoffsetx=213&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Foodpartner",
                "zomato_handle": "Foodpartner22",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/Foodpartner22?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/a5e/0e0416be4845da60ebb870f700a62a5e.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/160268299"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1583065008,
              "friendly_time": "19 days ago",
              "width": 1280,
              "height": 960
            }
          },
          {
            "photo": {
              "id": "u_ExODMxOTcyODEx",
              "url": "https://b.zmtcdn.com/data/reviews_photos/392/a11cdbafe645c3e90d5f54945b1c3392_1574434845.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/392/a11cdbafe645c3e90d5f54945b1c3392_1574434845.jpg?impolicy=newcropandfit&cropw=750&croph=750&cropoffsetx=231&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Pamtwi",
                "zomato_handle": "",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/pamtwi-112005239?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/671/fda9c659a322f2d0eb6d7e983b2b3671.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/112005239"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1574434845,
              "friendly_time": "3 months ago",
              "width": 1000,
              "height": 750
            }
          },
          {
            "photo": {
              "id": "u_1OTQzOTMyODkwN",
              "url": "https://b.zmtcdn.com/data/reviews_photos/140/84f4699a18adcf8173ba2ec9ba123140_1582297459.jpg",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/140/84f4699a18adcf8173ba2ec9ba123140_1582297459.jpg?impolicy=newcropandfit&cropw=750&croph=750&cropoffsetx=84&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
              "user": {
                "name": "Iam_kanchisingh",
                "foodie_color": "ffae4f",
                "profile_url": "https://www.zomato.com/users/iamkanchisingh-143627972?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/fe0/81af2cec391f92177a9b61ec0546ffe0.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "profile_deeplink": "zomato://u/143627972"
              },
              "res_id": 307571,
              "caption": "",
              "timestamp": 1582297459,
              "friendly_time": "28 days ago",
              "width": 1000,
              "height": 750
            }
          }
        ],
        "menu_url": "https://www.zomato.com/ncr/wood-box-cafe-satyaniketan-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/chains/7/304307/164718ff3ccf200d80e5601fefded2b6.jpg",
        "medio_provider": 1,
        "has_online_delivery": 1,
        "is_delivering_now": 0,
        "include_bogo_offers": true,
        "deeplink": "zomato://restaurant/307571",
        "is_table_reservation_supported": 1,
        "has_table_booking": 1,
        "book_url": "https://www.zomato.com/ncr/wood-box-cafe-satyaniketan-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "events_url": "https://www.zomato.com/ncr/wood-box-cafe-satyaniketan-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "phone_numbers": "+91 9818364446, 011 30758284",
        "all_reviews": {
          "reviews": [
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            },
            {
              "review": []
            }
          ]
        },
        "establishment": [
          "Café"
        ],
        "establishment_types": []
      }
    }
  ]
}
export const initialState = {
  restaurants: [],
  restaurantsLoading: false,
  otherSearchOptions: {
    cuisines: [], // CUISINES_MOCK_DATA.cuisines.map(({ cuisine }) => ({id: cuisine.cuisine_id, name: cuisine.cuisine_name})),
    categories: [], // CATEGORIES_MOCK_DATA.categories.map(category => category.categories)
  },
  sortBy: '',
  order: 'asc',
  searchType: SEARCH_TYPES.RESTAURANT,
  citySearchLoading: false,
  citySearchValue: '',
  citiesSearchCollection: [],
  selectedRestaurant: {},
  selectedOtherSearchValues: [],
  selectedPrimarySearchValue: {},
  primarySearchValue: '',
  sortOrder: ORDERBY_OPTIONS.ASC,
  sortBy: ''
}

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch(type) {
    case CHANGE_SEARCH_TYPE: {
      return {
        ...state,
        searchType: state.searchType === SEARCH_TYPES.RESTAURANT ? SEARCH_TYPES.OTHERS : SEARCH_TYPES.RESTAURANT,
        selectedPrimarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? state.selectedRestaurant : state.selectedOtherSearchValues,
        primarySearchValue: '',
        restaurants: [],
        restaurantsLoading: state.searchType === SEARCH_TYPES.RESTAURANT
      }
    }
    case ADD_OTHER_SEARCH_OPTIONS: {
      const cuisines = payload.cuisines.data.cuisines.map(({ cuisine }) => ({id: cuisine.cuisine_id, name: cuisine.cuisine_name}));
      const categories = payload.categories.data.categories.map(category => category.categories)
      return {
        ...state,
        otherSearchOptions: {
          [ENTITY_CUISINES]: cuisines,
          [ENTITY_CATEGORIES]: categories
        }
      }
    }
    case CHANGE_SORT_ORDER:
    case CHANGE_SORTBY_OPTION: {
      return {
        ...state,
        ...payload,
        restaurantsLoading: state.searchType !== SEARCH_TYPES.RESTAURANT
      }
    }
    case CHANGE_PRIMARY_SEARCH_TEXT: {
      return {
        ...state,
        restaurantsLoading: true,
        primarySearchValue: payload.value
      }
    }
    case ADD_RESTAURANTS: {
      return {
        ...state,
        restaurants: payload.data.restaurants.map(option => option.restaurant),
        restaurantsLoading: false
      }
    }
    case CLOSE_RESTAURANT_MODAL: {
      return {
        ...state,
        restaurants: state.searchType === SEARCH_TYPES.RESTAURANT ? [] : state.restaurants,
        selectedRestaurant: {},
        restaurantsLoading: false,
        primarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? '' : state.primarySearchValue
      }
    }
    case SELECT_RESTAURANT: {
      return {
        ...state,
        selectedRestaurant: state.restaurants.filter(restaurant => restaurant.id === payload.restaurantId)[0]
      }
    }
    case SELECT_OTHER_SEARCH: {
      const entityId = parseInt(payload.entityId)
      const isExist = state.selectedOtherSearchValues.some(value => value.id === entityId && value.type === payload.entityType);
      return {
        ...state,
        selectedOtherSearchValues: isExist ?
        state.selectedOtherSearchValues.filter(value => value.id !== entityId || value.type !== payload.entityType) :
        [...state.selectedOtherSearchValues, {id: entityId, type: payload.entityType}],
        restaurantsLoading: true
      }
    }
    case CHANGE_CITY_SEARCH_TEXT: {
      return {
        ...state,
        citySearchLoading: true,
        citySearchValue: payload.value
      }
    }
    case CHANGE_CITY_SEARCH_OPTIONS: {
      return {
        ...state,
        citySearchLoading: false,
        citiesSearchCollection: payload.options,
      }
    }
    case SELECT_CITY: {
      return {
        ...state,
        citySearchValue: payload.selectedCity.name || '',
        citiesSearchCollection: [],
        citySearchLoading: false
      }
    }
    default: {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default reducer;