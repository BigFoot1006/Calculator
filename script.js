const lis = document.querySelectorAll("ul li");

        lis.forEach(node => {
            node.addEventListener('mousedown', function(event) {
                event.preventDefault();
                const value = node.innerText.trim();
                const $result = document.querySelector(".result");

                if($result.innerText == '0' || $result.innerText == 'undefined' || $result.innerText == 'Infinity') {
                    $result.innerText = value;
                    return true;
                }

                if(value == "=") {
                    let solution = eval($result.innerText);
                    $result.innerText = solution;
                    return true;
                }

                if(value.toLowerCase() == 'c') {
                    $result.innerText = '';
                    return true;
                }

                $result.append(value);
                console.log(value);
            });
        });
