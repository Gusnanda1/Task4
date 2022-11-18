




function renderContent() {

    let project = document.getElementById("project").value
    let description = document.getElementById("description").value
    let node_js = document.querySelector("#node_js")
    let react_js = document.querySelector("#react_js")
    let next_js = document.querySelector("#next_js")
    let typescript = document.querySelector("#typescript")
    let img_id = document.getElementById("img_id").files



    if (project == "") {

        alert("kolom project name harus di isi")
    }

    else if (description == "") {
        alert("kolom description harus diisi")
    }

    else {

        if (node_js.checked == true && next_js.checked == true && react_js.checked == true & typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])
            document.getElementById("content").innerHTML += `<a href="blog.html" style="outline-style:none; color: black; text-decoration: none;"> <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="react_js.png" style="width: 30px;">
            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>
        </a>`

        }

        else if (node_js.checked == true && next_js.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="android.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (node_js.checked == true && react_js.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="react_.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (react_js.checked == true && next_js.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="react_.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (node.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (next_js.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (react_js.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>

            <img class="icon" src="react_js.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (node_js.checked == true && react_js.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>
            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="react_js.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (next_js.checked == true && react_js.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>
            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="react_js.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (next_js.checked == true && node_js.checked == true && typescript.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>
            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="node_js.png" style="width: 30px;">
            <img class="icon" src="typescript.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (next_js.checked == true && react_js.checked == true && node_js.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>
            <img class="icon" src="android.png" style="width: 30px;">
            <img class="icon" src="react_js.png" style="width: 30px;">
            <img class="icon" src="node_js.png" style="width: 30px;">
          
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }

        else if (next_js.checked == true) {
            let gambar = URL.createObjectURL(img_id[0])

            document.getElementById("content").innerHTML += ` <div
            style="width: 40%; margin-right: 20px; box-shadow: 1px 1px 10px; height:max-content; padding-bottom: 15px; border-radius: 10px;">

            <img class="poto_project" src="${gambar}"
                style="width: 95%; border-radius: 10px; display: block; margin-top: 10px; height: 220px;">
            <h3 style="font-family:Arial, Helvetica, sans-serif ; margin-left: 10px; ">
              ${project}
            </h3>
            <p
                style="font-family:sans-serif; text-align: justify; margin-left: 10px; margin-right: 100px; margin-top: 15px;">
                App that use for dumbways student, it was
                deployed and can downloaded on playstore.
                ${description}
                
            </p>
            <img class="icon" src="android.png" style="width: 30px;">
                     
            <div class="button">
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; margin-right: 5px; color: white; background-color: black;">edit</button>
                <button
                    style="width: 47%; border-radius: 10px; height: 30px; color: white; background-color: black;">delete</button>
            </div>
        </div>`
        }
        else {
            alert('gagal')
        }
    }




}