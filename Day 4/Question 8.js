//Replace Function Expressions with arrow functions in the code below:


let ask=(question,yes,no) =>(confirm(question))? yes():no()

ask("Do you afree",() => alert("You Agreed."), ()=> alert("You cancelled the execution."))