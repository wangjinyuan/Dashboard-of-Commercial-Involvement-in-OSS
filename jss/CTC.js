
    // 基于准备好的dom，初始化echarts实例
    var myChartCTC = echarts.init(document.getElementById('CTC'), 'dark');

    // 指定图表的配置项和数据
    var option = {
      // backgroundColor: '#f7f7f7',//背景颜色
      tooltip: {
        trigger: 'item'
      },
      legend: {
            type: 'scroll',            // 设置图例翻页
            icon: 'rect',
            orient: 'vertical', 
            pageIconColor: '#fff',
            left:0,
            bottom:0,
            itemGap: 1,
            pageIconColor: '#000000',
		},
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: false,
      series: [
        {
          center: ['60%', '50%'],
          name: 'Access From',
          type: 'pie',
          radius: ['80%', '100%'],
          data: [
            { value: 597304, name: 'CompanyCommits' },
            { value: 339478, name: 'VolunteerCommits' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        {
          center: ['60%', '50%'],
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '55%'],
          label: {
						normal: {
							show: false,
						},
					},
          labelLine: {
						normal: {
							show: false
						}
					},
          data: [
            { value: 136451, name: 'Intel'},
            { value: 98669, name: 'Red Hat'},
            { value: 47979, name: 'The Linux Kernel Archives'},
            { value: 47476, name: 'Linaro'},
            { value: 40509, name: 'Advanced Micro Devices'},
            { value: 38672, name: 'SUSE Linux'},
            { value: 27957, name: 'Oracle'},
            { value: 27132, name: 'Huawei Technologies'},
            { value: 25379, name: 'Texas Instruments'},
            { value: 22420, name: 'Samsung Electronics'},
            { value: 20232, name: 'Mellanox Technologies'},
            { value: 13509, name: 'Broadcom'},
            { value: 50919, name: 'others'},
            { value: 339748, name: 'volunteers'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        {
          
        }
      ]
    };
    myChartCTC.setOption(option);
    myChartCTC.on('click', function (params) {
      if(params.name=='VolunteerCommits'||params.name=='CompanyCommits'){
        
      }
      else if (params.name=='others'){
	myChartCTC.dispose();
        var chart2 = echarts.init(document.getElementById('CTC'),  'dark');
        chart2.setOption(option2)
        chart2.on('click', function (params){
          alert(params.name);
        })
      }
      else{
        alert(params.name);}
    });

    
  var option2 = {
    
    tooltip: {
      trigger: 'item'
    },
    legend: {
          type: 'scroll',            // 设置图例翻页
          icon: 'rect',
          orient: 'vertical', 
          pageIconColor: '#fff',
          left:0,
          bottom:0,
          itemGap: 1,

      },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: false,
    series: [
      {
        center: ['60%', '50%'],
        name: 'Access From',
        type: 'pie',
        radius: ['0%', '85%'],
        label: {
                      normal: {
                          show: false,
                      },
                  },
        labelLine: {
                      normal: {
                          show: false
                      }
                  },
        data: [
            { value: 11913, name: 'Nick Piggin'},
{ value: 6719, name: 'Sony'},
{ value: 5769, name: 'Linux Foundation'},
{ value: 5694, name: 'Arnd Bergmann'},
{ value: 5229, name: 'David M. Loft'},
{ value: 3880, name: 'Alibaba'},
{ value: 2574, name: 'Netronome Systems'},
{ value: 2464, name: 'Jason A. Donenfeld'},
{ value: 930, name: 'Hammerspace'},
{ value: 864, name: 'Proton Technologies'},
{ value: 841, name: 'Sebastian Radtke'},
{ value: 831, name: 'SYSGO'},
{ value: 810, name: 'Technical University of Berlin'},
{ value: 585, name: 'PMC-Sierra'},
{ value: 238, name: 'Synaptics'},
{ value: 214, name: 'Rohm Semiconductor'},
{ value: 166, name: 'Amazon Lab126'},
{ value: 151, name: 'Vyatta'},
{ value: 127, name: 'Metanate'},
{ value: 118, name: 'C-SKY Microsystems'},
{ value: 95, name: 'Motorola Mobility'},
{ value: 80, name: 'T-Online International'},
{ value: 73, name: 'Cybernetics'},
{ value: 51, name: 'Freie Universit盲t Berlin'},
{ value: 39, name: 'Airtame'},
{ value: 36, name: 'DH electronics'},
{ value: 36, name: 'Jack Cox'},
{ value: 35, name: 'WAGO Kontakttechnik'},
{ value: 33, name: 'Jan-Ove Austell'},
{ value: 32, name: 'WIA'},
{ value: 25, name: 'Trusted Computer Solutions'},
{ value: 24, name: 'Kaspersky Lab'},
{ value: 22, name: 'Mozilla Corporation'},
{ value: 19, name: 'Vaisala'},
{ value: 18, name: 'Bell Canada'},
{ value: 17, name: 'Softnautics'},
{ value: 14, name: 'ESD Electronics'},
{ value: 13, name: 'Time Warner Cable Internet'},
{ value: 12, name: 'Jolla'},
{ value: 9, name: 'Pedro Vanzella'},
{ value: 8, name: 'Flash Ics'},
{ value: 7, name: 'Innominate Security Technologies'},
{ value: 7, name: 'Applied Asynchrony'},
{ value: 6, name: 'Silicom Connectivity Solutions'},
{ value: 5, name: 'Zoho'},
{ value: 5, name: 'Lavabit'},
{ value: 5, name: 'Sascha Salscheider'},
{ value: 4, name: 'Exemail'},
{ value: 4, name: 'Steve N. Kass'},
{ value: 4, name: 'Riot Games'},
{ value: 4, name: 'Wupperonline'},
{ value: 3, name: 'Lumanate'},
{ value: 3, name: 'Zone Media O脺'},
{ value: 3, name: 'Kynetics'},
{ value: 2, name: 'Paul Sheridan'},
{ value: 2, name: 'Kirk and Sheila Holtmeier'},
{ value: 2, name: 'Freeserve'},
{ value: 2, name: 'Plantronics'},
{ value: 2, name: 'Bill Kendrick'},
{ value: 2, name: 'Terascala'},
{ value: 2, name: 'PC-Doctor'},
{ value: 2, name: 'Victor Toso'},
{ value: 2, name: 'Alexander Birkner'},
{ value: 2, name: 'Michael Tratt'},
{ value: 2, name: 'Daktronics'},
{ value: 2, name: 'Missing Link Electronics'},
{ value: 2, name: 'UniCloud'},
{ value: 1, name: 'Baums on Web'},
{ value: 1, name: 'Naver Corporation'},
{ value: 1, name: 'Tadpole Computer'},
{ value: 1, name: 'Tido Lucke'},
{ value: 1, name: 'Wells Fargo'},
{ value: 1, name: 'WOW Company'},
{ value: 1, name: 'Netcom'},
{ value: 1, name: 'John D. Cox'},
{ value: 1, name: 'GomSpace'},
{ value: 1, name: 'Pluto'},
{ value: 1, name: 'Neural Games'},
{ value: 1, name: 'Solution Space Limited'},
{ value: 1, name: 'Berufsfortbildungswerk Gemeinn眉tzige'},
{ value: 1, name: 'Best Anthony'},
{ value: 1, name: 'Zak Web'},
{ value: 1, name: 'PTC'},
{ value: 1, name: 'QD Vision'},
{ value: 1, name: 'TBS Biometrics'},
{ value: 1, name: 'Capgo'},
{ value: 1, name: 'Fujikura'},
{ value: 1, name: 'Labus Media'},
{ value: 1, name: 'SNS Telecom'},
{ value: 1, name: 'Tuffmail.com'},
{ value: 1, name: 'Codemercs'},
{ value: 1, name: 'GreenSocs'},
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 1,
            shadowOffsetX: 0,

          }
        }
      },
      {
        
      }
    ]
  };
