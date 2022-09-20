var student={
    student1:
    {
       Name:"Gyana",
       Essay : "Our Freedom Fighters struggled"
      
    },
    student2:
    {
       Name:"Vishaldeep",
       Essay:"Dr. APJ Abdul Kalam is a famous name in the whole world. He is counted among the greatest scientists of the 21st century. Even more, he becomes the 11th president of India and served his country. He was the most valued person of the country as his contribution as a scientist and as a president is beyond compare."
     
    },
    student3:
    {
        Name:"Subhajeet",
        Essay:"The COVID-19 pandemic has led to a dramatic loss of human life worldwide and presents an unprecedented challenge to public health, food systems and the world of work. The economic and social disruption caused by the pandemic is devastating: tens of millions of people are at risk of falling into extreme poverty, while the number of undernourished people, currently estimated at nearly 690 million, could increase by up to 132 million by the end of the year."
        
    },
    student4:
    {
        Name:"Sneha",
        Essay:"Mr. Narendra Damodardas Modi is the present and 15th Indian prime minister. He has been serving our nation since 26th May 2014 "
    
      
    },
     student5:
    {
        Name:"Ressab",
        Essay:"Above all, she never leaves my side even in the hardest of times."
        
    },
    }
    //var arr1=[]
    var arr2={}
    for(let i in student)
      {
        var count=student[i]['Essay'].split('').length
        //arr1.push(count)
        //console.log(arr1)
        if(count>20)
        {
          var gyana=(student[i]['Name'])
        //   arr2.push(gyana,count)
        //   arr2.gyana=count
          arr2[`${gyana}`] = count;
        }
      }

      let sortable = [];
      for (var k in arr2) {
          sortable.push([k, arr2[k]]);
      }
      
      sortable.sort(function(a, b) {
          return -a[1] + b[1];
      });
      console.log(sortable)

      
console.log(`${sortable[0][0]} is first winner and his word count is ${sortable[0][1]}`)
console.log(`${sortable[1][0]} is first winner and his word count is ${sortable[1][1]}`)