var mydata={
  keyword: "",
  totalTime: 0,
  navbar: [
    {
      logo: "https://i.imgur.com/OhBq4zH.png",
      nav: "https://i.imgur.com/jKXTCRl.png",
      rent: "https://i.imgur.com/znfA2KH.png",
      message: "https://i.imgur.com/SaW9Uil.png",
      file: "https://i.imgur.com/zgXZBlp.png",
      member: "https://i.imgur.com/llmt51V.png",
      activity: "https://i.imgur.com/dn2jmPF.png",
      luggage: "https://i.imgur.com/68o4WZQ.png",
      storage: "https://i.imgur.com/imUwLvG.png"
      
    }
  ],
  spaces: [
    {
      title: "樂活咖啡",
      tags: ["插座","活動","10件行李","咖啡","投影設備","20人","電梯","隔音牆","品酒會","監視系統"],
      address: "台中市南屯區文昌街399號",
      cover: "https://i.imgur.com/2U6HSOd.jpg",
      activityPrice: 200,
      luggagePrice: 30,
      storagePrice: 50,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit",
    }
  ]
}

var vm = new Vue({
  el: "#app",
  data: mydata
})