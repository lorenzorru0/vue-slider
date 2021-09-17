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
        }
    }
});