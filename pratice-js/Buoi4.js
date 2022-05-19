// Bài tập function buổi 4
                // Bài 1
                function timSoLonNhat(a,b) {
                    if (typeof a == "number" && typeof b == "number") {
                        if (a > b) {
                            return a;
                        } 
                        else {
                            return b;
                        }
                    } 
                    else {
                        console.log("Tham so truyen vao khong hop le");
                    }
                }

                // Bài 2
                function tinhGiaiThua(x) {
                    if (x >= 0 && Number.isInteger(x)) {
                        let giai_thua = giaiThua(x);
                        return giai_thua;
                    } 
                    else {
                        return "Tham so truyen vao khong hop le"; 
                    }
                }

                // Bài 3
                function diem(x) {
                    if (x >= 8.5) {
                        return "Điểm A";
                    }
                    else if (x >= 7) {
                        return "Điểm B";
                    } 
                    else if (x >= 5.5) {
                        return "Điểm C";
                    } 
                    else if (x >= 4) {
                        return "Điểm D";
                    } 
                    else {
                        return "Điểm F";
                    } 
                }
                // Bài 4
                function translate(x) {
                    let xin_chao = "Hello";
                        if(x == "de"){
                            return "Hallo";
                        }
                        if(x == "fr"){
                            return "Bonjour";
                        }
                        if(x == "jp"){
                            return "こんにちは";
                        }
                        if(x == "ru"){
                            return "Привет";
                        }
                        if(x == "kr"){
                            return "여보세요";
                        }
                        return "Xin chào";
                }