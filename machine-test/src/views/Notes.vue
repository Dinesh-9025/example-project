/* eslint-disable */
<template>
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

  <!-- Add Popup   -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@mdo"
    >
      Add Notes
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
            <h5 class="modal-title" id="exampleModalLabel" onclick="add_notes()">ADD NEW NOTES</h5>
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
               <label for="meeting" class="col-form-label"
                  >Meeting</label
                >
               <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="meeting" required="" type="number" v-model="form.meeting">
              </div>
              <div class="mb-3">
                <div class="dropdown">
                <label for="category" class="col-form-label"
                  >Category</label
                >
              <select _ngcontent-wmi-c18="" class="form-control ng-pristine ng-valid ng-touched" name="category" required="" v-model="form.category">
              <option
                v-for="(item, index) in user_notes"
                :key="index"
                :value= "item.category_title"
                >
                {{ item.category_title }}
                </option>
                 </select>
               </div>
            </div>
            <div class="mb-3">
               <label for="note_desc" class="col-form-label"
                  >Note_desc</label
                >
               <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="note_desc" required="" type="text" v-model="form.note_desc">
              </div>
              <div>
              <label for="updated_fromc" class="col-form-label"
                  >Updated_from</label
                >
               <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="updated_from" required="" type="text" v-model="form.updated_from">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="submitForm">Submit</button>
          </div>
        </div>
      </div>
    </div>

  <!-- Table -->
    <!-- <div class="table-wrapper-scroll-y my-custom-scrollbar" id="app">
      <table class="table table-bordered table-dark table-striped mb-0"> -->

        <div class="p-4" id="app" v-on:scroll="doScroll">
        <table class="table table-bordered table-dark table-striped">
        <thead>
          <tr >
            <th>ID</th>
            <th>Category.id</th>
            <th>Note_desc</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody style="height:50px">
          <tr v-for="(item,index) in user" :key="index">
            <td v-text = item.id></td>
            <td> {{ item && item.category_id && item.category_id.category_title ? item.category_id.category_title : '---' }}</td>
            <td v-text = item.note_desc></td>
            <!-- <td v-text = item.createdAt></td> -->
            
            <td>
            <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalEdit"
                data-bs-whatever="@mdo" @click="Edit(item)" title="Edit" data-toggle="tooltip"
                ><i class="material-icons">&#xE254;</i></a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <div> -->
      <!-- <button class="btn" type="button" :disabled="listPage === 1" @click="changePage('prev')"> Prev</button>
      <button class="btn" type="button" :disabled="user&& user.length < 2" @click="changePage('next')"> Next >></button> -->
      <!-- <v-scroll-paginate :fetch="fetch">
        <template #spinner>
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </template>       
      </v-scroll-paginate>
      v-infinite-scroll="getusers" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
      </div> -->

    <!-- <InfiniteScroll
      v-if="user.length"
      direction="up"
      auto="in-viewport"
      :head="user[0] && user[0].id"
      :next="prev"
      :handler="loadPrevPage"
    /> -->

     <!-- <infinite-table
      :data="user"
      rowHeight="42"
      @page-scroll = "getusers('',$event)">
      </infinite-table> -->
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
            <h5 class="modal-title" id="exampleModalEditLabel">EDIT NOTES</h5>
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
                  >Id</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="id" required="" type="number" v-model="EditForm.id">
              </div>
              
              <div class="mb-3">
                <label for="category" class="col-form-label"
                  >Category_Id</label
                >
                 <!-- <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="category" required="" type="text" v-model="EditForm.category"> -->
               <div class="dropdown">
                <select _ngcontent-wmi-c18="" class="form-control ng-pristine ng-valid ng-touched" name="category" required="" v-model="EditForm.category">
                <option
                    v-for="(item, index) in user_notes"
                    :key="index"
                    :value= "item.category_title"
                    >
                    {{ item.category_title }}
                    </option>
                   </select>
              </div>
              </div>
               <div class="mb-3">
               <div class="mb-3">
                <label for="note_desc" class="col-form-label"
                  >Note_desc</label
                >
              <input _ngcontent-ttp-c17="" class="form-control ng-pristine ng-invalid ng-touched" name="note_desc" required="" type="text" v-model="EditForm.note_desc">
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
import Datepicker from 'vuejs-datepicker'
// import handlePagination from '../services/handlePagination'
// import VuePaginateScroll from "vue-paginate-scroll";
// import Paginate from 'v-scroll-paginate';
// import InfiniteScroll from '@jfm/vue-infinite-scroll'
// import InfiniteTable from 'vue-infinite-scroll-table'
// import infiniteScroll from 'vue-infinite-scroll'
// import MDBDatatable from "mdb-vue-ui-kit";
// import VueScrollingTable from "vue-scrolling-table"

export default {
  
  components: {
    Datepicker,
    // VueScrollingTable
   // MDBDatatable
    //InfiniteTable
    // InfiniteScroll
    // infiniteScroll
    // Paginate
    // VuePaginateScroll
  },

      data() {
        return { 
          user: [],
          user_notes: [],
          listPage : 1,
          listLimit : 10,
          loader: false,

           form: {
            meeting: "",
            category: "",
            note_desc: "",
            updated_from: ""
          },
            EditForm: {
            id: "",
            category: "",
            note_desc: ""
         },
        }
      },
     
        methods: {
          add_notes() {
          HttpService.crud('get', '/v2/notesTasksCatList?category_type=notes')
          .then((response) => {
          this.user_notes = response.data.result
          // console.log(this.user_notes)
          //  for (let i = 0; i < user_notes.length; i++) {
          //       var temp = user_notes[i];
          //         console.log(temp)
          //         console.log(temp.category_title)
          //         }
          })
          },
          doScroll(e) {
            console.log("event", e)
           if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
              this.listPage = this.listPage + 1;
              this.getusers(e);
              
            //   onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
            //   console.log('scroll notify');
            // if (scrollTop + clientHeight >= scrollHeight) {
            //     console.log("bottom scroll");
            // this.page_no = this.page_no + 1;
            // this.notificationCountFun();
            //   }
            // },
            }
          },
          getusers(e) {
            
            this.loader = true;
              HttpService.crud('get','/v2/noteslist?page='+ this.listPage  +'&limit=' + this.listLimit)
              .then((response) => {
              this.user = this.listPage == 1 ? response.data.result : [ ...this.user, ...response.data.result];
              this.totalCount = response.data.count
              this.loader = false;
              console.log("notestable",this.user)
              console.log("toatlCount",this.totalCount)
              })
              // console.log("event",e)
          },
         submitForm() {
          console.log('add submit')
            HttpService.crud('post','/v2/notesCreate', this.form)
            .then((res) => {
                console.log("response", res)
                console.log("addform", this.form)
            })
        },
         Edit(item) {
          // console.log("Notesitem",item);
          this.EditForm.id = item.id;
          this.EditForm.category = item.category_id;
          this.EditForm.note_desc = item.note_desc;
          // console.log("SaveForm", this.EditForm)
          },
        SaveForm() {
            HttpService.crud('post', '/v2/notesUpdate',this.EditForm)
             .then((res) => {
                console.log("response", res)
                // console.log("SaveForm", this.EditForm)
            })
        },
        },
         mounted() {
          this.getusers();
          this.add_notes();
        },
};

</script>
<style scoped>
/* .my-custom-scrollbar {
position: relative;
height: 500px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
} */
.p-4 {
  width: 1000px;
  height: 680px;
  overflow: scroll;
}
</style>