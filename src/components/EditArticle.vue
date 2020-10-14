<template src="./create-article/CreateArticle.html"></template>

<script>
//import components
import Sidebar from "./Sidebar";

//models
import Article from "../models/Article";

import axios from "axios"; // used to make HTTP requests from node. js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
import Global from "../Global";

//validates lib
import { required, minLength } from "vuelidate/lib/validators";

//alerts
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      article: new Article("", "", null),
      file: null,
      submitted: false,
      isEdit: true,
      url: Global.url,
    };
  },
  validations: {
    article: {
      title: {
        required,
        minLength: minLength(4),
      },
      content: {
        required,
        minLength: minLength(10),
      },
    },
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    //Ajax petitions
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
        console.log(this.article);
      });
    },
    saveArticle() {
      this.submitted = true;
      let articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article) //post petition to save
          .then((res) => {
            if (res.data.status === "success") {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name); //upload image

                let articleId = res.data.article._id;

                axios //save image
                  .post(this.url + "/upload-image/" + articleId, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal(
                        //alert
                        "Article edited",
                        "Article edited successfully",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/article/" + articleId);
                    } else {
                      //show error alert
                      swal(
                        "Article edited failed",
                        "The article has been successfully edited",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal(
                  "Article edited successfully",
                  "The article edited has not modified image",
                  "info"
                );

                this.article = res.data.article;
                this.$router.push("/article/" + articleId);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>

<style></style>