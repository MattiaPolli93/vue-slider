"use strict";

// Create a Slider

const app = new Vue(
    {
        el: "#app",
        data: {
            images: [
                {
                    image: "https://wallpapercave.com/wp/3jHyPCx.jpg",
                    name: "New York City"
                },
                {
                    image: "https://wallpapercave.com/wp/wp8727056.jpg",
                    name: "Rome"
                },
                {
                    image: "https://wallpapercave.com/wp/wp7868527.jpg",
                    name: "London"
                },
                {
                    image: "https://wallpapercave.com/wp/wp5226887.jpg",
                    name: "Moscow"
                },
                {
                    image: "https://wallpapercave.com/uwp/uwp118964.jpeg",
                    name: "Sydney"
                }
            ],
            currentIndex: 0,
            autoplay: null
        },
        mounted: function() {
            this.autoplay = setInterval(this.next, 2500);

            const component = this;

            window.addEventListener("keydown", function(event) {
                
                if (event.which == 37 || event.which == 8) {
                    component.clickPrev();
                } else if (event.which == 39 || event.which == 13) {
                    component.clickNext();
                }
            });
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
            },
            clickNext: function() {
                this.next();
                clearInterval(this.autoplay);
            },
            clickPrev: function() {
                this.prev();
                clearInterval(this.autoplay);
            }
        }
    }
);