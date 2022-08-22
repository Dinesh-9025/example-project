/* eslint-disable */
<template>
  <!-- Meeting Tab  -->

  <div class="col-sm-12">
    <div class="card-header" style="display: flex; justify-content: end">
      <input
        id="meeting"
        name="das_eng_search"
        placeholder="Search by Meeting ID"
        type="number"
        value=""
        class="form-control"
        style="width: 200px; display: flex; justify-content: end"
      />
    </div>

  <!-- Add Popup -->

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@fat"
    >
      Add Tasks
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">ADD NEW TASKS</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form v-on:Submit.prevent="submitForm">
              <div class="mb-3">
                <div class="dropdown">
                <label for="category" class="col-form-label"
                  >Category_Id:</label
                >
                <select _ngcontent-wmi-c18="" class="form-control ng-pristine ng-valid ng-touched" name="category" required="" v-model="form.category">
                <option
                    v-for="(item, index) in user_task"
                    :key="index"
                    :value= "item.category_title"
                    >
                    {{ item.category_title }}
                    </option>
                  </select>
              </div> 
                <!-- <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="category" required="" type="text" v-model="form.category"> -->
               <div class="mb-3">
                <label for="name" class="col-form-label"
                  >Name:</label
                >
                <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="name" required="" type="text" v-model="form.name">
               </div>
               <div class="mb-3">
                <label for="status" class="col-form-label"
                  >Status:</label
                >
                <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="status" required="" type="number" v-model="form.status">
               </div>
               <div class="mb-3">
                <label for="startdate" class="col-form-label"
                  >Assign a start date</label
                >
                 <datepicker
                  name = "startdate"
                  input _ngcontent-ttp-c17=""
                  placeholder="Start date"
                  readonly="true"
                  required=""
                  type="text"
                  v-model="form.startdate"
                 />
               </div>
               <div class="mb-3">
                <label for="duedate" class="col-form-label"
                  >Assign a completed Date</label
                >
                 <datepicker
                  name = "duedate"
                  input _ngcontent-ttp-c17=""
                  placeholder="complete date"
                  readonly="true"
                  required=""
                  type="text"
                  v-model="form.duedate"
                 />
               </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="submitForm">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <!--Table Data -->
  
      <div class="p-4" id="app" v-if="user && user.length!=0">
      <table class="table table-bordered table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>ToAssinee</th>
            <th>Start_date</th>
            <th>Complete Date</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in user" :key="index">
            <td v-text = item.id></td>
            <td> {{ item && item.category_id && item.category_id.category_title ?  item.category_id.category_title : '---' }}</td>
            <td v-text = item.userId.fullName></td>
            <td v-text = item.active_status></td>
            <td v-text = item.userId.email></td>
            <td v-text = item.createdAt></td>
            <td v-text = item.updatedAt></td>
            <td>
              <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalEdit"
                data-bs-whatever="@mdo" @click="Edit(item)" title="Edit" data-toggle="tooltip"
                ><i class="material-icons">&#xE254;</i></a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <!-- <button class="btn" type="button" :disabled="listPage === 1" @click="changePage('prev')"> Prev</button>
        <button class="btn" type="button" :disabled="user&& user.length < 3" @click="changePage('next')"> Next >></button> -->
      
      <!-- <paginate
      :page-count= "4"
      :click-handler="getusers"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
      </paginate> -->

    <!-- <v-pagination
      v-if="user && user.length != 0"
      v-model="listPage"
      :pages="totalCount"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
      listPage;
      getusers();
      "/> -->

      <!-- <pagination v-model= "listPage" :records= totalCount :per-page= listLimit @paginate="getusers"/> -->
      
      <!-- <VuePaginationTw
      :totalItems="20"
      :currentPage="1"
      :perPage="6"
      @pageChanged="getusers"
      :goButton="false"
      styled="centered"
      borderActiveColor="border-red-500"
      borderTextActiveColor="text-red-500"
      /> -->

      <!-- <sliding-pagination
      :current="listPage"
      :total= totalCount
      @page-change="getusers"
      ></sliding-pagination> -->

      <b-pagination
      pills size="sm"
      v-model="listPage"
      :total-rows="totalCount"
      :per-page="listLimit"
      aria-controls="my-table"
      @page-click = "getusers('',$event)"
    ></b-pagination>

      </div>
    </div>

    <!-- Edit Popup -->
     <div
      class="modal fade"
      id="exampleModalEdit"
      tabindex="-1"
      aria-labelledby="exampleModalEditLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalEditLabel">EDIT TASKS</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="id" class="col-form-label"
                  >ID</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="id" required="" type="number" v-model="EditForm.id">
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label"
                  >Category_Id</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="category" required="" type="text" v-model="EditForm.category">
               </div>
              <div class="mb-3">
                <label for="name" class="col-form-label"
                  >Name</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="name" required="" type="text" v-model="EditForm.name">
              
              <div class="mb-3">
                <label for="status" class="col-form-label"
                  >status</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="status" required="" type="number" v-model="EditForm.status">
              </div>
              <div class="mb-3">
                <label for="assine" class="col-form-label"
                  >To Assine</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="assine" required="" type="email" v-model="EditForm.assine">
              </div>

               <div class="mb-3">
                <label for="startdate" class="col-form-label"
                  >Assign a start date</label
                >
                 <datepicker
                  name = "startdate"
                  input _ngcontent-ttp-c17=""
                  placeholder="Start date"
                  readonly="true"
                  required=""
                  type="text"
                  v-model="EditForm.startdate"
                 />
               </div>
               <div class="mb-3" style="width:500%">
                <label for="duedate" class="col-form-label" 
                  >Assign a completed Date</label
                >
                 <datepicker
                  calendar-class ="datepicker"
                  name = "duedate"
                  input _ngcontent-ttp-c17=""
                  placeholder="complete date"
                  readonly="true"
                  required=""
                  type="text"
                  v-model="EditForm.duedate"
                 />
               </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="SaveForm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line
