 // Bài tập function buổi 3
            // Bài 1
            function copy(x) {    
                let space = "";
                for(let i = 0; i < 10; i++){
                    space += `${x}-`;
                }
                document.write(space.slice(0,-1));
            }

        // Bài 2
            function giaiThua(x) {
                let giai_thua = 1;
                for(let i = 1 ; i <= x; i++) {
                    giai_thua = giai_thua*i;
                }
               return giai_thua;
            }

        // Bài 3
            function daoNguoc(x) {
                let dao_nguoc = x;
                for(let i = x.length - 1; i >= 0; i--) {
                    dao_nguoc += dao_nguoc[i];
                }
                document.write(dao_nguoc.slice(x.length));
            }

        // Bài 6
            function mauSac() {
                let j = 0;
                for(let i = 1 ; i <= 100 ; i += 2) {
                    document.write(
                        '<p style= "color: red;">'+ i + '</p>',
                        '<p style= "color: blue;">'+ (j += 2) + '</p>'
                    );
                }
            }
