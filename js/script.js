const vue = new Vue({
    el: "#root",
    data: {
        images: [
            {
                url: "img/tuerredda.jpg",
                name: "Tuerredda"
            },
            {
                url: "img/isArutas.jpg",
                name: "Is Arutas"
            },
            {
                url: "img/portoOttiolu.jpg",
                name: "Porto Ottiolu"
            },
            {
                url: "img/calaGoloritze.jpg",
                name: "Cala Goloritze"
            },
            {
                url: "img/laPelosa.jpg",
                name: "La Pelosa"
            },
        ],
        imageIndex: 1
    },
    mounted() { 
        this.autoPlay() 
    },
    methods: {
        imageIndexUp: function () {
            this.imageIndex++;
            if ( this.imageIndex == this.images.length) {
                this.imageIndex = 0;
            }
        },
        imageIndexDown: function () {
            this.imageIndex--;
            if ( this.imageIndex == -1) {
                this.imageIndex = this.images.length - 1;
            }
        },
        moveToImage: function (index) {
            this.imageIndex = index;
        },
        autoPlay: function () {
            autoPlayImages = setInterval(
                () => {
                    this.imageIndex++;
                    if (this.imageIndex == 5) {
                        this.imageIndex = 0;
                    }
                },
                3000
            );
        },
        stopInterval: function () {
            clearInterval(autoPlayImages);
        }
    }
});