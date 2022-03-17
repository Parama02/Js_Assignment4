function switch1(date){

    var day=""
    
    switch(date){
        case "07-03-2022":
        case "14-03-2022":
        case "21-03-2022":
        case "28-03-2022":
            day="Monday"
            break
        case "01-03-2022":
        case "08-03-2022":
        case "15-03-2022":
        case "22-03-2022":
        case "29-03-2022":
            day="Tuesday"
            break
        case "02-03-2022":
        case "09-03-2022":
        case "16-03-2022":
        case "23-03-2022":
        case "30-03-2022":
            day="Wednesday"
            break
        case "03-03-2022":
        case "10-03-2022":
        case "17-03-2022":
        case "24-03-2022":
        case "31-03-2022":
            day="Thursday"
            break
        case "04-03-2022":
        case "11-03-2022":
        case "18-03-2022":
        case "25-03-2022":
            day="Friday"
            break
        case "05-03-2022":
        case "12-03-2022":
        case "19-03-2022":
        case "26-03-2022":
            day="Saturday"
            break
        case "06-03-2022":
        case "13-03-2022":
        case "20-03-2022":
        case "27-03-2022":
            day="Sunday"
            break
        default:
            ans="Try Again !"
    }
    return day
    }

//ex1

console.log("\nInput:\n \t 07-03-2022")
console.log("Output:\n")
console.log("\t"+switch1("07-03-2022"))

//ex2

console.log("\nInput:\n \t 24-03-2022")
console.log("Output:\n")
console.log("\t"+switch1("24-03-2022"))

