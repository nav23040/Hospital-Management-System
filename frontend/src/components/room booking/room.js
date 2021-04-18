import  React, {useState} from "react";
import './room.css';
import { Button, Typography, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '0%',
    marginTop : '1%',
    color: 'white',
    alignItems:'center',
    marginLeft:'10%',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    textDecorationColor: 'white',
  },
 

}));

const values = {
    name: '',
    age: '',
    gender: '',
    days: '',
    date: ''

}


function Room() {
  const [details, setDetails] = useState(values);
  const classes = useStyles();
  const floor1 = useState(['Room 101', 'Room 102', 'Room 103', 'Room 104', 'Room 105','Room 106', 'Room 107', 'Room 108', 'Room 109', 'Room 110', 'Room 111', 'Room 112', 'Room 113', 'Room 114', 'Room 115','Room 116']);

  const handleInputChange = e =>{
    const{ name,value} =e.target
    setDetails({
        ...details,
        [name]:value
    })
  }

  function onSubmit(){
    console.log(details); 
  }

  return (
    <div>
      <div class="room-container">
      <Typography component="h1" variant="h4" align="left" style={{marginLeft:'10%', padding: '10px'}}>
            Book Room
          </Typography>
      { /*<label for="" >Pick a Floor</label>
      <select id="floor">
        <option value="10">Floor 1</option>
        <option value="12">Floor 2</option>
        <option value="8">Floor 3</option>
        <option value="9">Floor 4</option>
      </select> */}
      </div>
      <div>
      <div >  
          <form className={classes.container} noValidate>
          <TextField id="outlined-basic" label="Name" variant="outlined" name="name" type='text' value={details.name} onChange={handleInputChange} />
          <TextField id="outlined-basic" label="Age" variant="outlined" name="age" type='text' value={details.age} onChange={handleInputChange} />
          <TextField id="outlined-basic" label="Gender" variant="outlined" name="gender" type='text' value={details.gender} onChange={handleInputChange} />
          <TextField id="outlined-basic" label="Number of day" variant="outlined" name="days" type='number' value={details.days} onChange={handleInputChange} />
            <TextField
              id="date"
              label="Booking Date"
              type="date"
              name="date"
              value={details.date}
              onChange={handleInputChange}
              defaultValue="xxxx-xx-xx"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form> 
          </div>
      </div>
      <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
      </ul>
      <div class="container">
      <div class="row">
        {
         /* floor1[0].map((value, key) => (
            <div class="seat" value={key} > {value} </div>
          ))
          */
        }
        </div>

      <div class="row">
        <div class="seat" value="101">Room 101</div>
        <div class="seat " value="102">Room 102</div>
        <div class="seat" value="103">Room 103</div>
        <div class="seat occupied" value="104">Room 104</div>
        <div class="seat" value="105">Room 105</div>
        <div class="seat" value="106">Room 106</div>
        <div class="seat" value="107">Room 107</div>
        <div class="seat" value="108">Room 108</div>
        <div class="seat" value="109">Room 109</div>
        <div class="seat" value="110">Room 110</div>
      </div>

     
      <div class="row">
        <div class="seat occupied">Room 111</div>
        <div class="seat">Room 112</div>
        <div class="seat">Room 113</div>
        <div class="seat">Room 114</div>
        <div class="seat">Room 115</div>
        <div class="seat">Room 116</div>
        <div class="seat">Room 117</div>
        <div class="seat">Room 118</div>
        <div class="seat">Room 119</div>
        <div class="seat">Room 120</div>
      </div>

      <div class="row">
        <div class="seat">Room 121</div>
        <div class="seat">Room 122</div>
        <div class="seat">Room 123</div>
        <div class="seat ">Room 124</div>
        <div class="seat">Room 125</div>
        <div class="seat">Room 126</div>
        <div class="seat">Room 127</div>
        <div class="seat occupied">Room 128</div>
        <div class="seat">Room 129</div>
        <div class="seat">Room 130</div>
      </div>

      <p class="text">
      You have selected <span id="count">0</span>
      </p>
      <div className="btn">
            <Button variant="contained" color="primary" onClick={onSubmit}>
             Submit
            </Button>
      </div>
    </div>
    <script src="./Sample.js"></script>
    </div>
    

  );
}

export default Room;
