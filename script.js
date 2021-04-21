/*               Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */

                const addNewTask = function(){
                    let userInput = document.getElementById('newTask').value
                    let newLi = document.createElement('li')
                    document.getElementById('myTaskList').appendChild(newLi)
                    let myLiis = document.getElementsByTagName('li')
                    newLi.innerText = userInput
                    userInput.innerHTML = ' '

                        
                }

      /* EXERCISE 6: 
                Create a method "removeLast" which removes the last item from the task list
              */
             const removeLast = function(){
                let myLi =  document.getElementsByTagName('li')
            
                myLi[myLi.length - 1].remove()
                console.log('aaaa',myLi);
             }



      /* EXERCISE 7: 
                Create a method "removeFirst" which removes the first item from the task list
            */
                const removeFirst = function(){
                    let myLi =  document.getElementsByTagName('li')
                
                    myLi[0].remove()
                    
                 }
      /* EXERCISE 8: 
               Create a method "getTasksAsArray" which returns, 
               and prints to the console an array containing the tasks as string
              
            */
               let myArr = document.getElementsByTagName('li')
               console.log(myArr);

               let getTasksAsArray = function(){
                let myArr = document.getElementsByTagName('li')
                for(let i =0; i< myArr.length;i++){
                    console.log(myArr[i].innerText);
                }

                

               }
               console.log(getTasksAsArray());
      /* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
               onchange event listener ad applies it as background to every list item
            */
           let changeTaskBackgroundColor = function(){
               let userColor = document.getElementById('colorPicker').value
               document.querySelector('body').style.backgroundColor = userColor

           }

      /* EXTRA */

      /* EXERCISE 10: 
               Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
               Use your spare time to beautify your task list via CSS.

               Suggestion:
               - Break the code into many function for semplicity 
               - Reuse the functions previously created
            */