/* eslint-disable */

import HttpService from '../services/http.service';
import Datepicker from 'vuejs-datepicker';
// import VPagination from 'vue3-pagination';
// import paginate from 'vuejs-paginate'
// import Pagination from 'v-pagination-3'
// import VuePaginationTw from "vue-pagination-tw";
// import VuePaginationTw from "vue-pagination-tw";
// import SlidingPagination from 'vue-sliding-pagination'
import { PaginationPlugin } from 'bootstrap-vue'

export default {

  components: {
    Datepicker,
    PaginationPlugin
    // SlidingPagination
    // VuePaginationTw
    // Pagination
    // paginate
    // VPagination
  },
   data() {
        return { 
          user: [],
          user_task: [],
          listPage : 1,
          listLimit : 10,

          form: {
            category: "",
            name: "",
            status: "",
            startdate: "",
            duedate: "",
          },
          EditForm:{
            id: "",
            category: "",
            name: "",
            status: "",
            assine: "",
            startdate: "",
            duedate: ""
          }
        }
      },
        methods: {
          add_tasks() {
              HttpService.crud('get', '/v2/notesTasksCatList?category_type=task')
              .then((response) => {
               this.user_task= response.data.result
              console.log("dropdown", this.user_task)
              //  for (let i = 0; i < this.user_task.length; i++) {
              //   var temp = this.user_task[i];
              //     console.log(temp)
              //     console.log(temp.category_title)
              //     }

            })
          },
          getusers(page,event) {
            console.log("event",event)
            if(event != ''){
            if (event && event.target && event.target.ariaLabel && event.target.ariaLabel=="Go to first page"){
              this.listPage = 1
            } else if(event && event.target && event.target.ariaLabel && event.target.ariaLabel=="Go to previous page"){
              this.listPage--
            }
            else if(event && event.target && event.target.ariaLabel && event.target.ariaLabel=="Go to next page"){
              this.listPage++
            } else if(event && event.target && event.target.ariaLabel && event.target.ariaLabel=="Go to last page"){
              // this.listPage.target.activeElement.ariaLabel

              var findlast = this.totalCount/this.listLimit
                console.log("last",findlast)
                this.listPage = findlast

              // if(findlast % 1!==0 ){
              //   //this.listPage
              //   console.log("hii")

              //   if(findlast % 1===0){
                  
              //   }
             // }
  
            }
            else {  
            let p = event.target.ariaPosInSet
            this.listPage = p
            console.log("p",p)  
            }
            }
            // this.listPage = page 
              HttpService.crud('get', '/v2/noteslist?page='+ this.listPage + '&limit=' + this.listLimit)
              .then((response) => {
              this.totalCount = response.data.count
              this.user = response.data.result
              console.log("tasks",this.user);
              // console.log("totalCount",this.totalCount);
            })
          },
        submitForm() {
            HttpService.crud('post','/v2/tasksCreate', this.form)
            .then((res) => {
                console.log("response", res)
                console.log("taddform", this.form)
            })
        },
         Edit(item) {
          // console.log("tasksitem",item);
          this.EditForm.id = item.id;
          this.EditForm.category = item.category_id.category_title;
          this.EditForm.name = item.userId.fullName;
          this.EditForm.status = item.active_status;
          this.EditForm.assine = item.userId.email;
          this.EditForm.startdate = item.createdAt;
          this.EditForm.duedate = item.updatedAt;
          console.log("saveform", this.EditForm)
          },

        SaveForm() {
             HttpService.crud('post', '/v2/tasksUpdate',this.EditForm)
             .then((res) => {
                console.log("response", res)
                console.log("saveform", this.EditForm)
            })
        },
        //  clickCallback () {

        //   console.log('type', type)

        //   if(prev-text === 'Prev'){
        //       this.listPage--
        //   } else {
        //       this.listPage++
        //   }
        //   this.getusers();
        //   console.log("next", this.listPage);
        // },

        },
        mounted() {
          this.getusers(1,'');
          this.add_tasks();
        },
};
</script>

<style scoped>

</style>
