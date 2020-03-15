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

            vehicles_list_history: [
            ],
        };
    },

    mounted(){
        this.created();
      },


    methods: {
        created() {
            let list1 = JSON.parse(localStorage.getItem("vehicles_list_history"));
            let list2 = JSON.parse(localStorage.getItem("vehicles_list"));
            if (list1) {
              this.vehicles_list = list1
            } 

            if (list2) {
                this.vehicles_list_history = list2
              }

          },
        newP(){

            let exists = this.vehicles_list.find(
                vp => vp.plaque == this.vp.plaque
                
              );

              if(exists){ 
                  alert("This vehicle place is already registered");
                  this.vp.plaque = ""
               }else{
                this.vp.id = this.vehicles_list_history.length 
                this.vehicles_list.push(this.vp)
                this.vehicles_list_history.push(this.vp)

                localStorage.setItem("vehicles_list", JSON.stringify(this.vehicles_list))
                localStorage.setItem("vehicles_list_history", JSON.stringify(this.vehicles_list_history))

                console.log(this.vehicles_list)
                this.cleanFields()
                alert("Successfull register")
               }
        },

        cleanFields(){
            this.vp = {
                id: "",
                plaque:"",
                color:"",
                brand:"",
                city_plaque:"",
                entrance_datetime:"", 
                vehicle_type:"",
                actions:true
            }
        },

        ddelete({ item }) {
            let position = this.vehicles_list.findIndex(
              vp => vp.plaque == item.plaque
            );
            this.vehicles_list.splice(position, 1);
            alert("Deleted")
            localStorage.setItem("vehicles_list", JSON.stringify(this.vehicles_list))
          },
          upload({ item }) {
            let vp = this.vehicles_list.find(
              evaluacion => evaluacion.idEvaluacion == item.idEvaluacion
            );
            this.edit = true;
            this.vp = Object.assign({}, vp);
          },

          update() {
            let position = this.vehicles_list.findIndex(
              vp => vp.id == this.vp.id
            );
            this.vehicles_list.splice(position, 1, this.vp);
            localStorage.setItem("vehicles_list", JSON.stringify(this.vehicles_list))
            this.cleanFields()
            this.edit = false
            alert("Updated")
          },

          letOut({item}){
            
          }
    }
};