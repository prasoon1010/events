<template>
    <div>
        <h3 class="text-center">Create Event</h3>
        <div class="row">
            <form @submit.prevent="submitForm" class="form-inline" id="event-form">
                <div class="form-group mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="event.name" required>
                    <span class="text-danger mt-2" v-if="msg.name">{{msg.name}}</span>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label>Start Date</label>
                        <input type="date" class="form-control" v-model="event.start_date" required>
                        <span class="text-danger mt-2" v-if="msg.start_date">{{msg.start_date}}</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label>End Date</label>
                        <input type="date" class="form-control" v-model="event.end_date" required>
                        <span class="text-danger mt-2" v-if="msg.end_date">{{msg.end_date}}</span>
                    </div>
                </div>
                
                <div class="form-group mb-3">
                    <label>Description</label>
                    <textarea type="text" class="form-control" v-model="event.description"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-sm">Create</button>
                    <!-- <button type="reset" class="btn btn-danger btn-sm">Cancel</button> -->
                <router-link :to='{name:"event-list"}' class="btn btn-danger btn-sm">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
 
<script>
    import "vue-toastification/dist/index.css";
    export default {
        data() {
            return {
                event: {},
                uri: '/api/events',
                id: null,
                msg: [],
            }
        },
        watch: {
            event: {
                handler(newVal){
                    this.validateForm();
                },
                deep: true,
            }
        },
        mounted(){
            this.astrickRequiredFields();
            if(this.$route.params.id){
                this.id = this.$route.params.id;
                this.axios
                    .get(`${this.uri}/${this.$route.params.id}/edit`)
                    .then((res) => {
                        this.event = res.data;
                    });
            }
        },
        methods: {
            validateForm(){
                this.validateName(this.event.name);
                this.validateStartDate(this.event.start_date);
                this.validateEndDate(this.event.end_date);
            },
            validateName(name){
                if(!name){
                    this.msg['name'] = 'Name is Required';
                    this.isFormValid = false;
                    return;
                }
                this.msg['name'] = null;
            },
            validateStartDate(start_date){
                if(!start_date){
                    this.msg['start_date'] = 'Start Date is Required';
                    this.isFormValid = false;
                    return;
                }
                let date = new Date();
                let today_date = new Date().toJSON().slice(0, 10);
                if(start_date<today_date){
                    this.msg['start_date'] = 'Start Date must be greater or equal to today';
                    this.isFormValid = false;
                    return;
                }
                this.msg['start_date'] = null;
            },

            validateEndDate(end_date){
                if(!end_date){
                    this.msg['end_date'] = 'End Date is Required';
                    this.isFormValid = false;
                    return;
                }
                if(end_date<this.event.start_date){
                    this.msg['end_date'] = 'End Date must be greater than or equal to Start Date';
                    this.isFormValid = false;
                    return;
                }

                this.msg['end_date'] = null;
            },
            astrickRequiredFields(){
                let elements = document.querySelectorAll("#event-form input[required]");
                elements.forEach((item)=>{
                    item.previousElementSibling.classList.add('required');
                })
            },
            submitForm() {
                if(this.msg['name'] || this.msg['start_date'] || this.msg['end_date']){
                    this.$toast.error("Please Fill the form correctly", {
                        timeout: 2000,
                    });
                    return;
                }
                if(this.id){
                    this.axios
                    .patch(`${this.uri}/${this.id}`, this.event)
                    .then((res) => {
                        this.$toast.success("Event Updated Successfully", {
                            timeout: 2000,
                        });
                    }).catch((err) => {
                        this.$toast.error("Something went wrong", {
                            timeout: 2000,
                        });
                    });
                }else{
                    this.axios
                    .post(this.uri, this.event)
                    .then(response => {
                        this.$toast.success("Event Created Successfully", {
                            timeout: 2000,
                        });
                        this.$router.push({ name: 'event-list' });

                    })
                    .catch(err => {
                        this.$toast.error("Something went wrong", {
                            timeout: 2000,
                        });
                    });
                }
            }
        }
    }
</script>
<style>
.required::after{
    content: ' *';
    color: red;
}
</style>