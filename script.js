            var dateYear = new Date().getFullYear();
            var labels = [];
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var start = 5000;
            var additionalContribution = 100;
            var rate = 4;
            var year = parseInt(document.querySelector('#year').value);

            function starting() {
                for (let i = 0; i <= year; i++) {
                    let l = data1.push(start);
                }
                return data1;
            }
            starting();
            function contribution() {
                for (let i = 0; i <= year; i++) {
                    let c = additionalContribution * (i + 1);
                    let l = data2.push(c);
                }
                return data2;
            }
            contribution();
            function уarned() {
                let i = 0;
                let c = (((data1[i] + data2[i]) * rate) / 100);
                for (let i = 0; i <= year; i++) {
                    let l = data3.push(c);
                    c = (((data1[i] + data2[i]) * rate) / 100) + c;
                }
                return data3;
            }
            уarned();
            function years() {
                for (let i = 0; i <= year; i++) {
                    let c = dateYear + i;
                    let l = labels.push(c);
                }
                return labels;
            }
            years();

            function addStart(chart, label, data) {
                data1.fill(inputStart.value);
                dataPie[0] = inputStart.value;
                return data1;
            }

            var ctx = document.getElementById('canvas').getContext('2d');
            var myBar = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                            label: 'Начальная сумма',
                            backgroundColor: 
                                'rgba(255, 99, 132, 0.5)',
                            borderColor: 
                                'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            stack: 'Stack 0',
                            data: data1
                        }, {
                            label: 'Общие взносы',
                            backgroundColor: 
                                'rgba(54, 162, 235, 0.2)',
                            borderColor: 
                                'rgba(54, 162, 235, 1)',
                            
                            borderWidth: 1,
                            stack: 'Stack 0',
                            data: data2
                        }, {
                            label: 'Всего начисленных процентов',
                            backgroundColor: 
                                'rgba(255, 206, 86, 0.2)',
                            borderColor: 
                                'rgba(255, 206, 86, 1)',
                            borderWidth: 1,
                            stack: 'Stack 0',
                            data: data3
                        }]

                },
                options: {
                    title: {
                        display: true,
                        text: 'Рост инвестиций с течением времени'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                                stacked: true,
                            }],
                        yAxes: [{
                                stacked: true
                            }]
                    }
                }
            });
            var dataPie = [data1[0], data2[data2.length - 1], data3[data3.length - 1]];
            var ctx = document.getElementById('pie');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Начальная сумма', 'Общие взносы', 'Всего начисленных процентов'],
                    datasets: [{
                            label: '# of Votes',
                            data: dataPie,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    responsive: true
                }
            });
            var inputStart = document.getElementById('start');
            inputStart.addEventListener('change', function addData() {
                addStart();
                addRate();
                myChart.update();
                myBar.update();
            });
            var selectAdd = document.querySelectorAll('#select > option');
            var inputAdd = document.querySelector('#add');
            document.querySelector('#select').addEventListener('change', (e) => {
                let b = e.target.value;
                let a = inputAdd.value;
                data2.forEach((value1, index) => {
                    data2[index] = b * a * (index + 1);
                });
                addRate();
                dataPie[1] = data2[data2.length - 1];
                myBar.update();
                myChart.update();
            });
            inputAdd.addEventListener('change', function addContribution() {
                addContribution1();
                addRate();
                myBar.update();
                myChart.update();
            });

            function addContribution1() {
                let b;
                let c;
                for (var i = 0; i < selectAdd.length; i++) {
                    c = selectAdd[i].selected;
                    if (c) {
                        b = selectAdd[i].dataset.sel;
                    }
                }
                let a = inputAdd.value;
                data2.forEach((value1, index) => {
                    return  data2[index] = b * a * (index + 1), dataPie[1] = data2[data2.length - 1];
                });
            }
            var inputRate = document.querySelector('#rate');
            var chengYear = document.getElementById('year');
            inputRate.addEventListener('change', function () {
                addRate();
                myBar.update();
                myChart.update();
            });
            function addRate() {
                let a = inputStart.value;
                let rate = inputRate.value;
                let i = 0;
                let c = (((+a + data2[i]) * rate) / 100);
                for (let i = 0; i <= chengYear.value; i++) {
                    data3[i] = c;
                    c = (((+a + data2[i]) * rate) / 100) + c;
                }
                return data3, dataPie[2] = data3[data3.length - 1];
            }

            chengYear.addEventListener('change', function () {
                var addY = chengYear.value - data1.length + 1;
                console.log(addY);
                if (addY > 0) {
                    addYear(addY);
                } else {
                    deliteYear(Math.abs(addY));
                }
                myBar.update();
                myChart.update();
            });
            function addYear(addY) {
                for (let j = 0; j < addY; j++) {
                    let a = inputStart.value;
                    let b = +inputRate.value;
                    let wx = myBar.data.labels.length;
                    let i = wx - 1;
                    let c = ((+a + data2[i]) * b) / 100;
                    data1.push(data1[i]);
                    data2.push(+data2[i] + parseInt(inputAdd.value));
                    dataPie[1] = data2[data2.length - 1];
                    addRate();
                    myBar.data.labels.push((myBar.data.labels[wx - 1]) + 1);

                }
            }
            ;
            function deliteYear(addY) {
                for (let j = 0; j < addY; j++) {
                    data1.splice((data1.length - 1), 1);
                    data2.pop();
                    dataPie[1] = data2[data2.length - 1];
                    data3.pop();
                    dataPie[2] = data3[data3.length - 1];
                    labels.pop();
                }
            }
            ;