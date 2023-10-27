import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataclothService {

  constructor() { }
  clothes = [{
    title: "Baby",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_zH_EAX53Y0unAJ8hcTNZOVHkc1Ma1r2m3KilkWXRF-ePL-Ai",
    button: "Show more in Baby"
  }, {
    title: "Woman",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOL23/BROWSE/L1W/MOB/NEWARRIVALS/L1W_NA_Trend._CB1694701341_.gif",
    button: "Show more in Woman"
  }, {
    title: "Man",
    img: "https://www.travelandleisure.com/thmb/S69kt1Pi8L4lyav9dg_UtAGpaj8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Travel-Clothes-for-Men-TL-tout-f3babde88a844584abc1e16f87e3e937.jpg",
    button: "Show more in Man"
  }, {
    title: "Shoes",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dress-shoes-lead-1635776925.jpg?crop=0.564xw:1.00xh;0.220xw,0&resize=1200:*",
    button: "Show more in Shoes"
  },
  ]
}
