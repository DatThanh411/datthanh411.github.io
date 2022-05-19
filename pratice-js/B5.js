  // Bài tập function buổi 5
                // Bài 1
                function ngayThang() {
                    let now = new Date();
                    let date = now.getDate();
                    let month = now.getMonth() + 1;
                    let year = now.getFullYear();

                    let all = `${date}` + `-${month}` + `-${year}`;

                    let mua = "";
                    if(month == 1 || month == 2 || month == 3 ) {
                        mua = "Mùa Xuân";
                    }
                    else if(month == 4 || month == 5 || month == 6) {
                        mua = "Mùa Hè";
                    }
                    else if(month == 7 || month == 8 || month == 9) {
                        mua = "Mùa Thu";
                    }
                    else {
                        mua = "Mùa Đông";
                    }

                    document.write("<h1>" + all + " - " + mua + "</h1>");
                }

                // Bài 2
                function sapXep(x) {
                    x.sort();
                    let order = 0;
                    for(let i = 0; i < x.length; i++) {
                        order++;
                        document.write("<h1>" + order + "." + x[i] + "</h1>");
                    }
                }

                // Bài 3
                function soChan(x) {
                    let newNum = [];
                    for(let i = 0; i < x.length; i++) {
                        if(x[i] % 2 === 0) {
                            newNum.push(x[i]);
                        }
                    }
                    return newNum;
                }

                // Bài 4
                function soNhoNhat(x) {
                    let min = x;
                    min.sort(function(a,b){return a - b});

                    return min[0];
                }