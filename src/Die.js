import{ Component } from "react";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class Die extends Component {
  static getDice(rand) {
    // if (rand === 1) return faDiceOne
    // else if (rand === 2) return faDiceTwo
    // else if (rand === 3) return faDiceThree
    // else if (rand === 4) return  faDiceFour
    // else if (rand === 5) return faDiceFive
    // else if (rand === 6) return faDiceSix

    switch (rand) {
      case 1:
        return faDiceOne;
      case 2:
        return faDiceTwo;
      case 3:
        return faDiceThree;
      case 4:
        return faDiceFour;
      case 5:
        return faDiceFive;
      case 6:
        return faDiceSix;
      default:
        break;
    }
  }
}

export default Die;
