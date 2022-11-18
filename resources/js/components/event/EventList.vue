<template>
    <div class="row">
        <div class="form-inline col-3">
            <!-- <label class="sr-only" for="filter">Filter Data</label> -->
            <select name="filter" class="form-control form-select form-select-sm mb-2" v-model="params.filter" placeholder="Filter Data">
                <option value="">Filter Data</option>
                <option value="upcoming">Upcoming</option>
                <option value="finished">Finished</option>
                <option value="running">Running</option>
                <option value="within_7">Within 7 Days</option>
                <option value="before_7">Before 7 Days</option>
            </select>
        </div>
        <div class="col-9 mb-2 text-end">
            <router-link :to='{name:"event-add"}' class="btn btn-success btn-sm">Create</router-link>
        </div>
        <div class="col-12">
            <h2 class="text-center">Events List</h2>
 
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Start/End Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody v-if="events.length">
                <tr v-for="event in events" :key="event.id">
                    <td>{{ event.name }}</td>
                    <td>{{`${event.start_date} to ${event.end_date}` }}</td>
                    <td><span class="badge rounded-pill bg-success">{{ event.status }}</span></td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'event-edit', params: { id: event.id }}" class="btn btn-info btn-sm">Edit</router-link>&nbsp;&nbsp;
                            <button class="btn btn-danger btn-sm" @click="deleteEvent(event.id)">Delete</button>
                        </div>
                    </td>
                </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" class="text-center">No Data Available</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
 
<script>

    export default {
        name: 'EventList',
        components: {},
        data() {
            return {
                events: [],
                uri: '/api/events',
                params: {
                    filter : '',
                    per_page: 10,
                },

            };
        },
        watch: {
            params:{
                handler(){
                    this.fetchData();
                },
                deep:true
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            deleteEvent(id) { 
                this.axios
                    .delete(`${this.uri}/${id}`)
                    .then(response => {
                        let i = this.events.map(data => data.id).indexOf(id);
                        this.events.splice(i, 1)
                    });
            },
            fetchData(){
                this.axios
                    .get(this.uri,{params:this.params})
                    .then(response => {
                        let {data} = response.data;
                        this.events = data;
                    });
            }
        }
    }
</script>