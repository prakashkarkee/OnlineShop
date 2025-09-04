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
  food = [{
    title: "Hot and Spicy",
    img: "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/05/spicy-potatoes.jpg",
    button: "Show more in spicy"
  },
  {
    title: "snack",
    img: "https://thumbs.dreamstime.com/z/crispy-potato-chips-28662875.jpg?w=992",
    button: "Show more in crispy"
  },
  {
    title: "Fried",
    img: "https://img.taste.com.au/g3bM8rGr/w643-h428-cfill-q90/taste/2016/11/rachel-87711-2.jpeg",
    button: "Show more in Fried"
  },
  {
    title: "Boiled",
    img: "https://natashaskitchen.com/wp-content/uploads/2022/02/Boiled-Potatoes-SQ.jpg",
    button: "Show more in Boiled"
  }]
  drink = [
    {
      title: "Soft Drink and carbonated",
      img: "https://sagaciresearch.com/wp-content/uploads/2019/09/Top-10-Carbonated-Soft-Drinks-Egypt-V3.jpg",
      button: "Show more in Soft Drink"
    },
    {
      title: "Soda Drink and cold tea",
      img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/soda-2.jpg",
      button: "Show more in Soda Drink"
    },
    {
      title: "Juices",
      img: "https://static.toiimg.com/thumb/msid-80850219,width-1280,resizemode-4/80850219.jpg",
      button: "Show more in Juices"
    },
    {
      title: "Packed Drink",
      img: "https://www.teonghengtrading.com/image/teonghengtrading/image/cache/data/all_product_images/product-279/0e238656992511d34c9df67074e1baf1-640x496.jpg",
      button: "Show more in Packed Drink"
    }
  ]
  electronic = [{
    title: "Smartphones",
    img: "https://english.onlinekhabar.com/wp-content/uploads/2023/01/Frame-1.png",
    button: "Show more in smartphones"
  }, {
    title: "Computer",
    img: "https://static.javatpoint.com/computer/images/what-is-a-computer-system.png",
    button: "Show more in computer"
  }, {
    title: "Home appliance",
    img: "https://blog.hardwarepasal.com/wp-content/uploads/2022/07/cdit.jpg",
    button: "Show more in appliance"
  }, {
    title: "TV",
    img: "https://www.lg.com/in/images/tvs/md07582739/gallery/32LQ643bpta-vD-06.jpg",
    button: "Show more in TV"
  },]
}
