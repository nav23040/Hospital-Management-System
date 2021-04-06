
import './room.css';
import Button from '@material-ui/core/Button';
import Date from './Date';
import Sam from './Sample';
function Room() {
  
  return (
    <div>
      <div class="room-container">
      <label for="" >Pick a Floor</label>
      <select id="floor">
        <option value="10">Floor 1</option>
        <option value="12">Floor 2</option>
        <option value="8">Floor 3</option>
        <option value="9">Floor 4</option>
      </select>
      </div>
      <div>
        <Date/>
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
        <div class="seat" value="101">Room 101</div>
        <div class="seat " value="102">Room 102</div>
        <div class="seat" value="103">Room 103</div>
        <div class="seat occupied" value="104">Room 104</div>
        <div class="seat" value="105">Room 105</div>
        <div class="seat" value="106">Room 106</div>
        <div class="seat" value="107">Room 107</div>
        <div class="seat" value="108">Room 108</div>
        <div class="seat" value="109">Room 109</div>
        <div div class="seat " value="110">Room 110</div>
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
      You have selected <span id="count">0</span> Room for a price of Rs.<span
        id="total"
        >0</span
      >
      </p>
      <div className="btn">
            <Button variant="contained" color="primary">
             Submit
            </Button>
      </div>
    </div>
    <script src="./Sample.js"></script>
    </div>
    

  );
}

export default Room;
