
            // Bài tập mảng + object buổi 6
                // Bài 1
                function kiemTra(x) {
                
                    if( x["name"] != "" && x["name"].length <= 20 && 
                        x["pass"].length >= 6 && x["pass"].length <= 32 && 
                        x["confirm"] == x["pass"] ) {
                            return "Pass";
                    }
                    else{
                        return "Fail";
                    }
                }
                
                // Bài 2
                function maxLength(x) {
                    x.sort(function(a,b){return b.length - a.length});
                    let longest = [];
                    for(let i = 0; i < x.length; i++) {
                        if(x[i].length >= x[0].length) {
                            longest.push(x[i]);
                        }
                        else {
                            break;
                        }
                    }
                    return longest;
                }

                // Bài 3
                function infoStudents(x) {
                    let infoStd = x;
                    let avg;
                    let Avgage = 0;
                    for(let i = 0; i < infoStd.length; i++) {
                        Avgage += infoStd[i]['age'];
                    }
                    avg = (Avgage/infoStd.length);
                    return Math.floor(avg);
                }
                