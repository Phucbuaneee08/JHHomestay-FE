import React,{useState} from "react";

function Detail_Booking() {
    
    const [startOrderDay,setStartOderDay] = useState("");
    const [endOrderDay,setEndOrderDay] = useState("");
    
    const fakedataPrice = "2.000.000";
    const fakedateOrderDay = ["01/01/2022","02/01/2022"];


    const splitFakedateOrderDay = fakedateOrderDay.map( function(day) {
        var parts = day.toString().split("/");
        var dd = parseInt(parts[1], 10);
        var mm = parseInt(parts[0], 10);
        var yyyy = parseInt(parts[2], 10);
        return [dd,mm,yyyy];
    })


    // kiểm tra định dạng ngày nhập vào
    function isValidDate(dateString)
    {   
    // First check for the pattern
    if(dateString.toString().length !== 10)
        return false;
    if (dateString.substring(2, 3) !== '/' || dateString.substring(5, 6) !== '/')
        return false; 
        

    // Parse the date parts to integers
    var parts = dateString.toString().split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 2021 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    if(day <=0  || day > monthLength[month - 1])
        return false;

    return true;
};


// kiểm tra ngày đặt có trùng với ngày khách khác đã đặt 
function checkday(start, end){
    var sparts = start.toString().split("/");
    var sday = parseInt(sparts[0], 10);
    var smonth = parseInt(sparts[1], 10);
    var syear = parseInt(sparts[2], 10);

    var eparts = end.toString().split("/");
    var eday = parseInt(eparts[0], 10);
    var emonth = parseInt(eparts[1], 10);
    var eyear = parseInt(eparts[2], 10);

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(eyear % 400 == 0 || (eyear % 100 != 0 && eyear % 4 == 0))
        monthLength[1] = 29;

    if(eyear < syear || (eyear === syear && emonth < smonth) || (eyear === syear && emonth === smonth && eday < sday))
        return false;
    if(syear < smonth){

        for(let j = sday; j <= monthLength[smonth - 1]; j ++){
            for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                if(syear === splitFakedateOrderDay[k][2] && smonth === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                return false;
            }
        }

        for(let i = smonth +1; i <=12; i++ ){
            for(let j= 1; j <= monthLength[i-1]; j ++){
                for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                    if(syear === splitFakedateOrderDay[k][2] && i === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                    return false;
                }
            }
        }
        for(let i = 1; i < emonth; i ++){
            for(let j = 1; j <= monthLength[i-1]; j ++){
                for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                    if(syear === splitFakedateOrderDay[k][2] && i === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                    return false;
                }
            }
        }
        for(let j = 1; j <= eday; j++ ){
            for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                if(syear === splitFakedateOrderDay[k][2] && emonth === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                return false;
            }
        }
    }

    if(eyear === syear){
        for(let j = sday; j <= monthLength[smonth - 1]; j ++){
            for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                if(syear === splitFakedateOrderDay[k][2] && smonth === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                return false;
            }
        }

        for(let i = smonth + 1; i < emonth; i ++){
            for(let j = 1; j < monthLength[i-1]; j ++){
                for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                    if(syear === splitFakedateOrderDay[k][2] && i === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                    return false;
                }
            }
        }

        for(let j = 1; j <= eday; j++ ){
            for(let k = 0 ; k < splitFakedateOrderDay.length; k ++){
                if(syear === splitFakedateOrderDay[k][2] && emonth === splitFakedateOrderDay[k][1] && j === splitFakedateOrderDay[k][0])
                return false;
            }
        }
    }

    return true;
}


function validationForm(e) {
    let returnData = {
      error : false,
      msg: ''
    }
    
    if(checkday(startOrderDay,endOrderDay) === false)
        returnData = {
            error: true,
            msg: 'đã có khách đặt vào ngày này'
        }
    if(isValidDate(startOrderDay) === false || isValidDate(endOrderDay) === false)
        returnData = {
            error: true,
            msg: 'sai định dạng ngày' 
        }
    return returnData;
}

function submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault();
 
   //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = validationForm()
 
    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    }else{
      alert("thành công")
    }
  }
  


    return(
    <div className="max-w-3/4 mx-auto">
        
        <form onSubmit={submitForm}>

                <div className="border-solid border-2 border-green-400 shadow-xl rounded-xl w-2/5 lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="text-center text-3xl font-bold text-gray-800 mb-5">
                        {fakedataPrice} VND/đêm
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-3 ">
                            <label  className=" col-span-2 text-lg font-medium text-gray-800 align-baseline mr-2">
                            Nhận Phòng
                            </label>
                            <input type="text" onChange={(event) => setStartOderDay(event.target.value)} className="text-md py-2 w-full focus:" placeholder="dd/mm/yyyy"></input>
                        </div>

                        <div className="mt-3">
                            <label  className=" col-span-2 text-lg font-medium text-gray-800 align-baseline mr-2">
                            Trả Phòng
                            </label>
                            <input type="text" onChange={(event) => setEndOrderDay(event.target.value)} className="text-md py-2  w-full" placeholder="dd/mm/yyyy" ></input>
                        </div>
                    </div>
                    <div className="mt-3 w-full flex flex-row items-end">
                        <label  className="text-lg font-medium text-gray-800 align-baseline mr-2 w-1/3">
                            Khách
                        </label>
                        <input className=" border rounded text-md font-medium leading-6 text-gray-800 w-2/3 pl-3 pb-1 pt-3" placeholder="4"></input>
                    </div>

                    <div className="mt-3 flex flex-row items-end">
                        <label className="text-lg font-medium text-gray-800 align-baseline mr-2 w-1/3">
                            Email:
                        </label> 
                        <input className="w-2/3 leading-6 border rounded text-md font-medium text-gray-800 pl-3 pb-1 pt-3" placeholder="VD: abc@gmail.com " />
                    </div>

                    <div className="mt-3 w-full flex flex-row items-end">
                        <label  className="text-lg font-medium text-gray-800 align-baseline mr-2 w-1/3">
                            ĐiệnThoại:
                        </label>
                        <input className="w-2/3 border rounded text-md font-medium leading-6 text-gray-800 pl-3 pb-1 pt-3" placeholder="0123456789"></input>
                    </div>

                    <div className="mt-8">
                        <button role="button" className=" text-sm font-semibold leading-none text-white bg-green-400 border rounded hover:bg-green-600 py-4 w-full">
                            Đặt Homestay
                        </button>
                    </div>
                </div>
        </form>
    </div>
    )
}

export default Detail_Booking;