  const data = [
    {
        "cname": "india",
        "states": [
            {
                "name": "tamilNadu",
                "districts": {
                    "chennai": {
                        "description": "Chennai, formerly known as Madras, is the capital city of the Indian state of Tamil Nadu. This metropolis is often called the cultural capital of India for its deep-rooted traditions and long heritage.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
                    },
                    "coimbatore": {
                        "description": "Coimbatore is one of the largest cities in Tamil Nadu, known for its textile industry and being a hub for engineering and manufacturing industries.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/7/7e/CHIL_SEZ.jpg"
                    },
                    "madurai": {
                        "description": "Madurai is an ancient city known for the Meenakshi Amman Temple and its significance as a cultural and religious center in southern India.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/1/11/A_sunrise_over_Vaigai_River_in_Madurai_Tamil_Nadu_India.jpg"
                    },
                    "trichy": {
                        "description": "Trichy, officially known as Tiruchirapalli, is known for its historical temples and the Rockfort Temple complex, making it a key religious and cultural city in Tamil Nadu.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Aerial_view_of_Our_Lourdes_church_in_Tiruchirapalli_2.jpg/1280px-Aerial_view_of_Our_Lourdes_church_in_Tiruchirapalli_2.jpg"
                    },
                    "salem": {
                        "description": "Salem is an important city in Tamil Nadu known for its steel industry, as well as being a hub for agriculture, especially for mangoes.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mookeneri%28Kannakurichi%29_Lake.jpg"
                    },
                    "nagapattinam": {
                        "description": "Nagapattinam District is one of the 38 districts of Tamil Nadu state in southern India. Nagapattinam was carved out by bifurcating the erstwhile composite Thanjavur district on 19 October 1999.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shrine_velankanni%2Ctamilnadu_-_panoramio_%281%29.jpg/1280px-Shrine_velankanni%2Ctamilnadu_-_panoramio_%281%29.jpg"
                    }
                }
            },

            {
                "name": "Kerala",
                "districts": {
                  "thiruvananthapuram": {
                    "description": "Thiruvananthapuram, the capital city of Kerala, is known for its scenic beauty, historical landmarks, and the famous Sree Padmanabhaswamy Temple.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Athirapally_Waterfalls_after_the_Monsoons.jpg/1280px-Athirapally_Waterfalls_after_the_Monsoons.jpg"
                  },
                  "kochi": {
                    "description": "Kochi, also known as Cochin, is a major port city known for its rich history, diverse culture, and as the commercial hub of Kerala.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Alappuzha_loves_Wikimedia_IMG_7698.JPG/1920px-Alappuzha_loves_Wikimedia_IMG_7698.JPG"
                  },
                  "kottayam": {
                    "description": "Kottayam is known for its lush landscape, backwaters, and rubber plantations. It is also home to several prominent educational institutions.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/5/54/Jatayu_adventure_centre.jpg"
                  },
                  "ernakulam": {
                    "description": "Ernakulam is a vibrant city in Kerala known for its modern infrastructure and as a commercial center, including the famous Lulu Mall.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg"
                  },
                  "pathanamthitta": {
                    "description": "Pathanamthitta is known for its temples, including the Sabarimala Temple, and its lush green landscapes.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/FORT_KOCHI_BEACH_SUNSET%2CKERALA_-_panoramio_%282%29.jpg/1280px-FORT_KOCHI_BEACH_SUNSET%2CKERALA_-_panoramio_%282%29.jpg"
                  }
                }
            },

            {
                "name": "Karnataka",
                "districts": {
                  "bangalore": {
                    "description": "Bangalore, also known as Bengaluru, is the capital of Karnataka and the tech hub of India, often referred to as the 'Silicon Valley of India'.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Malpe_Beach_2.jpg/1280px-Malpe_Beach_2.jpg"
                  },
                  "mysore": {
                    "description": "Mysore is famous for its royal heritage, the Mysore Palace, and the Dussehra Festival celebrations.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/a/af/Om_Beach_Gokarna_India.jpg"
                  },
                  "hubli": {
                    "description": "Hubli is an important commercial city in Karnataka, known for its textile industry and as a hub for education and business.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Front_e_view_of_Mirjan_fort1.jpg/1920px-Front_e_view_of_Mirjan_fort1.jpg"
                  },
                  "davangere": {
                    "description": "Davangere is known for its educational institutions and is a key city in Karnataka’s agricultural economy.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vittala_temple_charriot_and_gopuram%2C_Hampi.JPG/1280px-Vittala_temple_charriot_and_gopuram%2C_Hampi.JPG"
                  },
                  "belagavi": {
                    "description": "Belagavi is known for its historical fort and as a prominent center for trade and education in northern Karnataka.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/GolGumbaz2.jpg/1280px-GolGumbaz2.jpg"
                  }
                }
            },

            {
                "name": "Telangana",
                "districts": {
                  "hyderabad": {
                    "description": "Hyderabad, the capital of Telangana, is known for its rich history, architecture like the Charminar, and being a major IT and business center.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jain_temple_warangal.jpg/1280px-Jain_temple_warangal.jpg"
                  },
                  "warangal": {
                    "description": "Warangal is known for its historic architecture and temples, including the Warangal Fort and the Thousand Pillar Temple.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bhadrachalam_Temple_at_night.jpg/1280px-Bhadrachalam_Temple_at_night.jpg"
                  },
                  "khammam": {
                    "description": "Khammam is known for its natural resources, including coal mining, and its proximity to beautiful waterfalls and wildlife.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Birla_Temple_no_1.jpg/1280px-Birla_Temple_no_1.jpg"
                  },
                  "nizamabad": {
                    "description": "Nizamabad is known for its agricultural produce, particularly groundnuts, and is rich in cultural heritage.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Medak_Cathedral_%281%29.jpg/1280px-Medak_Cathedral_%281%29.jpg"
                  },
                  "karimnagar": {
                    "description": "Karimnagar is an important city in Telangana known for its handloom industry and its historical landmarks.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jain_temple_warangal.jpg/1280px-Jain_temple_warangal.jpg"
                  }
                }
            },

            {
                "name": "West Bengal",
                "districts": {
                  "kolkata": {
                    "description": "Kolkata, the capital city of West Bengal, is known for its colonial architecture, cultural festivals, and the iconic Howrah Bridge.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Howrah_Bridge.png"
                  },
                  "darjeeling": {
                    "description": "Darjeeling, located in the foothills of the Himalayas, is famous for its tea, stunning views of the Kanchenjunga, and colonial charm.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden_-_Howrah_2011-01-08_9728.JPG/1280px-Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden_-_Howrah_2011-01-08_9728.JPG"
                  },
                  "siliguri": {
                    "description": "Siliguri is an important trade and transport hub, known for its tea gardens and proximity to the northern parts of India.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Morgan_House_Kalimpong_2.jpg/1280px-Morgan_House_Kalimpong_2.jpg"
                  },
                  "hooghly": {
                    "description": "Hooghly is known for its historical towns and temples, as well as its position on the banks of the Hooghly River.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chintamani_Kar_Bird_Sanactuary%2C_Kolkata.JPG/1280px-Chintamani_Kar_Bird_Sanactuary%2C_Kolkata.JPG"
                  },
                  "murshidabad": {
                    "description": "Murshidabad is known for its historical significance, including the remnants of the Nawab of Bengal's era and its beautiful heritage structures.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/St._Paul%27s_Cathedral_in_Kolkata.jpg/1280px-St._Paul%27s_Cathedral_in_Kolkata.jpg"
                  }
                }
            }
        ]
    },
    
    {
        "cname": "sri lanka",
        "states": [
            {
                "name": "Colombo",
                "districts": {
                    "anuradhapura": {
                        "description": "Chennai, formerly known as Madras, is the capital city of the Indian state of Tamil Nadu. This metropolis is often called the cultural capital of India for its deep-rooted traditions and long heritage.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Arugam_Point%2C_Sri_Lanka.jpg/1280px-Arugam_Point%2C_Sri_Lanka.jpg"
                    },
                    "kataragama": {
                        "description": "Coimbatore is one of the largest cities in Tamil Nadu, known for its textile industry and being a hub for engineering and manufacturing industries.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Batticaloa_landscape.JPG/1280px-Batticaloa_landscape.JPG"
                    },
                    "nuwaraeliya": {
                        "description": "Madurai is an ancient city known for the Meenakshi Amman Temple and its significance as a cultural and religious center in southern India.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Nillaveli_Beach.JPG/1280px-Nillaveli_Beach.JPG"
                    },
                    "kandy": {
                        "description": "Trichy, officially known as Tiruchirapalli, is known for its historical temples and the Rockfort Temple complex, making it a key religious and cultural city in Tamil Nadu.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pasikudah_beach.JPG/1280px-Pasikudah_beach.JPG"
                    },
                    "sigiriya": {
                        "description": "Salem is an important city in Tamil Nadu known for its steel industry, as well as being a hub for agriculture, especially for mangoes.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Prima_Factory_From_Sky.jpg/1920px-Prima_Factory_From_Sky.jpg"
                    }
                }
            },

            {
                "name": "vijithapura",
                "districts": {
                  "thiruvananthapuram": {
                    "description": "Thiruvananthapuram, the capital city of Kerala, is known for its scenic beauty, historical landmarks, and the famous Sree Padmanabhaswamy Temple.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fort_Fredrick05.jpg/150px-Fort_Fredrick05.jpg"
                  },
                  "sigiriya": {
                    "description": "Kochi, also known as Cochin, is a major port city known for its rich history, diverse culture, and as the commercial hub of Kerala.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Batticaloa_Portuguese_%28dutch%29_fort.jpg"
                  },
                  "mapagala ": {
                    "description": "Kottayam is known for its lush landscape, backwaters, and rubber plantations. It is also home to several prominent educational institutions.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Delft_Island_fort.JPG/1280px-Delft_Island_fort.JPG"
                  },
                  "thrinkunamalaya": {
                    "description": "Ernakulam is a vibrant city in Kerala known for its modern infrastructure and as a commercial center, including the famous Lulu Mall.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fort_galle_2017-10-28_%283%29.jpg/1280px-Fort_galle_2017-10-28_%283%29.jpg"
                  },
                  "balakotuwa": {
                    "description": "Pathanamthitta is known for its temples, including the Sabarimala Temple, and its lush green landscapes.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hammanheil_Fort.JPG/1280px-Hammanheil_Fort.JPG"
                  }
                }
            },

            {
                "name": "Matara",
                "districts": {
                  "bangalore": {
                    "description": "Bangalore, also known as Bengaluru, is the capital of Karnataka and the tech hub of India, often referred to as the 'Silicon Valley of India'.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jaffna_Fort_-_main_entrance.JPG/1280px-Jaffna_Fort_-_main_entrance.JPG"
                  },
                  "mysore": {
                    "description": "Mysore is famous for its royal heritage, the Mysore Palace, and the Dussehra Festival celebrations.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kayts_Island_Fort.JPG/1280px-Kayts_Island_Fort.JPG"
                  },
                  "hubli": {
                    "description": "Hubli is an important commercial city in Karnataka, known for its textile industry and as a hub for education and business.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kayts_Island_Fort.JPG/1280px-Kayts_Island_Fort.JPG"
                  },
                  "davangere": {
                    "description": "Davangere is known for its educational institutions and is a key city in Karnataka’s agricultural economy.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/SL_Negombo_asv2020-01_img06_Dutch_Fort.jpg/1024px-SL_Negombo_asv2020-01_img06_Dutch_Fort.jpg"
                  },
                  "belagavi": {
                    "description": "Belagavi is known for its historical fort and as a prominent center for trade and education in northern Karnataka.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pooneryn_fort.JPG/1280px-Pooneryn_fort.JPG"
                  }
                }
            },

            {
                "name": "Hambantota",
                "districts": {
                  "anuradhapura": {
                    "description": "Hyderabad, the capital of Telangana, is known for its rich history, architecture like the Charminar, and being a major IT and business center.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg/1280px-Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg"
                  },
                  "ruwanwelisaya": {
                    "description": "Warangal is known for its historic architecture and temples, including the Warangal Fort and the Thousand Pillar Temple.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg/1280px-Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg"
                  },
                  "tawalantenne": {
                    "description": "Khammam is known for its natural resources, including coal mining, and its proximity to beautiful waterfalls and wildlife.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Srilankamountainforest.jpg"
                  },
                  "bentota": {
                    "description": "Nizamabad is known for its agricultural produce, particularly groundnuts, and is rich in cultural heritage.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sri_Lanka_Photo073.jpg/1280px-Sri_Lanka_Photo073.jpg"
                  },
                  "Sinharaja": {
                    "description": "Karimnagar is an important city in Telangana known for its handloom industry and its historical landmarks.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Uda_Walawe_safari_track.jpg/1280px-Uda_Walawe_safari_track.jpg"
                  }
                }
            },
            
       
        ]
    },

    {
        "cname": "china",
        "states": [
            {
                "name": "guangdong",
                "districts": {
                    "guangzhou": {
                        "description": "Chennai, formerly known as Madras, is the capital city of the Indian state of Tamil Nadu. This metropolis is often called the cultural capital of India for its deep-rooted traditions and long heritage.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hall_of_Supreme_Harmony%2C_Forbidden_City%2C_Beijing%2C_with_tourists_2.jpg/1280px-Hall_of_Supreme_Harmony%2C_Forbidden_City%2C_Beijing%2C_with_tourists_2.jpg"
                    },
                    "shenzhen": {
                        "description": "Coimbatore is one of the largest cities in Tamil Nadu, known for its textile industry and being a hub for engineering and manufacturing industries.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bridge_at_Nanxi_Street_over_Puhuitang_River%2C_Qibao.jpg/1280px-Bridge_at_Nanxi_Street_over_Puhuitang_River%2C_Qibao.jpg"
                    },
                    "dongguan": {
                        "description": "Madurai is an ancient city known for the Meenakshi Amman Temple and its significance as a cultural and religious center in southern India.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lanterns_in_Nanjing_Fuzimiao.jpg/1280px-Lanterns_in_Nanjing_Fuzimiao.jpg"
                    },
                    "zhuhai": {
                        "description": "Trichy, officially known as Tiruchirapalli, is known for its historical temples and the Rockfort Temple complex, making it a key religious and cultural city in Tamil Nadu.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lanterns_in_Nanjing_Fuzimiao.jpg/1280px-Lanterns_in_Nanjing_Fuzimiao.jpg"
                    },
                    "foshan": {
                        "description": "Salem is an important city in Tamil Nadu known for its steel industry, as well as being a hub for agriculture, especially for mangoes.",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pingyao-oldtown.jpg/1280px-Pingyao-oldtown.jpg"
                    }
                }
            },

            {
                "name": "sichuan",
                "districts": {
                  "chengdu ": {
                    "description": "Thiruvananthapuram, the capital city of Kerala, is known for its scenic beauty, historical landmarks, and the famous Sree Padmanabhaswamy Temple.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Shanghai_Qingpu_-_Zhujiajiao_IMG_8256_Chenghuang_Miao_Taoist_City_God_Temple.jpg/1280px-Shanghai_Qingpu_-_Zhujiajiao_IMG_8256_Chenghuang_Miao_Taoist_City_God_Temple.jpg"
                  },
                  "mianyang": {
                    "description": "Kochi, also known as Cochin, is a major port city known for its rich history, diverse culture, and as the commercial hub of Kerala.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Shanghai_Qingpu_-_Zhujiajiao_IMG_8256_Chenghuang_Miao_Taoist_City_God_Temple.jpg/1280px-Shanghai_Qingpu_-_Zhujiajiao_IMG_8256_Chenghuang_Miao_Taoist_City_God_Temple.jpg"
                  },
                  "zigong": {
                    "description": "Kottayam is known for its lush landscape, backwaters, and rubber plantations. It is also home to several prominent educational institutions.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/ICBC_building_on_the_Bund%2C_Shanghai.jpg/1920px-ICBC_building_on_the_Bund%2C_Shanghai.jpg"
                  },
                  "deyang": {
                    "description": "Ernakulam is a vibrant city in Kerala known for its modern infrastructure and as a commercial center, including the famous Lulu Mall.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sculptures_at_the_Hall_of_Benevolence_and_Longevity.jpg/1280px-Sculptures_at_the_Hall_of_Benevolence_and_Longevity.jpg"
                  },
                  "leshan": {
                    "description": "Pathanamthitta is known for its temples, including the Sabarimala Temple, and its lush green landscapes.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hall_of_Supreme_Harmony_2018._Forbidden_City.jpg/1920px-Hall_of_Supreme_Harmony_2018._Forbidden_City.jpg"
                  }
                }
            },

            {
                "name": "zhejiang",
                "districts": {
                  "ningbo": {
                    "description": "Bangalore, also known as Bengaluru, is the capital of Karnataka and the tech hub of India, often referred to as the 'Silicon Valley of India'.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hall_of_Supreme_Harmony_2018._Forbidden_City.jpg/1920px-Hall_of_Supreme_Harmony_2018._Forbidden_City.jpg"
                  },
                  "wenzhou": {
                    "description": "Mysore is famous for its royal heritage, the Mysore Palace, and the Dussehra Festival celebrations.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lugu_Lake_view_from_cable_car%2C_August_2018.jpg/1280px-Lugu_Lake_view_from_cable_car%2C_August_2018.jpg"
                  },
                  "shaoxing": {
                    "description": "Hubli is an important commercial city in Karnataka, known for its textile industry and as a hub for education and business.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/1_li_jiang_guilin_yangshuo_2011.jpg/1280px-1_li_jiang_guilin_yangshuo_2011.jpg"
                  },
                  "Jiaxing": {
                    "description": "Davangere is known for its educational institutions and is a key city in Karnataka’s agricultural economy.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Guilin_2006_19-61.jpg/1280px-Guilin_2006_19-61.jpg"
                  },
                  "belagavi": {
                    "description": "Belagavi is known for its historical fort and as a prominent center for trade and education in northern Karnataka.",
                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ban_Gioc_-_Detian_Falls2.jpg/1280px-Ban_Gioc_-_Detian_Falls2.jpg"
                  }
                }
            },

            {
                "name": "hunan",
                "districts": {
                  "jinan": {
                    "description": "Hyderabad, the capital of Telangana, is known for its rich history, architecture like the Charminar, and being a major IT and business center.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China.jpg?tr=w-1366,f-jpg,pr-true"
                  },
                  "Qingdao": {
                    "description": "Warangal is known for its historic architecture and temples, including the Warangal Fort and the Thousand Pillar Temple.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/11163415/Mutianyu.jpg?tr=w-1920"
                  },
                  "yantai": {
                    "description": "Khammam is known for its natural resources, including coal mining, and its proximity to beautiful waterfalls and wildlife.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/11164059/Jinshanling-great-wall.jpg?tr=w-1920"
                  },
                  "weifang": {
                    "description": "Nizamabad is known for its agricultural produce, particularly groundnuts, and is rich in cultural heritage.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/11171914/Shanhaiguan.jpg?tr=w-1920 "
                  },
                  "zibo": {
                    "description": "Karimnagar is an important city in Telangana known for its handloom industry and its historical landmarks.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141114/tsz-shan-monastery-1.jpeg?tr=w-1366,f-jpg,pr-true"
                  }
                }
            },
            
            {
                "name": "shandong",
                "districts": {
                  "shandong": {
                    "description": "Kolkata, the capital city of West Bengal, is known for its colonial architecture, cultural festivals, and the iconic Howrah Bridge.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141004/view-tsz-shan.jpeg?tr=w-1920"
                  },
                  "darjeeling": {
                    "description": "Darjeeling, located in the foothills of the Himalayas, is famous for its tea, stunning views of the Kanchenjunga, and colonial charm.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141023/tsz-garden.jpeg?tr=w-1920"
                  },
                  "siliguri": {
                    "description": "Siliguri is an important trade and transport hub, known for its tea gardens and proximity to the northern parts of India.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141030/tsz-shan-museum.jpeg?tr=w-1920"
                  },
                  "hooghly": {
                    "description": "Hooghly is known for its historical towns and temples, as well as its position on the banks of the Hooghly River.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141038/guided-tour.jpeg?tr=w-1920"
                  },
                  "murshidabad": {
                    "description": "Murshidabad is known for its historical significance, including the remnants of the Nawab of Bengal's era and its beautiful heritage structures.",
                    "img": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/28141045/water-offering-tsz.jpeg?tr=w-1920"
                  }
                }
            }
        ]
    }
]

export default data
