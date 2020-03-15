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
                vehicle_type:"",
                actions:true
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
        newP(){
            this.vp.id = this.vehicles_list.length 
            this.vehicles_list.push(this.vp)
            console.log(this.vehicles_list)
        }
    }
};