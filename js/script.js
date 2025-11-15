function add() {
                let tugas = document.getElementById("tugas").value;
                let tanggal = document.getElementById("tanggal").value;

                if (tugas === "" || tanggal === "") {
                    alert("tolong isi semua data")
                    return;
                }

                let item = `${tugas} — ${tanggal} `;

                let li = document.createElement("li")
                li.innerText = item;

                document.getElementById("hayo").appendChild(li);

                document.getElementById("tugas").value = "";
                document.getElementById("tanggal").value = "";

            } 