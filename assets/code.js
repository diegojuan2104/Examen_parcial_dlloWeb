export default {
    data() {
        return {

            vp: {    
                id: "",
                plaque:"",
                color:"",
                brand:"",
                city_plaque:"",
                entrance_datetime:"", 
            },

            vehicle_type: [
                { value: "Car", text: "Car" },
                { value: "Motorcycle", text: "Motorcycle" },
                { value: "Bicycle", text: "Bicycle" },
                { value: "Truck", text: "Truck" }
            ],

            vehicles_list: [
            ],
        };
    },

   

    methods: {
        newp(){
            this.vehicles_list.push(vp)
            console.log(vehicles_list)
        }
    }
};