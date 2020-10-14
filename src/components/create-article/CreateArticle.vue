<template src="./CreateArticle.html"></template>

<script>
//import components
import Sidebar from "../Sidebar";

//models
import Article from "../../models/Article";

import axios from "axios"; // used to make HTTP requests from node. js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
import Global from "../../Global";

//validates lib
import { required, minLength } from "vuelidate/lib/validators";

//alerts
import swal from "sweetalert";

export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      article: new Article("", "", null),
      file: null,
      url: Global.url,
      submitted: false,
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
    console.log(this.article);
  },
  methods: {
    //Ajax petitions
    saveArticle() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article) //post petition to save
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
                        "Article created",
                        "Article created successfully",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                      //show error alert
                      swal(
                        "Article created failed",
                        "The article has been successfully created",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal(
                  "Article created successfully",
                  "The article created has not image",
                  "info"
                );

                this.article = res.data.article;
                this.$router.push("/blog");
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

<style scoped>
#input-img {
  padding: 1rem;
}
input[type="file"] {
  border: 1px solid #ccc;
  transition: 200ms all;
  margin: 1rem;
}
</style>