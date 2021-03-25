"use strict";

const app = new Vue(
    {
        el: "#app",
        data: {
            images: [
                "https://wallpapercave.com/wp/3jHyPCx.jpg",
                "https://wallpapercave.com/wp/wp8727056.jpg",
                "https://wallpapercave.com/uwp/uwp112289.jpeg",
                "https://wallpapercave.com/wp/wp5226887.jpg",
                "https://wallpapercave.com/uwp/uwp118964.jpeg"
            ],
            currentIndex: 0,
        },
        methods: {
            next: function() {
                this.currentIndex += 1;
                
                if (this.currentIndex == this.images.length) {
                    this.currentIndex = 0;
                }
            },
            prev: function() {
                this.currentIndex -= 1;
                
                if (this.currentIndex < 0) {
                    this.currentIndex = this.images.length - 1;
                }
            }
        }
    }
);