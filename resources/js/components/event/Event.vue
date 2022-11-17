<template>
    <div>
        <h3 class="text-center">Create Event</h3>
        <div class="row">
            <form @submit.prevent="submitForm" class="form-inline">
                <div class="form-group mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="event.name">
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label>Start Date</label>
                        <input type="date" class="form-control" v-model="event.start_date">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label>End Date</label>
                        <input type="date" class="form-control" v-model="event.end_date">
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
    export default {
        data() {
            return {
                event: {},
                uri: '/api/events',
                id: null,
            }
        },
        mounted(){
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
            submitForm() {
                if(this.id){
                    this.axios
                    .patch(`${this.uri}/${this.id}`, this.event)
                    .then((res) => {
                        // this.flash('success','Event Updated Successfully');
                    });
                }else{
                    this.axios
                    .post(this.uri, this.event)
                    .then(response => {
                        // this.flash('success','Event Created Successfully')
                        this.$router.push({ name: 'event-add' });

                    })
                    .catch(err => {
                        // this.flash('error',err);
                    });
                }
            }
        }
    }
</script>